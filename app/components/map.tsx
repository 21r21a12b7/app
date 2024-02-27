"use client"
import prisma from "@/prisma";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image"
import { useRouter } from "next/navigation";

export function Map() {
  const mapRef = React.useRef(null);
  const [busData, setBusData] = useState(null);
  const [showGif, setShowGif] = useState(false);

  const router = useRouter();

  function onclick() {
    // setShowGif(true); // Show the GIF animation
    // setTimeout(() => {
    //   setShowGif(false); // Hide the GIF animation after 4 seconds
    // }, 4000);
    // // You can add additional logic here if needed
    router.push("/pages/maps");
    console.log("reloadeddd");
    
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://web.onelap.in/api/positions/latest?deviceId=117392', {
          headers: {
            Authorization: "OTExMDUyMTE3MzpQc2FpMTIzQC5jb20=" as string
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    const initMap = async () => {
      const newLoc = await fetchData();
      if (!newLoc || !newLoc.longitude || !newLoc.latitude) {
        console.error('Invalid location data:', newLoc);
        return;
      }

      setBusData(newLoc);

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
      });
      const { Map } = await loader.importLibrary('maps');

      // init a marker
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

      const position = {
        lat: newLoc.latitude,
        lng: newLoc.longitude
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'Bus_Tracker',
        // Add a higher z-index
      };

      // setup the map
      const map = new Map(mapRef.current! as HTMLDivElement, mapOptions);

      // put up the marker
      const marker = new Marker({
        map: map,
        position: position,
        icon: { url: "/Mapicon (1).png", scaledSize: new google.maps.Size(50, 50) }
      });

    };

    initMap();
  }, []);

  return (
    <div className="fixed inset-0 flex justify-around items-center h-screen overflow-hidden mt-20">
      <div className="h-full w-full" ref={mapRef} ></div>
      <div className="h-full w-1/2 bg-black border-x-4 border-x-slate-400 flex flex-col items-center justify-center">
        {busData &&!showGif&& (
          <Card className="h-4/5 mb-20 w-4/6 justify-center flex-box flex-row items-center hover:drop-shadow-xl">
            <div className="flex flex-col items-cente ">
              <CardHeader>
                <CardTitle className="text-2xl">BUS NUMBER 1</CardTitle>
                <CardDescription className="font-medium text-lg">BUS ID: {busData?.deviceId}</CardDescription>
              </CardHeader>
              <CardContent className="mt-4 text-pretty text-justify">
                <div className="flex items-center">
                  <Image
                    src="/bus.jpg"
                    alt="bus image"
                    className="border border-gray-300 rounded-xl"
                    width={300}
                    height={150}
                    layout="fixed"
                  />
                </div>
                <p className="font-medium text-2xl my-4">BUS Driver: <span className="text-2xl font-medium">Driver 1</span></p>
                <div className="flex flex-col">
                  <p className="font-medium text-xl leading-relaxed">Coordinates:</p>
                  <p className="font-normal text-lg">latitude: {busData.latitude}</p>
                  <p className="font-normal text-lg">longitude: {busData.longitude}</p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-center ">
                <Button size="lg" variant='default' onClick={onclick}>Reload</Button>
              </CardFooter>
            </div>
          </Card>
        )}
        {showGif && (
          <div>
            {/* Replace 'your-gif.gif' with the path to your GIF file */}
            <img src="/Animation.gif" alt="Animation GIF" />
          </div>
        )}
      </div>
    </div>
  );
}
