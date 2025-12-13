
// ServiceAreaSection.jsx
import React from 'react';
// Import Leaflet CSS file in your component file (crucial for proper styling)
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';

// Define the coordinates for the map center and service areas
// Example center: Washington D.C. area
const mapCenter = [38.9072, -77.0369];
const zoomLevel = 10;

// Example service areas using Polygon (GeoJSON format or an array of LatLng points)
// Example: A service area around Arlington, VA and D.C. area
const serviceAreaPolygon = [
    [38.8892, -77.0507], // Washington Monument area
    [38.8953, -77.0353], // White House area
    [38.8576, -77.0425], // Pentagon area
    [38.8252, -77.1215], // Arlington area
];

const polygonOptions = { color: 'blue', fillColor: '#304ffe', fillOpacity: 0.3 };



export default function ServiceAreaSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main 2-column layout (flex-row on desktop, flex-col-reverse on mobile) */}
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

                    {/* Column 1 (Left on desktop, Bottom on mobile): Interactive Map */}
                    <div className="md:w-1/2 w-full">
                        {/* The MapContainer MUST have a defined height, otherwise it won't display */}
                        <div className="rounded-xl shadow-xl overflow-hidden h-96 w-full">
                            <MapContainer center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false} className="h-full w-full" >

                                {/* Add the base map layer from OpenStreetMap */}
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                {/* Add a specific service area polygon */}
                                <Polygon pathOptions={polygonOptions} positions={serviceAreaPolygon}>
                                    <Popup>
                                        Our primary service region.
                                    </Popup>
                                </Polygon>

                                {/* Optional: Add a marker for the main office location */}
                                <Marker position={mapCenter}>
                                    <Popup>
                                        Main Office Location
                                    </Popup>
                                </Marker>

                            </MapContainer>
                        </div>
                    </div>

                    {/* Column 2 (Right on desktop, Top on mobile): Heading and Paragraph */}
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                            We Serve Clients Across Major Cities
                        </h2>
                        <p className="text-xl text-gray-500">
                            Our firm operates nationwide, with primary offices strategically located in key business hubs to provide timely and effective service wherever you are.
                        </p>
                        <p className="mt-4 text-gray-600">
                            *If your location isn't on the map, please contact us directly as we often travel for complex cases.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

}
