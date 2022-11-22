import React from "react";
import { deleteType } from "../../types/miniToolsTypes";
import { FiTrash2 } from "react-icons/fi";

import styles from "@styles/DeleteImage.module.css";
import Link from "next/link";

const DeleteImage = ({ DeleteImage }: deleteType) => {
  const deleteImage = () => {
    localStorage.clear();
  };

  const cancelDelete = () => {
    DeleteImage(false);
  };

  return (
    <div className={styles.deleteImageContainer}>
      <div className={styles.deleteImageContext}>
        <div className={styles.deleteHeaderContainer}>
          <div className={styles.deleteHeader}>
            <FiTrash2 className={styles.trashIcon} />
            <span className={styles.deleteText}>Delete File?</span>
          </div>
          <div className={styles.deleteDescription}>
            This action is permanent and can't be undone.
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.deleteButton} onClick={deleteImage}>
            <Link href="/rotate">Delete</Link>
          </button>
          <button className={styles.cancelButton} onClick={cancelDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteImage;
