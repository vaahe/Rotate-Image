import { useReducer, useRef } from "react";
import type { NextPage } from "next";

import { actionTypes } from "@customtypes/reducerTypes";
import Reducer, { rotateAction } from "./AppReducer";
import Tools from "../tools/Tools";
import styles from "@styles/RotateNewSection.module.css";
import UploadNewImage from "../section/UploadNewImage";

const RotateNewSection: NextPage = () => {
  const [data, dispatch]: any & actionTypes = useReducer<any>(Reducer, []);
  const imgRef = useRef(null);

  const onFlipFunc = (flip: boolean) => {
    dispatch(rotateAction(flip));
  };

  return (
    <div className={styles.rotateSection}>
      <UploadNewImage />
      <Tools data={data} onRotate={onFlipFunc} imgRef={imgRef} />
    </div>
  );
};

export default RotateNewSection;
