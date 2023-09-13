import React, { useEffect, useRef } from "react";

export default function MapGoogle({
  center
}) {
  const ref = useRef();

  const styleMap = {
    width: '400px'
  }

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center: center,
      zoom: 0,
    });

    new google.maps.Marker({
      position: center,
      map
    });
  });

  return <div ref={ref} id="map" style={styleMap} />;
}