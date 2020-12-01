import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay() {
  const [location, setLocation] = useState(useLocation().pathname);

  return (
    <>
      <h1 data-testid="location-display">{location}</h1>
    </>
  );
}
