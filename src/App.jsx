import { useState, useEffect } from "react";

import loader1 from "./assets/images/loader1.jpg";
import loader2 from "./assets/images/loader2.jpg";
import photo1678894482 from "./assets/images/photo1678894482.jpeg";
import photoroomImage from "./assets/images/image-Photoroom.png";
import screenshot from "./assets/images/Screenshot 2026-05-01 at 14.01.27.png";
import sdc10080 from "./assets/images/SDC10080.JPG";
import img1245 from "./assets/images/IMG_1245.JPG";

export default function App() {
  const [stage, setStage] = useState("loader");
  const [showPhotoroom, setShowPhotoroom] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showCenterPhoto, setShowCenterPhoto] = useState(false);
  const [backgroundPhotoIndex, setBackgroundPhotoIndex] = useState(0);
  const [currentLoader] = useState(() =>
    Math.random() > 0.5 ? loader1 : loader2
  );

  // Vertical offsets — tweak these to move elements up/down while everything stays horizontally centered
  const loaderTop = "7.13%"; // loader vertical position
  const centerPhotoTop = "-8.5%"; // center big photo vertical position
  const photoBoxTop = "36%"; // photo box vertical position (the box that cycles backgrounds)
  const photoroomTop = "-7.42%"; // photoroom portrait vertical position
  const titleTop = "18.7%"; // title vertical position

  // we use a fixed cycle length (3) for background photos, no array needed

  useEffect(() => {
    // Stage 1: Show loader for 2 seconds
    const loaderTimer = setTimeout(() => {
      setStage("intro");
      setShowCenterPhoto(true);
    }, 2000);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    if (stage === "intro" && showCenterPhoto) {
      // Stage 2: After 1 second, show photoroom image
      const photoroomTimer = setTimeout(() => {
        setShowPhotoroom(true);
      }, 1000);

      // Stage 3: After 2 seconds total, show text
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 2000);

      // Stage 4: After 5 seconds total (3 seconds together), transition to main
      const mainTimer = setTimeout(() => {
        setStage("main");
        setShowCenterPhoto(false);
      }, 5000);

      return () => {
        clearTimeout(photoroomTimer);
        clearTimeout(textTimer);
        clearTimeout(mainTimer);
      };
    }
  }, [stage, showCenterPhoto]);

  useEffect(() => {
    if (stage === "main") {
      // Cycle through background photos every 5 seconds
      const interval = setInterval(() => {
        setBackgroundPhotoIndex((prev) => (prev + 1) % 3);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [stage]);

  if (stage === "loader") {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#ffffff",
          overflow: "hidden",
          border: "1px dashed rgba(255,0,0,0.7)",
        }}
      >
        {/* center guide lines (loader) */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "2px",
            height: "100%",
            background: "red",
            zIndex: 9999,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            height: "2px",
            width: "100%",
            background: "red",
            zIndex: 9999,
          }}
        />
        <img
          src={currentLoader}
          alt="Loading"
          width={1600}
          height={1340}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{
            position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: loaderTop,
            width: "81.25%",
            height: "85.64%",
            objectFit: "cover",
            aspectRatio: "1600 / 1340",
          }}
        />
      </div>
    );
  }

    return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#ffffff",
        overflow: "hidden",
        border: "1px dashed rgba(255,0,0,0.7)",
      }}
    >
      {/* center guide lines (main) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: "2px",
          height: "100%",
          background: "red",
          zIndex: 9999,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          height: "2px",
          width: "100%",
          background: "red",
          zIndex: 9999,
        }}
      />
      {/* Photo1678894482 - only in intro stage */}
      {showCenterPhoto && (
        <img
          src={photo1678894482}
          alt="Center"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: centerPhotoTop,
            width: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Photo box for cycling background images — images swap inside this container */}
      <div
        style={{
          position: "absolute",
          top: photoBoxTop,
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "55.14%",
          overflow: "hidden",
          border: "1px dashed rgba(255,0,0,0.7)",
        }}
      >
        {stage === "main" && (
          <img
            src={
              backgroundPhotoIndex === 0
                ? screenshot
                : backgroundPhotoIndex === 1
                ? sdc10080
                : img1245
            }
            alt="Background"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "75%",
              objectFit: "cover",
            }}
          />
        )}
      </div>

            {/* Photoroom image - appears in intro and stays in main */}
      {showPhotoroom && (
        <img
          src={photoroomImage}
          alt="Portrait"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: photoroomTop,
            width: "22.08%",
            height: "60.16%",
            objectFit: "cover",
          }}
        />
      )}
      {/* Text - appears in intro and stays in main */}

      {showText && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: titleTop,
            width: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#000",
            fontSize: "60px",
            border: "1px dashed rgba(255,0,0,0.7)",
            padding: "8px 12px",
          }}
        >
          <h1 style={{ margin: 0 }}>Alex Mashtaler</h1>
        </div>
      )}
    </div>
  );
}
