import React, { useState, useEffect } from 'react';

/**
 * Google Reviews Component for Vercel Serverless Function
 * 
 * USAGE:
 * <GoogleReviews placeId="ChIJ6Y9wenuJkYgRXlWv9KOUkG4" />
 * 
 * PROPS:
 * - placeId: Google Place ID (required)
 * - maxReviews: Number of reviews to display (default: 5)
 * - showRating: Show overall rating header (default: true)
 * - showProfilePics: Show reviewer profile pictures (default: true)
 * - showAddress: Show business address (default: false)
 */

const GoogleReviews = ({ 
  placeId = 'ChIJ6Y9wenuJkYgRXlWv9KOUkG4',
  maxReviews = 5,
  showRating = true,
  showProfilePics = true,
  showAddress = false
}) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [businessInfo, setBusinessInfo] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, [placeId]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);

      // Call Vercel serverless function
      const response = await fetch(`/api/reviews?placeId=${placeId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch reviews');
      }

      const result = await response.json();

      if (result.success && result.data) {
        setBusinessInfo({
          name: result.data.name,
          rating: result.data.rating,
          totalReviews: result.data.totalReviews,
          address: result.data.address,
          googleUrl: result.data.googleUrl
        });
        setReviews(result.data.reviews || []);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        style={{
          color: i < rating ? '#FBBC04' : '#E0E0E0',
          fontSize: '1.25rem',
          lineHeight: '1'
        }}
      >
        ★
      </span>
    ));
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const truncateText = (text, maxLength = 300) => {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Loading State
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        textAlign: 'center'
      }}>
        <div>
          <div style={{
            width: '48px',
            height: '48px',
            border: '3px solid #E0E0E0',
            borderTop: '3px solid #4285F4',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ color: '#666', fontWeight: '500' }}>Loading reviews...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div style={{
        backgroundColor: '#FEF2F2',
        border: '1px solid #FCA5A5',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⚠️</div>
        <p style={{ 
          color: '#991B1B', 
          fontWeight: '600', 
          fontSize: '1.125rem', 
          marginBottom: '0.5rem' 
        }}>
          Failed to load reviews
        </p>
        <p style={{ color: '#DC2626', fontSize: '0.875rem', marginBottom: '1rem' }}>
          {error}
        </p>
        <button 
          onClick={fetchReviews}
          style={{
            padding: '0.5rem 1.25rem',
            backgroundColor: '#DC2626',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '0.875rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#B91C1C'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#DC2626'}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
    }}>
      
      {/* Header with overall rating */}
      {showRating && businessInfo && (
        <div style={{
          marginBottom: '2rem',
          textAlign: 'center',
          borderBottom: '1px solid #E5E7EB',
          paddingBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '0.5rem'
          }}>
            {businessInfo.name}
          </h2>
          
          {showAddress && businessInfo.address && (
            <p style={{
              color: '#6B7280',
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              {businessInfo.address}
            </p>
          )}
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '0.5rem'
          }}>
            <span style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#111827'
            }}>
              {businessInfo.rating.toFixed(1)}
            </span>
            <div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {renderStars(Math.round(businessInfo.rating))}
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                marginTop: '0.25rem'
              }}>
                Based on {businessInfo.totalReviews.toLocaleString()} Google reviews
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Reviews list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {reviews.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: '#6B7280'
          }}>
            <p style={{ fontSize: '1.125rem' }}>No reviews available yet.</p>
          </div>
        ) : (
          reviews.slice(0, maxReviews).map((review, index) => (
            <div 
              key={index} 
              style={{
                borderBottom: index < reviews.slice(0, maxReviews).length - 1 ? '1px solid #E5E7EB' : 'none',
                paddingBottom: '1.5rem',
                transition: 'background-color 0.2s',
                padding: '1rem',
                margin: '0 -1rem',
                borderRadius: '8px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Reviewer info */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '0.75rem'
              }}>
                {showProfilePics && review.profile_photo_url && (
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: '0'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=4285F4&color=fff`;
                    }}
                  />
                )}
                
                <div style={{ flex: '1', minWidth: '0' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <h3 style={{
                      fontWeight: '600',
                      color: '#111827',
                      fontSize: '1.125rem',
                      margin: '0'
                    }}>
                      {review.author_name}
                    </h3>
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#6B7280'
                    }}>
                      {formatDate(review.time)}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '2px',
                    marginTop: '0.25rem'
                  }}>
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              {/* Review text */}
              {review.text && (
                <p style={{
                  color: '#374151',
                  lineHeight: '1.75',
                  marginLeft: showProfilePics ? '4rem' : '0',
                  marginBottom: '0.5rem',
                  fontSize: '1rem'
                }}>
                  {truncateText(review.text)}
                </p>
              )}

              {/* Google link */}
              <a 
                href={review.author_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#2563EB',
                  fontSize: '0.875rem',
                  marginLeft: showProfilePics ? '4rem' : '0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => e.target.style.color = '#1D4ED8'}
                onMouseOut={(e) => e.target.style.color = '#2563EB'}
              >
                View on Google
                <svg 
                  style={{ width: '1rem', height: '1rem' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))
        )}
      </div>

      {/* Footer - View all link */}
      {businessInfo && (
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid #E5E7EB'
        }}>
          <a 
            href={businessInfo.googleUrl || `https://search.google.com/local/reviews?placeid=${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4285F4',
              color: 'white',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#3367D6';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#4285F4';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View All Reviews on Google
          </a>

          <div style={{ marginTop: '1rem' }}>
            <a 
              href={businessInfo.googleUrl || `https://search.google.com/local/writereview?placeid=${placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2563EB',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.color = '#1D4ED8'}
              onMouseOut={(e) => e.target.style.color = '#2563EB'}
            >
              Leave us a review
              <svg 
                style={{ width: '1rem', height: '1rem' }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleReviews;