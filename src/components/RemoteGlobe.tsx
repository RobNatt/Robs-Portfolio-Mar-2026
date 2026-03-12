"use client";
import { useState, useRef, useCallback } from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

const HOVER_DELAY_MS = 600;

export function RemoteGlobe() {
  const [isActive, setIsActive] = useState(false);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    delayRef.current = setTimeout(() => {
      setIsActive(true);
      delayRef.current = null;
    }, HOVER_DELAY_MS);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
    setIsActive(false);
  }, []);

  return (
    <div
      className="mt-20 mb-20 py-10 dark:bg-black bg-white w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Hire me! I'm taking on remote clients  {" "}
          <span className="text-neutral-400">
            {"Anywhere".split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          MVP Web Development builds starting from $3k.
        </p>
      </div>
      <WorldMap
        isActive={isActive}
        dots={[
          // 1. Omaha (hub) → US locations
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 40.7128, lng: -74.006 } }, // Omaha - New York
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 47.6062, lng: -122.3321 } }, // Omaha - Seattle
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 25.7617, lng: -80.1918 } }, // Omaha - Miami
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 41.8781, lng: -87.6298 } }, // Omaha - Chicago
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 39.7392, lng: -104.9903 } }, // Omaha - Denver
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 30.2672, lng: -97.7431 } }, // Omaha - Austin
          { start: { lat: 41.2565, lng: -95.9345 }, end: { lat: 34.0522, lng: -118.2437 } }, // Omaha - Los Angeles
          // 2. US locations → international
          { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } }, // New York - London
          { start: { lat: 47.6062, lng: -122.3321 }, end: { lat: 35.6762, lng: 139.6503 } }, // Seattle - Tokyo
          { start: { lat: 25.7617, lng: -80.1918 }, end: { lat: -34.6037, lng: -58.3816 } }, // Miami - Buenos Aires
          { start: { lat: 41.8781, lng: -87.6298 }, end: { lat: 43.6532, lng: -79.3832 } }, // Chicago - Toronto
          { start: { lat: 39.7392, lng: -104.9903 }, end: { lat: 19.4326, lng: -99.1332 } }, // Denver - Mexico City
          { start: { lat: 30.2672, lng: -97.7431 }, end: { lat: -23.5505, lng: -46.6333 } }, // Austin - São Paulo
          // 3. Worldwide
          { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 48.8566, lng: 2.3522 } }, // London - Paris
          { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 38.7223, lng: -9.1393 } }, // London - Lisbon
          { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: -33.8688, lng: 151.2093 } }, // Tokyo - Sydney
          { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 22.3193, lng: 114.1694 } }, // Tokyo - Hong Kong
          { start: { lat: -34.6037, lng: -58.3816 }, end: { lat: -33.4489, lng: -70.6693 } }, // Buenos Aires - Santiago
          { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: -15.7975, lng: -47.8919 } }, // Mexico City - Brasília
          { start: { lat: 52.52, lng: 13.405 }, end: { lat: 55.7558, lng: 37.6173 } }, // Berlin - Moscow
          { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 30.0444, lng: 31.2357 } }, // Paris - Cairo
          { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 1.3521, lng: 103.8198 } }, // Dubai - Singapore
          { start: { lat: 22.3193, lng: 114.1694 }, end: { lat: 28.6139, lng: 77.209 } }, // Hong Kong - New Delhi
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } }, // New Delhi - Nairobi
          { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -36.8509, lng: 174.7645 } }, // Sydney - Auckland
          { start: { lat: 53.3498, lng: -6.2603 }, end: { lat: 64.1466, lng: -21.9426 } }, // Dublin - Reykjavik
          { start: { lat: -33.9249, lng: 18.4241 }, end: { lat: 6.5244, lng: 3.3792 } }, // Cape Town - Lagos
          { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 39.9042, lng: 116.4074 } }, // Moscow - Beijing
        ]}
      />
    </div>
  );
}
