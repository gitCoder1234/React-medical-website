import styles from "./Jobs5.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import image1 from "../../../../../public/logo.png";
import image2 from "../../../../../public/profileLogo.png";
import image14 from "../../../../../public/overview-img11.png";
import image15 from "../../../../../public/myacc-img1.png";
import image16 from "../../../../../public/myacc-img2.png";
import image17 from "../../../../../public/myacc-img3.png";
import image18 from "../../../../../public/myacc-img4.png";

import { TiTick } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";

function Jobs5() {
  const [myaccount, setmyaccount] = useState(false);

  const toggleaccount = () => {
    setmyaccount(!myaccount);
  };

  return (
    
      <>
        <div className={styles.jobs5logo}>
          <img src={image1} alt="" />
        </div>

        <div className={styles.jobs5demopart}>
          <img src={image2} alt="" />
          <p id={styles.jobs5demoparttext1}>My Demo Benefits</p>
          <p id={styles.jobs5demoparttext2}>Personal Account</p>
        
          <span onClick={toggleaccount}>
            <FaChevronDown />{" "}
          </span>
       
        </div>

        {myaccount && (
          <div className={styles.account}>
            <p id={styles.accounttext1}>Switch Benefits</p>

            <div className={styles.accountpart1}>
              <p id={styles.accountpart1text1}>D</p>
              <p id={styles.accountpart1text2}>My Demo Benefits</p>
              <p id={styles.accountpart1text3}>Personal Account</p>

              <span>
                <TiTick />
              </span>
            </div>

            <p id={styles.accountline}></p>

            <p id={styles.accounttext2}>Account</p>

            <div className={styles.accountpart2}>
              <p id={styles.accountpart2text1}>Link your </p>
              <p id={styles.accountpart2text2}>Corporate and </p>
              <p id={styles.accountpart2text3}> Insurance accounts </p>
              <img src={image14} alt="" />
            </div>

            <div className={styles.accountpart3}>
              <img src={image15} alt="" />
              <p>Track Appointment</p>
              <span>
                <FaChevronDown />
              </span>
            </div>

            <div className={styles.accountpart4}>
              <img src={image16} alt="" />
              <p>All Transaction</p>
              <span>
                <FaChevronDown />
              </span>
            </div>

            <div className={styles.accountpart5}>
              <img src={image17} alt="" />
              <p>Profile</p>
              <span>
                <FaChevronDown />
              </span>
            </div>
            <div className={styles.accountpart6}>
              <img src={image18} alt="" />
              <p>Sign Out</p>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
        )}

        {myaccount && (
          <div className={styles.jobs4overlay} onClick={toggleaccount}></div>
        )}
        <div className={styles.jobscontent1}>
          <p id={styles.jobscontent1text1}>Jobs at Demo</p>
          <p id={styles.jobscontent1text2}>View 8 Openings</p>
        </div>

        <div className={styles.jobscontent2}>
          <p>
            Welcome to our Careers section. Please review the positions we are
            currently hiring for and <br /> apply to the ones that interest you.
          </p>
        </div>

        <p id={styles.jobscontent3text}>Licensed Practical Nurse (LPN)</p>

        <div className={styles.jobs5content4}>
          <p id={styles.jobs5content4text1}>Bengaluru, Karnataka, India</p>
          <p id={styles.jobs5content4text2}> Full-Time </p>
        </div>

        <div className={styles.jobs5content5}>
          <ul>
            <li>
              {" "}
              <span style={{ fontWeight: 500 }}>Location: </span>
              [Bengaluru, Karnataka, India]
            </li>

            <li>
              {" "}
              <span style={{ fontWeight: 500 }}> Description: </span>
              We are seeking a compassionate and reliable Licensed Practical
              Nurse to join our nursing team. Responsibilities include
              administering medications, performing routine patient care tasks,
              documenting patient information, and collaborating with healthcare
              providers.
            </li>

            <li>
              {" "}
              <span style={{ fontWeight: 500 }}> Requirements: </span>
              <ul>
                <ul>
                  {" "}
                  <li>Graduation from an accredited LPN program</li>
                </ul>

                <ul>
                  <li>Current LPN license</li>
                </ul>
                <ul>
                  <li>CPR certification</li>
                </ul>
              </ul>
            </li>

            <li>
              <span style={{ fontWeight: 500 }}> Benefits: </span>

              <ul>
                <ul>
                  {" "}
                  <li>Competitive salary</li>{" "}
                </ul>
                <ul>
                  {" "}
                  <li>Health insurance benefits </li>
                </ul>
                <ul>
                  {" "}
                  <li>Continuing education opportunities</li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>

        <p id={styles.jobs5content6text}>Apply</p>

        <div className={styles.jobs5content6}>
          <p>Couldn't find the opening you were looking for?</p>
          <p>Get updates about new opportunities straight to your inbox</p>
          <input
            id={styles.jobs5content6input1}
            type="text"
            placeholder="Enter your Email"
          />

          <input
            id={styles.jobs5content6input2}
            type="text"
            placeholder="Keep me posted"
          />
        </div>

        <div className={styles.footerSection}>
          {/* first  */}
          <div className={styles.footerOne}>
            <div>Health</div>
            <div>DEMO GOLD</div>
            <div>Book Medicine</div>
            <div>
              <Link to="/doctorconsultation" style={{ color: "#31363f" }}>
                Doctor Consultation
              </Link>
            </div>
            <div>
              <Link to="/surgeryCare" style={{ color: "#31363f" }}>
                Surgery Care
              </Link>
            </div>
            <div>
              <Link to="/dentalCare" style={{ color: "#31363f" }}>
                Dental Care
              </Link>
            </div>
            <div>
              <Link to="/cancercare" style={{ color: "#31363f" }}>
                Cancer Care
              </Link>
            </div>
          </div>
          {/* second  */}
          <div className={styles.footerTwo}>
            <div>Hospitalization</div>
            <div>
              <Link to="/location1" style={{ color: "#31363f" }}>
                Locate Hospital
              </Link>
            </div>
            <div>Track Claim</div>
            <div>
              <Link to="/faq" style={{ color: "#31363f" }}>
                FAQ'S
              </Link>
            </div>
          </div>

          {/* third  */}
          <div className={styles.footerThree}>
            <div>About </div>
            <div>
              <Link to="/overview" style={{ color: "#31363f" }}>
                Overview
              </Link>
            </div>
            <div>
              <Link to="/contact" style={{ color: "#31363f" }}>
                Contact
              </Link>
            </div>
            <div>
              <Link to="/careers" style={{ color: "#31363f" }}>
                Careers
              </Link>
            </div>
            <div>
              <Link to="/security" style={{ color: "#31363f" }}>
                Security
              </Link>
            </div>
          </div>

          {/* fourth  */}
          <div className={styles.footerFour}>
            <div>FOLLOW US ON:</div>
            <div>
              <img
                src="../../../../public/icons8-whatsapp-50.png"
                width="32px"
                height="32px"
              />
              <img
                src="../../../../public/icons8-twitter-50.png"
                width="32px"
                height="32px"
              />
              <img
                src="../../../../public/icons8-insta-50.png"
                width="32px"
                height="32px"
              />
              <img
                src="../../../../public/icons8-fb-50.png"
                width="32px"
                height="32px"
              />
            </div>
            <div>
              <Link to="/termsOfUse" style={{ color: "white" }}>
                Terms Of Use
              </Link>
            </div>
            <div>
              <Link to="/privacy" style={{ color: "white" }}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </>
  );
}

export default Jobs5;
