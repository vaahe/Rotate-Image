import { useReducer, useRef } from "react";
import type { NextPage } from "next";

import { actionTypes } from "@customtypes/reducerTypes";
import Reducer, { rotateAction } from "./AppReducer";
import ModifyImage from "./ModifyImage";
import Tools from "../tools/Tools";
import styles from "@styles/RotateSection.module.css";

const RotateSection: NextPage = () => {
  const [data, dispatch]: any & actionTypes = useReducer<any>(Reducer, []);
  const imgRef = useRef(null);

  const onRotateFunc = (rotate: boolean) => {
    dispatch(rotateAction(rotate));
  };

  return (
    <div className={styles.rotateSection}>
      <ModifyImage data={data} onRotate={onRotateFunc} imgRef={imgRef} />
      <Tools data={data} onRotate={onRotateFunc} imgRef={imgRef} />
    </div>
  );
};

export default RotateSection;
