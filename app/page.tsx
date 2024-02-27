"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/pages");
    }, 3500); // Delay in milliseconds before navigation

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <main>
      <div className="h-[39.5rem] w-screen flex items-center justify-center bg-black overflow-hidden">
        <Image src="/Animation.gif" alt="Animation GIF" height={200} width={200}/>
      </div>
    </main>
  );
}
