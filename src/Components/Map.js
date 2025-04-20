
import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -1.2921, // Default latitude (e.g., Nairobi, Kenya)
  lng: 36.8219, // Default longitude
};

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY", // Replace with your actual API key
  });

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={location || center}>
      {location && <Marker position={location} />}
    </GoogleMap>
  );
};

export default MapComponent;
