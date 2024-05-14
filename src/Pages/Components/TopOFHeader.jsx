import React from "react";
import styles from "./TopOFHeader.module.css";
import { SlArrowDown } from "react-icons/sl";

export const TopOfHeader = () => {
  return (
    <>
      {/* Header Section Start */}
      <nav className={styles.navCataract}>
        <div className={styles.logo}>
          <img src="./logo.png" alt="Company Logo" />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.avtar}>
            <img src="./profileLogo.png" alt="Profile Picture" />
          </div>
          <div className={styles.profileDetails}>
            <h4>My Demo Benefits</h4>
            <p>Personal Account</p>
          </div>
          <div className={styles.arrowContainer}>
            <SlArrowDown className={styles.arrow} />
          </div>
        </div>
      </nav>
      {/* Header Section End */}
    </>
  );
};
