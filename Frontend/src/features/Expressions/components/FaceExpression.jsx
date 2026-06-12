 import { useEffect, useRef, useState } from "react";
 import { detect,init } from "../utils/utils";
 import "../style/faceExpression.scss";

export default function FaceExpression({onClick=()=>{   }}) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);

  const [expression, setExpression] =
    useState("Detecting....");

   

  useEffect(() => {
    init({videoRef,landmarkerRef});

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) =>
            track.stop()
          );
      }
    };
  }, []);

  async function handleClick(){
      const expression =  detect({videoRef,landmarkerRef,setExpression})
      onClick(expression)
  }
  

  
 
  return (
  <div className="face">

    <h2 className="face__title">
      Face Expression Detector
    </h2>

    <div className="face__video">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
      />
    </div>

    <div className="face__mood">
      <h2>{expression}</h2>
      <p>Current Mood</p>
    </div>

    <button
      className="face__button"
      onClick={handleClick}
    >
      Detect My Mood
    </button>

  </div>
);
}