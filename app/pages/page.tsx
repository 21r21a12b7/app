// pages/index.tsx
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardDescription, CardTitle } from '../components/ui/card';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [showGif, setShowGif] = useState(false);

  function onClick() {
    setShowGif(true);
    setTimeout(() => {
      router.push("/pages/maps");
    }, 4000); // Delay in milliseconds before navigation
  }

  return (
    <main>
      <div className="h-[39.5rem] flex flex-col items-center justify-center bg-black">
        
          <>
            <Image src={"/Group 33301.png"} alt={"Bus icon"} height={150} width={150} className="pb-28 hover:drop-shadow-2xl" />

            <Card className="h-1/6 w-72 flex hover:drop-shadow-2xl" onClick={onClick}>
              <div className="flex items-center justify-center w-20">
                <Image src={"/buss.png"} alt={"Bus icon"}  height={50} width={50} onClick={onClick} className="hover:drop-shadow-2xl" />
              </div>
              <div className="flex flex-col justify-center hover:drop-shadow-2xl">
                <CardTitle className="leading-10">Bus Number 1</CardTitle>
                <CardDescription>Bus ID 117392</CardDescription>
              </div>
            </Card>

            <Card className="h-1/6 w-72 flex mt-8" onClick={onClick}>
              <div className="flex items-center justify-center w-20 hover:drop-shadow-2xl">
                <Image
                  src={"/buss.png"}
                  height={50}
                  width={50}
                  alt={"Bus icon"} 
                  onClick={onClick}
                  className="hover:drop-shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center hover:drop-shadow-2xl">
                <CardTitle className="leading-10">Bus Number 2</CardTitle>
                <CardDescription>Bus ID 117393</CardDescription>
              </div>
            </Card>
          </>
        
        
      </div>
    </main>
  );
}
