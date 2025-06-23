"use client";

import { useCallback } from "react";
import Particles, { ParticlesProps } from "react-tsparticles";
import {loadFull  } from "tsparticles";

type InitType = ParticlesProps["init"];
type InitTypeNonNullable = NonNullable<InitType>;
type InitParameters = Parameters<InitTypeNonNullable>;
type Engine = InitParameters[0];

const Particle = () => {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="absolute inset-0 w-full h-full" 
        style={{ pointerEvents: 'none' }}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{ 
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 100,
            },
          },
        },
        particles: {
          color: {
            value: "#f7f4f4",
          },
          links: {
            color: "#f7f4f4",
            distance: 190,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            direction: "top-left",
            outModes: {
              default: "bounceVertical",
            },
            random: true,
            straight: true,
            speed: 4,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 200,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },

      }}
    />
  );
};

export default Particle;