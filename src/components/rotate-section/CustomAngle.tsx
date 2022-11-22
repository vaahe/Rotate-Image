import React from "react";

import styles from "@styles/CustomAngle.module.css";

const CustomAngle = ({ setDefault, handleChange, angle }: any) => {
  return (
    <div className={styles.customAngleContainer} id="customAngle">
      <div className={styles.customAngleAndResetText}>
        <p>Custom Angle(&#176;)</p>
        <button className={styles.resetButton} onClick={setDefault}>
          Reset
        </button>
      </div>
      <div className={styles.customAngleInput}>
        <input
          type="number"
          className={styles.numberInput}
          value={angle}
          min={-180}
          max={180}
          step={1}
          onChange={handleChange}
        />
        <input
          type="range"
          className={styles.slider}
          value={angle}
          min={-180}
          max={180}
          step={1}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CustomAngle;
