import React, { useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import styles from "@styles/Warning.module.css";

const Warning = () => {
  const warningRef = useRef<HTMLDivElement>(null);

  const tryAgain = () => {
    if (warningRef.current) {
      warningRef.current.style.display = "none";
    }
  };

  const close = () => {
    if (warningRef.current) {
      warningRef.current.style.display = "none";
    }
  };

  return (
    <div className={styles.warning} ref={warningRef}>
      <div>
        <span className={styles.warningText}>
          <AiOutlineInfoCircle className={styles.warningIcon} />
          Please use only JPG, PNG or HEIC Files.
          <div className={styles.tryAgainText} onClick={tryAgain}>
            Try again
          </div>
        </span>
      </div>
      <GrClose onClick={close} className={styles.closeIcon} />
    </div>
  );
};

export default Warning;
