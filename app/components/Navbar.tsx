"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router= useRouter();
  function onClick()
  {
    router.push("/");
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6 border-spacing-y-7">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
              src={"/Group 33301.png"}
              height={80}
              width={80}   
              onClick={onClick}         
              
            />
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow lg:text-right">
          <Link href="/pages" passHref>
            <button className="inline-block text-white transform transition duration-200 hover:scale-125 mr-10">
              Home
            </button>
          </Link>
          <Link href="/pages/maps" passHref>
            <button className="inline-block text-amber-100 transform transition duration-200 hover:scale-125 mr-10">
              Try app
            </button>
          </Link>
          <Link href="/" passHref>
            <button className="inline-block text-white transform transition duration-200 hover:scale-125 mr-10">
              Suggestions
            </button>
          </Link>
          <Link href="/" passHref>
            <button className="inline-block text-white transform transition duration-200 hover:scale-125 mr-10">
              Contact Us
            </button>
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}
