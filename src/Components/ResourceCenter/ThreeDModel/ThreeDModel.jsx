import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDModel = () => {
  const containerRef = useRef(null);
  let carObject, renderer, controls;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 10); // Adjust camera position to face the side view

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // Set background color to white
    containerRef.current.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.minDistance = 10; // Set minimum zoom distance
    controls.maxDistance = 10; // Set maximum zoom distance (same as minDistance to disable zooming)
    controls.autoRotate = true; // Enable auto-rotation
    controls.autoRotateSpeed = 12; // Adjust auto-rotation speed

    // Restrict mouse rotation to side view only (Y-axis)
    controls.minAzimuthAngle = -Infinity; // Allow full 360-degree rotation
    controls.maxAzimuthAngle = Infinity; // Allow full 360-degree rotation
    controls.minPolarAngle = Math.PI / 2; // Restrict rotation to side view only
    controls.maxPolarAngle = Math.PI / 2; // Restrict rotation to side view only

    const loader = new GLTFLoader();
    loader.load(
      'public/model/car/scene.gltf',
      function (gltf) {
        carObject = gltf.scene;
        carObject.rotation.y = 0; // Ensure the car starts facing forward

        // Scale the car object based on window size
        const scaleFactor = calculateScaleFactor(); // Adjust scale dynamically
        carObject.scale.set(scaleFactor, scaleFactor, scaleFactor);

        scene.add(carObject);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Ambient light to provide overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Soft white light
    scene.add(ambientLight);

    // Additional ambient light to help illuminate the car from the back
    const ambientLight2 = new THREE.AmbientLight(0xffffff, 4.5); // Soft white light with lower intensity
    ambientLight2.position.set(0, 0, -50); // Position the light behind the car
    scene.add(ambientLight2);

    // Directional light to enhance specific areas, positioned above the car
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5); // White directional light
    directionalLight1.position.set(0, 50, 50); // Adjust position as needed
    scene.add(directionalLight1);

    // Directional light to enhance other areas, positioned below the car
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5); // White directional light
    directionalLight2.position.set(0, -50, 50); // Adjust position as needed
    scene.add(directionalLight2);

    // Additional directional light from the back
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 5); // White directional light
    directionalLight3.position.set(0, 0, -50); // Adjust position as needed
    scene.add(directionalLight3);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Update lighting positions based on camera rotation
      const cameraRotation = camera.rotation.y;
      directionalLight1.position.set(Math.sin(cameraRotation) * 50, 50, Math.cos(cameraRotation) * 50);
      directionalLight2.position.set(Math.sin(cameraRotation) * 50, -50, Math.cos(cameraRotation) * 50);
      directionalLight3.position.set(Math.sin(cameraRotation) * -50, 0, Math.cos(cameraRotation) * -50);

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Adjust scale factor on resize
      const scaleFactor = calculateScaleFactor(); // Adjust scale dynamically
      if (carObject) {
        carObject.scale.set(scaleFactor, scaleFactor, scaleFactor);
      }
    };

    const calculateScaleFactor = () => {
      // Adjust scale factor based on window width
      const width = window.innerWidth;
      if (width <= 768) {
        return 1.5; // Scale factor for mobile devices
      } else if (width <= 1024) {
        return 2; // Scale factor for tablets
      } else {
        return 2.5; // Default scale factor for larger screens
      }
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeDModel;
