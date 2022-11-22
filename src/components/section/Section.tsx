import type { NextPage } from "next";
import UploadImage from "./UploadImage";

import styles from "@styles/Section.module.css";

const Section: NextPage = () => {
  return (
    <div className={styles.uploadImageContainer}>
      <UploadImage />
    </div>
  );
};

export default Section;
