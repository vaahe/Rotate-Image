import React from "react";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";

import { rotateTypes } from "@customtypes/rotateTypes";
import styles from "@styles/RotateImage.module.css";
import CustomAngle from "./CustomAngle";

const RotateImage = ({ data, onRotate, imgRef }: rotateTypes) => {
  const [angle, setAngle] = React.useState<number>(0);

  React.useEffect(() => {}, [angle]);

  const rotateLeft = () => {
    drawImage(imgRef, true, false, false);
  };

  const rotateRight = () => {
    drawImage(imgRef, false, true, false);
  };

  const rotateCustom = (e: any) => {
    if (e.target.value > 180) {
      e.target.value = 180;
    }
    if (e.target.value < -180) {
      e.target.value = -180;
    }
    setAngle(e.target.value);

    drawImage(imgRef, false, false, true);
  };

  const drawImage = (
    image: any,
    rotateLeft: boolean,
    rotateRight: boolean,
    rotateCustom: boolean
  ) => {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    const ctx = canvas.getContext("2d");
    const rotateL = rotateLeft ? -90 : 0;
    const rotateR = rotateRight ? 90 : 0;
    const rotateC = rotateCustom ? angle : 0;
    canvas.width = image.width;
    canvas.height = image.height;

    if (ctx) {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.save();
      ctx.translate(image.width / 2, image.height / 2);
      ctx.rotate(
        (rotateL * Math.PI) / 180 ||
          (rotateR * Math.PI) / 180 ||
          (rotateC * Math.PI) / 180
      );
      ctx.drawImage(image, -image.width / 2, -image.height / 2);
      ctx.imageSmoothingQuality = "high";
      ctx.restore();
    }

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Canvas is empty");
        return;
      }
      onRotate({
        ...data,
        imgPath: window.URL.createObjectURL(blob),
        rotateLeft: rotateLeft,
        rotateRight: rotateRight,
      });
    });
  };

  const setDefault = () => {
    setAngle(0);
    drawImage(imgRef, false, false, true);
  };

  return (
    <div className={styles.toolsContainer}>
      <div className={styles.rotateButtonsContainer}>
        <button className={styles.rotateButton} onClick={rotateLeft}>
          <GrRotateLeft className={styles.leftButton} />
          <span className={styles.degree}>90&#176; Left</span>
        </button>
        <button className={styles.rotateButton} onClick={rotateRight}>
          <GrRotateRight className={styles.rightButton} />
          <span className={styles.degree}>90&#176; Right</span>
        </button>
      </div>
      <CustomAngle
        setDefault={setDefault}
        handleChange={rotateCustom}
        angle={angle}
      />
    </div>
  );
};

export default RotateImage;
