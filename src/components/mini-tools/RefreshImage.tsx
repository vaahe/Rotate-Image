import React from "react";

import { refreshType } from "@customtypes/miniToolsTypes";
import styles from "@styles/RefreshImage.module.css";
import { useRouter } from "next/router";

const RefreshImage = ({ RefreshImage }: refreshType) => {
  const router = useRouter();

  const refreshImage = () => {
    localStorage.clear();
    router.push("/rotate");
  };

  const cancelRefresh = () => {
    RefreshImage(false);
  };

  return (
    <div className={styles.refreshImageContainer}>
      <div className={styles.refreshImageContext}>
        <span className={styles.refreshDescription}>
          Start over with a new file?
        </span>
        <div className={styles.buttonsContainer}>
          <button className={styles.startOverButton} onClick={refreshImage}>
            Start over
          </button>
          <button className={styles.cancelButton} onClick={cancelRefresh}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefreshImage;
