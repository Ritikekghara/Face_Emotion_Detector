import React, { useRef, useState } from "react";

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  // Start Camera
  const startCamera = () => {
    setCameraActive(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera access denied!", err));
  };

  // Capture Image
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 200, 150);
    const imageUrl = canvas.toDataURL("image/png");

    // Store captured image & stop camera
    setCapturedImage(imageUrl);
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());

    onCapture(imageUrl);
    setCameraActive(false);
  };

  return (
    <div className="camera-container">
      {cameraActive && !capturedImage ? (
        <video ref={videoRef} autoPlay className="camera-feed"></video>
      ) : (
        capturedImage && <img src={capturedImage} alt="Captured" className="camera-feed" />
      )}

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      <div>
        {!cameraActive ? (
          <button onClick={startCamera} className="capture-btn">Capture Mood</button>
        ) : (
          <button onClick={captureImage} className="capture-btn">Snap</button>
        )}
      </div>
    </div>
  );
};

export default CameraComponent;
