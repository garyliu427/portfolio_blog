'use client';

import NavBar from './components/NavBar';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2bbafc,
          color2: 0x3cdc1c,
          backgroundColor: 0xffffff,
          size: 0.8,
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className="h-screen">
      <NavBar />
      <section className="flex flex-col items-center justify-center max-w-5xl mx-auto py-1 mt-10 md:mt-28">
        <div className="fixed flex w-full h-screen z-[-2]" ref={vantaRef}></div>
        <div className="max-w-3xl z-10 mr-32 ml-10 md:ml-0">
          <h1 className="text-4xl pb-5 text-bold">
            <span className="underline decoration-red-400 underline-offset-8">
              Front-End
            </span>{' '}
            Developer
          </h1>
          <p className="max-w-xl text-base xl:text-lg">
            Interested in full stack development and always passionate about
            learning new technologies to write secure and scalable solutions.
            <br />
            <br />
            Looking for a developer role where I can grow and learn from
            friendly team members.
          </p>
          <h1 className="text-2xl pb-5 text-bold pt-10">
            Portfolio Tech Stack
          </h1>
          <div className="flex flex-wrap xl:flex-row gap-8">
            <Image src="/nextjs.svg" alt="nextjs" width={50} height={50} />
            <Image
              src="/tailwindcss.svg"
              alt="tailwindcss"
              width={50}
              height={50}
            />
            <Image src="/javascript.svg" alt="js" width={50} height={50} />
            <Image src="/three.svg" alt="threejs" width={50} height={50} />
            <Image
              src="/contentful.svg"
              alt="contentful"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
