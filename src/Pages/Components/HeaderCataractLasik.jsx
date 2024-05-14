import React from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

const HeaderCataractLasik = () => {
  const pageName = useLocation().pathname.replace("/", "");

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

      {/* List Items Section Start */}
      <div className={styles.navItesLists}>
        <ul>
          <li>
            About <SlArrowDown />
          </li>
          <li>
            Services <SlArrowDown />
          </li>
          <li>
            Patients & Visitors <SlArrowDown />
          </li>
          <li>
            Specialists <SlArrowDown />
          </li>
          <li>
            Careers <SlArrowDown />
          </li>
          <li>
            Supports US <SlArrowDown />
          </li>
          <li>
            <Link>Donate</Link>
          </li>
        </ul>
      </div>
      {/* List Items Section End */}

      {/* Location and Appointment btutton Section Start */}
      <div className={styles.locationAppointment}>
        <div className={styles.pageLocation}>
          <span className={styles.mainDirectory}>Home</span>
          <IoIosArrowForward className={styles.leftArrow} />
          <span className={styles.tempDirectory}>{pageName}</span>
        </div>
        <div className={styles.appointmentBtn}>
          BOOK APPOINTMENT{" "}
          <IoIosArrowRoundForward className={styles.rightArrow} />
        </div>
      </div>
      {/* Location and Appointment btutton Section End */}
    </>
  );
};

export default HeaderCataractLasik;
