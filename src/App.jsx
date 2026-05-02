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
          width: "100vw",
          height: "100vh",
          background: "#ffffff",
          overflow: "hidden",
        }}
      >
        <img
          src={currentLoader}
          alt="Loading"
          style={{
            position: "absolute",
            left: "9.375%",
            top: "7.13%",
            width: "81.25%",
            height: "85.64%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Photo1678894482 - only in intro stage */}
      {showCenterPhoto && (
        <img
          src={photo1678894482}
          alt="Center"
          style={{
            position: "absolute",
            left: "0%",
            top: "-8.5%",
            width: "100%",
            height: "116.89%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Background photos - screenshot, SDC10080, IMG_1245 */}
      {stage === "main" && backgroundPhotoIndex === 0 && (
        <img
          src={screenshot}
          alt="Background"
          style={{
            position: "absolute",
            left: "14.72%",
            top: "31.45%",
            width: "70.49%",
            height: "65.14%",
            objectFit: "cover",
          }}
        />
      )}

      {stage === "main" && backgroundPhotoIndex === 1 && (
        <img
          src={sdc10080}
          alt="Background"
          style={{
            position: "absolute",
            left: "19.1%",
            top: "31.45%",
            width: "61.81%",
            height: "65.14%",
            objectFit: "cover",
          }}
        />
      )}

      {stage === "main" && backgroundPhotoIndex === 2 && (
        <img
          src={img1245}
          alt="Background"
          style={{
            position: "absolute",
            left: "19.1%",
            top: "31.45%",
            width: "61.81%",
            height: "65.14%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Photoroom image - appears in intro and stays in main */}
      {showPhotoroom && (
        <img
          src={photoroomImage}
          alt="Portrait"
          style={{
            position: "absolute",
            left: "33.96%",
            top: "-7.42%",
            width: "32.08%",
            height: "60.16%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Text - appears in intro and stays in main */}
      {showText && (
        <h1
          style={{
            position: "absolute",
            left: "38.19%",
            top: "20.7%",
            width: "23.61%",
            height: "8.98%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
          }}
        >
          Alex Mashtaler
        </h1>
      )}
    </div>
  );
}
