import type { NextPage } from "next";
import Image from "next/image";
import { FiShare2 } from "react-icons/fi";

import styles from "@styles/RotateHeader.module.css";

const RotateHeader: NextPage = () => {
  return (
    <header className={styles.headerContainer}>
      <Image
        src={"/assets/rotateImageLogo.png"}
        alt="quickToolPart"
        width={171}
        height={32}
      />
      <FiShare2 className={styles.shareIcon} />
    </header>
  );
};

export default RotateHeader;
