/**
 * Vercel Serverless Function for Google Reviews
 * 
 * File location: /api/reviews.js
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create this file in your project: /api/reviews.js
 * 
 * 2. Add environment variable in Vercel Dashboard:
 *    - Go to: Project Settings → Environment Variables
 *    - Add: GOOGLE_PLACES_API_KEY = your_api_key_here
 *    - Important: Add it for Production, Preview, and Development
 * 
 * 3. Deploy to Vercel:
 *    - vercel deploy
 *    - Or: git push (if connected to GitHub)
 * 
 * 4. Your endpoint will be:
 *    - https://your-project.vercel.app/api/reviews?placeId=YOUR_PLACE_ID
 * 
 * 5. For local development:
 *    - Create .env.local file with: GOOGLE_PLACES_API_KEY=your_key
 *    - Run: vercel dev
 */

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported' 
    });
  }

  // Get placeId from query parameters
  const { placeId } = req.query;

  if (!placeId) {
    return res.status(400).json({ 
      error: 'Missing placeId',
      message: 'Please provide a placeId query parameter' 
    });
  }

  // Get API key from environment variables
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error('GOOGLE_PLACES_API_KEY not found in environment variables');
    return res.status(500).json({ 
      error: 'Configuration error',
      message: 'Google Places API key not configured. Please add GOOGLE_PLACES_API_KEY to Vercel environment variables.' 
    });
  }

  try {
    // Build Google Places API URL
    const fields = 'name,rating,reviews,user_ratings_total,formatted_address,url';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
    
    // Fetch from Google Places API
    const response = await fetch(url);
    const data = await response.json();

    // Check if the request was successful
    if (data.status === 'OK') {
      // Return successful response
      return res.status(200).json({
        success: true,
        data: {
          name: data.result.name,
          rating: data.result.rating,
          totalReviews: data.result.user_ratings_total,
          reviews: data.result.reviews || [],
          address: data.result.formatted_address,
          googleUrl: data.result.url
        }
      });
    } else {
      // Handle Google API errors
      console.error('Google Places API Error:', data.status, data.error_message);
      return res.status(400).json({ 
        error: 'Google API error',
        status: data.status,
        message: data.error_message || 'Failed to fetch reviews from Google'
      });
    }
  } catch (error) {
    // Handle fetch errors
    console.error('Error fetching Google reviews:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}


/**
 * TESTING YOUR FUNCTION:
 * 
 * Local:
 * http://localhost:3000/api/reviews?placeId=ChIJ6Y9wenuJkYgRXlWv9KOUkG4
 * 
 * Production:
 * https://your-project.vercel.app/api/reviews?placeId=ChIJ6Y9wenuJkYgRXlWv9KOUkG4
 * 
 * 
 * RESPONSE FORMAT:
 * {
 *   "success": true,
 *   "data": {
 *     "name": "Hydration Solution",
 *     "rating": 4.8,
 *     "totalReviews": 127,
 *     "reviews": [...],
 *     "address": "123 Main St, Tampa, FL",
 *     "googleUrl": "https://maps.google.com/..."
 *   }
 * }
 */