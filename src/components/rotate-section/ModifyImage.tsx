/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiRefreshCw, FiTrash2 } from "react-icons/fi";
import { BiUndo, BiRedo } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { BsCheckCircle } from "react-icons/bs";

import { modifyTypes } from "@customtypes/modifyTypes";
import styles from "@styles/ModifyImage.module.css";

import DeleteImage from "../mini-tools/DeleteImage";
import RefreshImage from "../mini-tools/RefreshImage";

const ModifyImage = ({ data, imgRef }: modifyTypes) => {
  const [image, setImage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [deleteState, setDeleteState] = useState<boolean>(false);
  const [refreshState, setRefreshState] = useState<boolean>(false);

  const loader = useRef<HTMLDivElement>(null);
  const loaderImage = useRef<any>(null);

  const refreshPopup = (e: any) => {
    e.preventDefault();
    setRefreshState(!refreshState);
  };

  const deleteImageFunc = (e: any) => {
    e.preventDefault();
    setDeleteState(!deleteState);
  };

  const closeModal = () => {
    setSuccess(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (loader.current !== null && loaderImage.current !== null) {
        loader.current.style.display = "none";
        loaderImage.current.style.display = "block";
        setSuccess(true);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    const newImg = localStorage.getItem("image");
    if (newImg !== null) {
      setImage(newImg);
    }
  }, []);

  return (
    <div className={styles.imageModifyingContainer}>
      {success ? (
        <div className={styles.imageSuccess}>
          <div className={styles.successIconAndText}>
            <BsCheckCircle className={styles.successIcon} />
            Your image was successfully uploaded!
          </div>
          <CgClose className={styles.closeIcon} onClick={closeModal} />
        </div>
      ) : null}

      <div className={styles.processing} ref={loader}>
        <h2 className={styles.processingText}>Processing...</h2>
        <div className={styles.loaderPart}>
          <Image
            src={"/assets/loading.gif"}
            alt="loader gif"
            width={90}
            height={90}
          />
        </div>
      </div>

      <div className={styles.imageContainer} ref={loaderImage}>
        <div className={styles.miniTools}>
          <button className={styles.undo}>
            <BiUndo />
          </button>
          <button className={styles.redo}>
            <BiRedo />
          </button>
          <button onClick={refreshPopup} className={styles.refreshButton}>
            <FiRefreshCw />
          </button>
          <button onClick={deleteImageFunc} className={styles.deleteButton}>
            <FiTrash2 />
          </button>
        </div>

        <div>
          <img
            src={data.imgPath ? data.imgPath : image}
            alt="Rotate Image"
            ref={imgRef}
            className={styles.imageRotating}
          />
        </div>
      </div>

      {deleteState ? <DeleteImage DeleteImage={setDeleteState} /> : null}

      {refreshState ? <RefreshImage RefreshImage={setRefreshState} /> : null}
    </div>
  );
};

export default ModifyImage;
