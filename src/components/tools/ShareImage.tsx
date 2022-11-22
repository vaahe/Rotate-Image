import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  MailruIcon,
  MailruShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { shareType } from "src/types/ShareImageTypes";
import styles from "@styles/ShareImage.module.css";
import { IoMdCloseCircle } from "react-icons/io";

const ShareImage = ({ shareImage }: shareType) => {
  const [image, setImage] = useState<string | null>(null);
  const [link, setLink] = useState<string>(document.location.href);

  const closeModal = () => {
    shareImage(false);
  };

  useEffect(() => {
    const imgName: string | null = localStorage.getItem("image");
    setImage(imgName);

    if (link.length > 26) {
      setLink(document.location.href.slice(0, 26) + '...');
    }
  }, []);

  const isCopied = (e: any) => {
    const shareInput = document.getElementById("shareInput");
    shareInput?.classList.remove("ShareImage_shareInputNotClicked__HHFec");
    shareInput?.classList.add("ShareImage_shareInputIsClicked__bCdXQ");
  };

  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareContext}>
        <div className={styles.imageContainer}></div>
        <div className={styles.shareActions}>
          <IoMdCloseCircle
            className={styles.closeButton}
            onClick={closeModal}
          />
          <div className={styles.shareText}>
            <span className={styles.shareTextTitle}>Share the results</span>
            <span className={styles.shareTextRemainder}>
              Your file will be deleted after 30 days
            </span>
          </div>
          <div className={styles.shareInputContainer}>
            <p className={styles.shareInputTitle}>Share download link</p>
            <input
              id="shareInput"
              className={`${styles.shareInput} ${styles.shareInputNotClicked}`}
              type="text"
              value={link}
              onClick={isCopied}
              readOnly={true}
              title={document.location.href}
            />
          </div>
          <div className={styles.socialMedias}>
            <FacebookShareButton
              url={"https://github.com/next-share"}
              style={{ marginRight: "16px" }}
            >
              <FacebookIcon size={40} borderRadius={50} color={"black"} />
            </FacebookShareButton>
            <LinkedinShareButton
              url={"https://github.com/next-share"}
              style={{ marginRight: "16px" }}
            >
              <LinkedinIcon size={40} borderRadius={50} />
            </LinkedinShareButton>
            <TwitterShareButton
              url={"https://github.com/next-share"}
              style={{ marginRight: "16px" }}
            >
              <TwitterIcon
                size={40}
                borderRadius={50}
                bgStyle={{ backgroundColor: "rgba(25, 119, 243, 0.1)" }}
              />
            </TwitterShareButton>
            <MailruShareButton url={"https://github.com/next-share"}>
              <MailruIcon
                size={40}
                borderRadius={50}
                bgStyle={{ backgroundColor: "rgba(25, 119, 243, 0.1)" }}
              />
            </MailruShareButton>
          </div>
          <div className={styles.qrContainer}>
            <p className={styles.qrTitle}>Scan QR code to download!</p>
            <QRCode value={document.location.href} size={120} level="H" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareImage;
