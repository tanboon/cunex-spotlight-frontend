"use client";

import { Box } from "@mui/material";
import { Map, Marker, useApiIsLoaded, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

import { areas } from "@/app/constant/area-data";
import { useBoolean } from "@/app/hooks/use-boolean";
import { AnimatePresence } from "framer-motion";
import HomeReviewBottomSheet from "./home-review-bottom-sheet";
import CustomizedBottomSheet from "@/app/components/customs/customized-buttom-sheet";

// Map component props
type HomeMapProps = {
  defaultZoom?: number;
};

const DEFAULT_CENTER = { lat: 13.7392279, lng: 100.5283817 };

function HomeMap({ defaultZoom = 16 }: HomeMapProps) {
  const isOpen = useBoolean();

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
    <Box sx={{ width: 1, height: "100vh", zIndex: 1 }}>
      <Map
        defaultZoom={defaultZoom}
        defaultCenter={DEFAULT_CENTER}
        disableDefaultUI={true}
        gestureHandling="greedy"
      >
        <Marker
          position={{ lat: 13.7371412, lng: 100.5337339 }}
          title="Marker Title"
          label={{
            text: "โรงอาหาร",
            fontSize: "14px",
            fontFamily: " 'Noto Sans Thai', sans-serif",
            color: "black",
          }}
          icon={{
            url: "/Material/Icon/canteenMarker.svg",
            scaledSize: new google.maps.Size(30, 30),
            anchor: new google.maps.Point(15, 15),
            labelOrigin: new google.maps.Point(15, 37),
          }}
          onClick={isOpen.onTrue}
        />
      </Map>

      <AnimatePresence>
        <CustomizedBottomSheet
          key={String(isOpen.value)}
          isOpen={isOpen.value}
          setIsOpen={isOpen.setValue}
        >
          <HomeReviewBottomSheet />
        </CustomizedBottomSheet>
      </AnimatePresence>
    </Box>
  );
}

export default HomeMap;
