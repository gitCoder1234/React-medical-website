import { useState } from "react";
import styles from "./DentalCare.module.css";
import { Link } from "react-router-dom";

function DentalCare() {
  const [login, setLogin] = useState(true);

  function handleLogin() {
    if (login === true) setLogin(false);
    else {
      setLogin(true);
    }
  }

  return (
    <div>
      {/* ////////////////////////////////////////////////////
       profile login pop 
       ////////////////////////////////////////////////////// */}
      <div
        className={
          login === true
            ? `${styles.profileLogin} ${styles.hidden2}`
            : styles.profileLogin
        }
      >
        <div>Switch Benefits</div>
        <div className={styles.profileLoginText}>
          <div>D</div>
          <div>My Demo Benefits &nbsp;&nbsp;&nbsp;&nbsp; ✅ </div>
        </div>

        <div>Account</div>
        <div>Link your Corporate and Insurance accounts</div>
        <div>📃 Track ▽</div>
        <div>🪙 Transaction ▽</div>
        <div>
          <Link to="/profile">👤 Profile ▽ </Link>
        </div>
        <div>
          <Link to="/">🔴 Sign Out ▽ </Link>
        </div>
      </div>

      {/* //////////////////////////////////////////////////
      navbar new 
      ///////////////////////////////////////////////// */}
      <nav className={styles.newNavbar}>
        <img src="../../../../public/logo.png" width="200px" height="60px" />

        <div className={styles.navBar2}>
          <img
            src="../../../../public/profileLogo.png"
            width="50px"
            height="50px"
          />
          <div onClick={handleLogin} className={styles.navBar2Text}>
            <div>My Demo Benefits ▽ </div>
            <div>Personal Account</div>
          </div>
        </div>
      </nav>

      {/* /////////////////////////////////////////////////////////
      first section 
      ////////////////////////////////////////////////////////// */}
      <section className={styles.firstSection}>
        <div>
          Discover Your Brightest Smile: Comprehensive
          <span style={{ color: "lightseagreen" }}> Dental Care </span>Services
          at DEMO
        </div>
        <div>
          <Link style={{ color: "white" }} to="/dentalApp">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////
      second section 
      /////////////////////////////////////////////////////////// */}
      <section className={styles.secondSection}>
        <div className={styles.secondSectionBox1}>
          <div>Preventive Dentistry</div>
          <img src="../../../../public/dentalImage1.jpeg" />
        </div>
        <div className={styles.secondSectionBox2}>
          <div>Orthodontics</div>
          <img src="../../../../public/dentalmage2.jpeg" />
        </div>
        <div className={styles.secondSectionBox3}>
          <div>Oral Surgery</div>
          <img src="../../../../public/dentalImage3.jpeg" />
        </div>
        <div className={styles.secondSectionBox4}>
          <div>Peridontal Care</div>
          <img src="../../../../public/dentalImage4.jpeg" />
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////
      third section 
      //////////////////////////////////////////////////////// */}
      <section className={styles.thirdSection}>
        <div>Why Choose Us ?</div>
        <img src="../../../../public/dentalCareGif.gif" />
        <div>• Experienced and compassionate dental team</div>
        <div>• State of the art dental technology</div>
        <div>• Personalized treatmnet plans tailored to your needs</div>
        <div>• Comfortable and relaxing dental environment</div>
        <div>• Commitment to patient education adn preventive care</div>
      </section>

      {/* ///////////////////////////////////////////////////////////
      fourth section 
      ////////////////////////////////////////////////////////////// */}
      <section className={styles.fourthSection}>
        <div>Dental Care Tips</div>
        <div>• Brush your teeth twice a day with flouride toothpaste</div>
        <div>Floss daily to remove plaque and food particles between teeth</div>
        <div>
          Limit sugary foods and beverages to reduce the risk of cavities
        </div>
        <div>
          Wear a mouthguard during sports activities to protect your teeth from
          injury
        </div>
        <div>
          We accept most dental insurance plans and offerings flexible payment
          options to make dental care more accessible and affordable for our
          patients. Please contact our office for more information about
          insurance converage and finacing options.
        </div>
      </section>

      {/* ////////////////////////////////////////////////////
      footer section 
      ///////////////////////////////////////////////////// */}
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

      {/* end   */}
    </div>
  );
}

export default DentalCare;
