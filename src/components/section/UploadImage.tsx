import React, { useState, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { FaDropbox, FaGoogleDrive } from "react-icons/fa";
import Image from "next/image";
import Dropbox from "./DropboxChooser";
import GoogleDrive from "./GoogleDrive";

import Warning from "./Warning";

import styles from "@styles/Section.module.css";

const UploadImage: NextPage = () => {
  const [error, setError] = useState<boolean>(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDragEnter = (e: any) => {
    if (dragRef.current !== null) {
      e.target.draggable = true;
      dragRef.current.classList.add("dragover");
    }
  };

  const onDragLeave = (e: any) => {
    if (dragRef.current !== null) {
      e.target.draggable = false;
      dragRef.current.classList.remove("dragover");
    }
  };

  const upload = (e: any) => {
    e.preventDefault();
    if (e.target.files[0] !== null) {
      if (!e.target.files[0].name.match(/\.(jpg|png|heic)$/)) {
        setError(true);
        return false;
      }

      const file = e.target.files[0];
      const getBase64 = (file: any, cb: Function) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          cb(reader.result);
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
      };

      getBase64(file, (result: string) => {
        // Save share link to local storage
        localStorage.setItem("image", result);
      });
      router.push("/rotate_image");
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.imageAndDescription}>
        <Image
          src={"/assets/descriptionImage.svg"}
          alt="description image"
          width={158.36}
          height={122.26}
        />
        <div className={styles.descriptions}>
          <p className={styles.descriptionHeader}>
            Rotate image in a few clicks
          </p>
          <p className={styles.descriptionText}>
            Convallis scelerisque posuere aenean sollicitudin id. Mattis
            vestibulum molestie ultricies hendrerit scelerisque eu. Orci, diam
            rutrum gravida amet, volutpat neque, suspendisse in nulla.
          </p>
        </div>
      </div>

      <div
        className={styles.uploadAndDrop}
        ref={dragRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
      >
        Upload an image or drop it here.
        <label htmlFor="fileInput" className={styles.uploadImageButton}>
          <AiOutlinePlus className={styles.plusIcon} /> Upload Image
          <input
            type="file"
            className={styles.fileInput}
            id="fileInput"
            accept="image/*"
            onChange={upload}
          />
        </label>
        <div className={styles.buttonsContainer}>
          <button className={styles.dropboxButton}>
            <Dropbox>
              <FaDropbox />
              <span className={styles.buttonText}>Dropbox</span>
            </Dropbox>
          </button>
          <button className={styles.googleDriveButton}>
            <GoogleDrive>
              <FaGoogleDrive />
              <span className={styles.buttonText}>Google Drive</span>
            </GoogleDrive>
          </button>
        </div>
      </div>
      {error ? <Warning /> : null}
    </div>
  );
};

export default UploadImage;
