'use client';
import { useEffect, useId, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export function Sparkles({
  className,
  size = 2,
  minSize = null,
  density = 15000,
  speed = 0.5,
  minSpeed = null,
  opacity = 1,
  direction = 'bottom',
  opacitySpeed = 1,
  minOpacity = null,
  color = '#32A7FF',
  mousemove = false,
  hover = false,
  background = 'transparent',
  options = {},
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const id = useId();
  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 300,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: hover,
          mode: 'grab',
          parallax: {
            enable: mousemove,
            force: 60,
            smooth: 100,
          },
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction,
        speed: {
          min: minSpeed || speed / 130,
          max: speed,
        },
        straight: true,
      },
      collisions: {
        enable: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  };

  return (
    isReady && (
      <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} />
    )
  );
}
