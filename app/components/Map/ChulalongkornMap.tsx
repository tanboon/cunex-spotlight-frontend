"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Map, useMap, useApiIsLoaded, Marker } from "@vis.gl/react-google-maps";
import { areas, Location, testAreas } from "./data";
import CustomizedBottomSheet from "../Custom/CustomizedButtomSheet";
import ReviewBottomSheet from "../Review/ReviewBottomSheet";

// Map component props
interface BaseMapProps {
  defaultCenter?: Location;
  defaultZoom?: number;
}

export const ChulalongKornMap = ({
  defaultCenter = { lat: 13.7392279, lng: 100.5283817 },
  defaultZoom = 16,
}: BaseMapProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoaded = useApiIsLoaded();
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const polygons: google.maps.Polygon[] = [];

    Object.keys(areas).forEach((key) => {
      const polygon = new google.maps.Polygon({
        paths: areas[key],
        strokeColor: "#000000",
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: "#646464",
        fillOpacity: 0.5,
      });

      polygon.setMap(map);
      polygons.push(polygon);
    });

    return () => {
      polygons.forEach((polygon) => polygon.setMap(null));
    };
  }, [map]);

  if (!isLoaded) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Map
        styles={mapStyles}
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        disableDefaultUI={true}
        gestureHandling="greedy"
      >
        <Marker
          position={{ lat: 13.7371412, lng: 100.5337339 }}
          title="Marker Title"
          label={{
            text: "โรงอาหาร",
            fontSize: "14px",
            color: "black",
          }}
          icon={{
            url: "/Material/Icon/canteenMarker.svg",
            scaledSize: new google.maps.Size(30, 30),
            anchor: new google.maps.Point(15, 15),
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </Map>
      <ReviewBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export const mapStyles = [];
