"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import { CircularProgress } from "@mui/material";

function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      onLoad={() => <CircularProgress color="secondary" />}
      onError={(error) => console.error("Google Maps failed to load", error)}
    >
      {children}
    </APIProvider>
  );
}

export default ClientProvider;
