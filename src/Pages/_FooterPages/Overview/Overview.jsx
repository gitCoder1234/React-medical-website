import styles from "./Overview.module.css";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";

import image1 from "../../../../public/logo.png";
import image2 from "../../../../public/overview-img2.jpeg";
import image3 from "../../../../public/overview-img3.jpeg";
import image4 from "../../../../public/overview-img4.png";
import image5 from "../../../../public/overview-img5.jpeg";
import image6 from "../../../../public/overview-img6.jpeg";
import image7 from "../../../../public/overview-img7.jpeg";
import image8 from "../../../../public/overview-img8.jpeg";
import image9 from "../../../../public/overview-img9.jpeg";
import image10 from "../../../../public/overview-img10.png";
import image11 from "../../../../public/overview-img11.png";
import image12 from "../../../../public/profileLogo.png";

import image13 from "../../../../public/Group.png";
import image14 from "../../../../public/Group (1).png";
import image15 from "../../../../public/overview-img11.png";
import image16 from "../../../../public/overview-img12.png";



import { FaChevronDown } from "react-icons/fa";

function Overview() {
  return (
    <>
      <div className={styles.overLogo}>
        <img src={image1} alt="" />
      </div>

      <div className={styles.overdemopart}>
        <img src={image12} alt="" />
        <p id={styles.overdemoparttext1}>My Demo Benefits</p>
        <p id={styles.overdemoparttext2}>Personal Account</p>

        <span>
          <FaChevronDown />{" "}
        </span>
      </div>

      <div className={styles.overviewcontent1}>
        <div className={styles.overviewcontent1part1}>
          <p id={styles.overviewcontent1part1text1}>
            India’s Largest HealthCare Platform
          </p>
          <p id={styles.overviewcontent1part1text2}>
            Giving Customer’s 24*7 High Quality Healthcare
          </p>
        </div>

        <div className={styles.overviewcontent1part2}>
          <img src={image11} alt="" />
          <p id={styles.overviewcontent1part2text1}>Join Us</p>
          <p id={styles.overviewcontent1part2text2}>50+ Open Positions</p>
          <span>
            <FaGreaterThan />
          </span>
        </div>
      </div>

      <div className={styles.overviewcontent2}>
        <p id={styles.overviewcontent2text1}>
          Where Care Meets Compassion, and Health Flourishes
        </p>

        <p id={styles.overviewcontent2text2}>
          Our mission is to provide personalized healthcare solutions that
          prioritize your wellbeing every step of the way. With a commitment to
          compassion and expertise, we're dedicated to guiding you on your
          journey to optimal health.
        </p>

        <img src={image10} alt="" />
      </div>

      <div className={styles.overviewcontent3}>
        <p id={styles.overviewcontent3text1}>We Put the Care In Healthcare</p>

        <div className={styles.overviewcontent3part}>
          <div className={styles.overviewcontent3part1}>
            <img src={image2} alt="" />
            <p>Online Consultations</p>
          </div>

          <div className={styles.overviewcontent3part1}>
            <img src={image3} alt="" />

            <p>Offline Consultations</p>
          </div>
          <div className={styles.overviewcontent3part1}>
            <img src={image4} alt="" />

            <p>Lab Tests at Home</p>
          </div>

          <div className={styles.overviewcontent3part1}>
            <img src={image5} alt="" />

            <p>Medicine Delivery</p>
          </div>
          <div className={styles.overviewcontent3part1}>
            <img src={image6} alt="" />

            <p>Clinics</p>
          </div>
        </div>
      </div>

      <p id={styles.overviewtext1}>Equipped With a Plan & Purpose</p>

      <div className={styles.overviewcontent4}>
        <div className={styles.overviewcontent4part1}>
          <img src={image7} alt="" />
          <p id={styles.overviewcontent4part1text1}>Our Vision</p>
          <p id={styles.overviewcontent4part1text2}>
            To be the leading provider of compassionate and innovative
            healthcare solutions, transforming lives and inspiring communities
            to thrive in health and wellness.
          </p>
        </div>

        <div className={styles.overviewcontent4part2}>
          <img src={image8} alt="" />
          <p id={styles.overviewcontent4part2text1}>Our Mission</p>
          <p id={styles.overviewcontent4part2text2}>
            Through personalized treatment plans, state-of-the-art technology,
            and a commitment to compassion and excellence, we strive to empower
            individuals to live their healthiest lives.
          </p>
        </div>
      </div>

      <div className={styles.overviewcontent5}>
        <p id={styles.overviewcontent5text1}>Meet The Founders</p>
        <img src={image9} alt="" />

        <p id={styles.overviewcontent5text2}>
          We are Avinash Mishra(CEO) and Yogesh Sahu(COO), the co-founders of
          this venture, and we're delighted to share our story with you.
        </p>

        <p id={styles.overviewcontent5text3}>
          Our journey in healthcare began with a shared vision to revolutionize
          the way healthcare is delivered, making it more accessible,
          personalized, and compassionate. With diverse backgrounds in
          healthcare management and technology innovation, we combined our
          expertise and passion to create Demo Medical.
        </p>
        <p id={styles.overviewcontent5text4}>
          Avinash Mishra brings [vision, strategy,]to the table, while Yogesh
          Sahu contributes [ operations of the company]. Together, we are
          committed to leveraging technology and human-centric approaches to
          provide exceptional healthcare experiences.
        </p>

        <p id={styles.overviewcontent5text5}>
          Warm regards, <br />
          Avinash Mishra and Yogesh Sahu
        </p>
      </div>

      <div className={styles.overviewcontent6}>
        <p id={styles.overviewcontent1heading}> Partnerships</p>

        <div className={styles.overviewcontent6div}>
          <div className={styles.overviewcontent6div1}>
            <img src={image13} alt="" />
            <p id={styles.overviewcontent6div1text}>
              10,000+ Doctors At your Doorstep
            </p>
          </div>

          <div className={styles.overviewcontent6div2}>
            <img src={image14} alt="" />
            <p id={styles.overviewcontent6div1text}>
              5000 Hospitals Made Accessible{" "}
            </p>
          </div>
          <div className={styles.overviewcontent6div3}>
            <img src={image15} alt="" />
            <p id={styles.overviewcontent6div1text}>
              1500 Pharmacies Onboarded{" "}
            </p>
          </div>
          <div className={styles.overviewcontent6div4}>
            <img src={image16} alt="" />
            <p id={styles.overviewcontent6div1text}>20,000 Pincodes Served </p>
          </div>
        </div>
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

export default Overview;
