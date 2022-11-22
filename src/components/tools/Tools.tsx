import React, { useEffect, useState, useRef } from "react";
import { FiDownload, FiShare2 } from "react-icons/fi";

import styles from "@styles/Tools.module.css";
import { toolsTypes } from "@customtypes/toolsTypes";
import RotateImage from "../rotate-section/RotateImage";
import ShareImage from "./ShareImage";

const Tools = ({ data, onRotate, imgRef }: toolsTypes) => {
  const [image, setImage] = useState<string>("");
  const [shareImageState, setShareImageState] = useState<boolean>(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgName: string | null = localStorage.getItem("image");
    if (imgName !== null) {
      setImage(imgName);
    }
  }, []);

  const shareImage = (e: any) => {
    e.preventDefault();
    setShareImageState(!shareImageState);
  };

  const downloadImage = () => {
    fetch(data.imgPath, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
    })
      .then((res) => {
        console.log(res);
        res.arrayBuffer().then((buffer) => {
          const extension = image?.split(";")[0].split("/")[1];
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `rotated_image.${extension}`); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("image")) {
      if (toolsRef.current) {
        toolsRef.current.classList.remove(styles.disableClick);
      }
    } else {
      if (toolsRef.current) {
        toolsRef.current.classList.add(styles.disableClick);
      }
    }
  });

  useEffect(() => {
    console.log("Tools.tsx");
  }, []);

  return (
    <div className={styles.tools} ref={toolsRef}>
      <div>
        <div className={styles.rotateOptions}>
          <h2 className={styles.settingsTitle}>Format settings</h2>
          <p className={styles.settingsSubtitle}>Rotate</p>
          <RotateImage
            // customAngle={angle}
            data={data}
            onRotate={onRotate}
            imgRef={imgRef.current}
          />
        </div>
        {/* <CustomAngle
          setDefault={setDefault}
          handleChange={handleChange}
          angle={angle}
          changeAngle={changeAngle}
        /> */}
      </div>

      <div className={styles.shareAndDownloadContainer}>
        <button className={styles.shareButton} onClick={shareImage}>
          <FiShare2 className={styles.toolIcon} /> Share image
        </button>
        <button className={styles.downloadButton} onClick={downloadImage}>
          <FiDownload className={styles.toolIcon} /> Download
        </button>
      </div>
      {shareImageState ? <ShareImage shareImage={setShareImageState} /> : null}
    </div>
  );
};

export default Tools;
