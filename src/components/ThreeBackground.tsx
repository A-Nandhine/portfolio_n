import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const geometriesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Create space-themed geometries
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5), // Satellites
      new THREE.OctahedronGeometry(0.3), // Crystals/Asteroids
      new THREE.TetrahedronGeometry(0.4), // Space debris
      new THREE.IcosahedronGeometry(0.3), // Planets
      new THREE.CylinderGeometry(0.2, 0.2, 0.6, 8), // Space stations
      new THREE.RingGeometry(0.2, 0.4, 8), // Saturn rings
      new THREE.SphereGeometry(0.3, 8, 6), // Planets/Moons
      new THREE.ConeGeometry(0.2, 0.8, 6), // Rocket shapes
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.7 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.6 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.8 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10b981, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.5 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xf59e0b, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.6 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xef4444, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.7 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xec4899, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.5 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xfbbf24, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.8 
      }),
    ];

    // Create and position meshes
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 30;
      mesh.position.y = (Math.random() - 0.5) * 30;
      mesh.position.z = (Math.random() - 0.5) * 30;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;

      scene.add(mesh);
      geometriesRef.current.push(mesh);
    }

    // Add special rocket-shaped objects
    const rocketGeometry = new THREE.ConeGeometry(0.15, 1, 6);
    const rocketMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff6b6b, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.8 
    });
    
    for (let i = 0; i < 3; i++) {
      const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
      rocket.position.x = (Math.random() - 0.5) * 35;
      rocket.position.y = (Math.random() - 0.5) * 35;
      rocket.position.z = (Math.random() - 0.5) * 35;
      rocket.rotation.x = Math.random() * Math.PI;
      rocket.rotation.y = Math.random() * Math.PI;
      scene.add(rocket);
      geometriesRef.current.push(rocket);
    }

    // Add space station-like structures
    const stationGeometry = new THREE.TorusGeometry(0.4, 0.1, 8, 16);
    const stationMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x4ade80, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.6 
    });
    
    for (let i = 0; i < 4; i++) {
      const station = new THREE.Mesh(stationGeometry, stationMaterial);
      station.position.x = (Math.random() - 0.5) * 40;
      station.position.y = (Math.random() - 0.5) * 40;
      station.position.z = (Math.random() - 0.5) * 40;
      station.rotation.x = Math.random() * Math.PI;
      station.rotation.y = Math.random() * Math.PI;
      scene.add(station);
      geometriesRef.current.push(station);
    }

    // Animation loop with space-like movement
    const animate = () => {
      requestAnimationFrame(animate);

      geometriesRef.current.forEach((mesh, index) => {
        // Different rotation speeds for variety
        mesh.rotation.x += 0.002 + (index % 3) * 0.003;
        mesh.rotation.y += 0.003 + (index % 4) * 0.002;
        mesh.rotation.z += 0.001 + (index % 2) * 0.002;
        
        // Orbital motion like planets
        const time = Date.now() * 0.0005;
        mesh.position.y += Math.sin(time + index) * 0.003;
        mesh.position.x += Math.cos(time * 0.7 + index) * 0.002;
        mesh.position.z += Math.sin(time * 0.5 + index) * 0.001;
        
        // Pulsing effect for some shapes (like stars)
        if (index % 6 === 0) {
          const scale = 1 + Math.sin(time * 2 + index) * 0.2;
          mesh.scale.set(scale, scale, scale);
        }

        // Special movement for rocket shapes
        if (index % 8 === 0) {
          mesh.position.x += Math.sin(time + index) * 0.005;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ThreeBackground;