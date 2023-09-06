import React, { useState, useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Chart from "chart.js/auto";
import "./styles.css";

// Interface for country data
interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/?size=512&id=U1cbNtgDXO2m&format=png",
  iconSize: [32, 32],
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});


// Interface for historical graph data
interface GraphData {
  cases: { [date: string]: number };
}

// ChartsAndMaps component definition
const ChartsAndMaps: React.FC = () => {
  // State for graph and country data, and loading indicator
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Reference to the graph canvas element
  const graphCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const mapContainerProps = useMemo(
    () => ({
      center: { lat: 20, lng: 0 }, 
      zoom: 2,
      style: { width: '100%', height: '426px', margin: '0 auto' },
    }),
    []
  );

  // Fetch data on component mount
  useEffect(() => {
    // Fetch historical graph data
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((data) => {
        setGraphData(data);
        setIsLoading(false);
      });

    // Fetch country data for map markers
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);

  // Update chart when graphData changes
  useEffect(() => {
    if (graphCanvasRef.current && graphData) {
      const graphLabels = Object.keys(graphData.cases);
      const graphValues = Object.values(graphData.cases);

      const graphConfig = {
        type: "line" as const,
        data: {
          labels: graphLabels,
          datasets: [
            {
              label: "Cases",
              data: graphValues,
              borderColor: "rgba(255, 0, 0, 0.8)",
              backgroundColor: "rgba(243, 58, 106, 0.4)",
              fill: true,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
        },
      };

      new Chart(graphCanvasRef.current!, graphConfig);
    }
  }, [graphData]);

  // Create map markers based on country data
  const mapMarkers = countryData.map((country) => (
    <Marker
    key={country.country}
    position={[country.countryInfo.lat, country.countryInfo.long]}
    icon={customIcon}
  >
    <Popup>
      <div>
        <h3>{country.country}</h3>
        <p>Total Active Cases: {country.active}</p>
        <p>Total Recovered Cases: {country.recovered}</p>
        <p>Total Deaths: {country.deaths}</p>
      </div>
    </Popup>
  </Marker>
  ));

  return (
    <div>

      {/* Chart Container */}
      <div className="chart-container">
        <h2 className="text-2xl font-bold mb-4 mt-2 text-center">Cases Fluctuations</h2>
        {isLoading ? (
          <div className="loading-screen">Loading Line Graph...</div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <canvas ref={graphCanvasRef} width="100%" height="400"></canvas>
          </div>
        )}
      </div>

      {/* Map Container */}
      <div className="map-container">
        <h2 className="text-2xl font-bold mb-4 text-center">Map</h2>
        {isLoading ? (
          <div className="loading-screen">Loading Map...</div>
        ) : (
          <MapContainer {...mapContainerProps}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {mapMarkers}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default ChartsAndMaps;
