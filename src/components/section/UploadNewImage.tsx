import { useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { FaDropbox, FaGoogleDrive } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import Image from "next/image";

import Dropbox from "./DropboxChooser";
import GoogleDrive from "./GoogleDrive";
import styles from "@styles/UploadNewImage.module.css";

const UploadNewImage: NextPage = () => {
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
    <div className={styles.container}>
      <span className={styles.title}>Select an image to rotate</span>
      <div className={styles.uploadContainer}>
        <div className={styles.newImageContainer}>
          <Image
            src="/assets/uploadNewImage.png"
            alt="file icon"
            width={55}
            height={77}
          />
          <BsImage className={styles.newImageIcon} />
        </div>
        <div className={styles.uploadDescription}>
          Upload an image or drop it here.
        </div>
        <div
          className={styles.uploadDropPart}
          ref={dragRef}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
        >
          <input
            type="file"
            className={styles.dropInputPart}
            accept="image/*"
            title=""
            onChange={upload}
          />
          <div className={styles.uploadPart}>
            <button className={styles.uploadButton}>
              <input
                type="file"
                className={styles.uplaodInputPart}
                name="image"
                accept="image/*"
                title=""
                onChange={upload}
              />
              <AiOutlinePlus className={styles.plusIcon} /> Uplaod Image
            </button>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.dropboxButton}>
            <Dropbox>
              <FaDropbox /> Dropbox
            </Dropbox>
          </button>
          <button className={styles.googleDriveButton}>
            <GoogleDrive>
              <FaGoogleDrive /> Google Drive
            </GoogleDrive>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNewImage;
