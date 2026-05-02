import { useState, useEffect } from "react";

// TODO: Add loader1 and loader2 images when available
// import loader1 from "../assets/images/loader1.png";
// import loader2 from "../assets/images/loader2.png";
import photo1678894482 from "../assets/images/photo1678894482.jpeg";
import photoroomImage from "../assets/images/image-Photoroom.png";
import screenshot from "../assets/images/Screenshot 2026-05-01 at 14.01.27.png";
import sdc10080 from "../assets/images/SDC10080.JPG";
import img1245 from "../assets/images/IMG_1245.JPG";
import loader1 from "../assets/images/loader1.png";
import loader2 from "../assets/images/loader2.png";

export default function App() {
  const [stage, setStage] = useState<"loader" | "intro" | "main">("loader");
  const [showPhotoroom, setShowPhotoroom] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showCenterPhoto, setShowCenterPhoto] = useState(false);
  const [backgroundPhotoIndex, setBackgroundPhotoIndex] = useState(0);
  const [currentLoader] = useState(() =>
    Math.random() > 0.5 ? "loader1" : "loader2"
  );

  const backgroundPhotos = [screenshot, sdc10080, img1245];

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
        setBackgroundPhotoIndex((prev) => (prev + 1) % backgroundPhotos.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [stage, backgroundPhotos.length]);

  if (stage === "loader") {
    return (
      <div className="relative w-[1440px] h-[1024px] bg-white">
        {/* Loader placeholder - replace with actual loader images */}
        <div
          className="absolute"
          style={{
            left: "135px",
            top: "73px",
            width: "1170px",
            height: "877px",
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            {/* Show both loader images side-by-side; highlight the randomly chosen one */}
            <div className="flex items-center gap-8">
              <img
                src={loader1}
                alt="Loader 1"
                className={`w-48 h-48 object-contain transition-transform duration-300 ${
                  currentLoader === "loader1" ? "scale-105" : "opacity-80"
                }`}
              />

              <img
                src={loader2}
                alt="Loader 2"
                className={`w-48 h-48 object-contain transition-transform duration-300 ${
                  currentLoader === "loader2" ? "scale-105" : "opacity-80"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[1440px] h-[1024px] bg-white overflow-hidden">
      {/* Photo1678894482 - only in intro stage */}
      {showCenterPhoto && (
        <img
          src={photo1678894482}
          alt="Center"
          className="absolute"
          style={{
            left: "0px",
            top: "-87px",
            width: "1440px",
            height: "1197px",
            objectFit: "cover",
          }}
        />
      )}

      {/* Background photos - screenshot, SDC10080, IMG_1245 */}
      {stage === "main" && backgroundPhotoIndex === 0 && (
        <img
          src={screenshot}
          alt="Background"
          className="absolute"
          style={{
            left: "212px",
            top: "322px",
            width: "1015px",
            height: "667px",
            objectFit: "cover",
          }}
        />
      )}

      {stage === "main" && backgroundPhotoIndex === 1 && (
        <img
          src={sdc10080}
          alt="Background"
          className="absolute"
          style={{
            left: "275px",
            top: "322px",
            width: "890px",
            height: "667px",
            objectFit: "cover",
          }}
        />
      )}

      {stage === "main" && backgroundPhotoIndex === 2 && (
        <img
          src={img1245}
          alt="Background"
          className="absolute"
          style={{
            left: "275px",
            top: "322px",
            width: "890px",
            height: "667px",
            objectFit: "cover",
          }}
        />
      )}

      {/* Photoroom image - appears in intro and stays in main */}
      {showPhotoroom && (
        <img
          src={photoroomImage}
          alt="Portrait"
          className="absolute"
          style={{
            left: "489px",
            top: "-76px",
            width: "462px",
            height: "616px",
            objectFit: "cover",
          }}
        />
      )}

      {/* Text - appears in intro and stays in main */}
      {showText && (
        <h1
          className="absolute text-black"
          style={{
            left: "550px",
            top: "212px",
            width: "340px",
            height: "92px",
          }}
        >
          Alex Mashtaler
        </h1>
      )}
    </div>
  );
}
