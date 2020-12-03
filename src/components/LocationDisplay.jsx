import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay() {
  // const [location, setLocation] = useState("");

  const loc = useLocation();
  /* 
  useEffect(() => {
    setLocation(loc.pathname);
  }, [setLocation, loc]);
 */
  return (
    <>
      <h1 data-testid="location-display">{loc.pathname}</h1>
    </>
  );
}
