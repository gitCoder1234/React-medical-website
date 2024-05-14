import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer Section Start */}
      <footer>
        <div className={styles.footerItems}>
          <h4>Health</h4>
          <ul>
            <li>
              <Link>
                <span style={{ color: "red" }}>DEMO</span>{" "}
                <span style={{ color: "#d2d211" }}>GOLD</span>
              </Link>
            </li>
            <li>
              <Link>Book Medicine</Link>
            </li>
            <li>
              <Link>Doctor Consultation</Link>
            </li>
            <li>
              <Link>Surgery Care</Link>
            </li>
            <li>
              <Link>Dental Care</Link>
            </li>
            <li>
              <Link>Cancer Care</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerItems}>
          <h4>Hospitalization</h4>
          <ul>
            <li>
              <Link>Locate Hospital</Link>
            </li>
            <li>
              <Link>Track Claim</Link>
            </li>
            <li>
              <Link>FAQ’S</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerItems}>
          <h4>About</h4>
          <ul>
            <li>
              <Link>Overview</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Security</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerItems}>
          <h4>FOLLOW US ON :</h4>
          <ul>
            <li>
              <FaFacebookF className={styles.socialMediaIcons} />
              <FaInstagram className={styles.socialMediaIcons} />
              <FaWhatsapp className={styles.socialMediaIcons} />
              <FaTwitter className={styles.socialMediaIcons} />
            </li>
            <li>
              <Link className={styles.likeBtn}>Terms Of Use</Link>
            </li>
            <li>
              <Link className={styles.likeBtn}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
};

export default Footer;
