import { Link } from "react-router-dom";
import styles from "./Vaccination.module.css";
import { useState } from "react";

function Vaccination() {
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

      {/* //////////////////////////////////////////////////////////////
      first section 
      ///////////////////////////////////////////////////////////// */}
      <section className={styles.firstSection}>Vaccination</section>

      {/* /////////////////////////////////////////////////////////////
      second section 
      ////////////////////////////////////////////////////////////// */}

      <section className={styles.secondSection}>
        <div>Categories</div>
        <img src="../../../../public/vaccinationLanding.png" />
      </section>

      {/* //////////////////////////////////////////////////////////
      third section 
      /////////////////////////////////////////////////////////// */}
      <section className={styles.thirdSection}>
        {/* //////below is same data as second section of homepage  */}
        <div className={styles.secondBox2}>
          <div>
            <img
              src="../../../../public/doctor2.png"
              width="50px"
              height="50px"
            />
            <div>
              <Link to="/covid19">Covid 19 </Link>
            </div>
          </div>

          <div>
            <img
              src="../../../../public/medicine.png"
              width="50px"
              height="50px"
            />
            <div>Flu</div>
          </div>

          <div>
            <img
              src="../../../../public/calender.png"
              width="50px"
              height="50px"
            />
            <div>Thyroid</div>
          </div>

          <div>
            <img
              src="../../../../public/labImage.png"
              width="50px"
              height="50px"
            />
            <div>Hepatitis </div>
          </div>

          <div>
            <img
              src="../../../../public/doctorImage1.png"
              width="50px"
              height="50px"
            />
            <div>Typhoid</div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////
      fourth section 
      //////////////////////////////////////////////////////// */}
      <section className={styles.fourthSection}>
        <img src="../../../../public/vaccinationSecondBanner.png" />
      </section>

      {/* ////////////////////////////////////////////////////////////
      fifth section 
      ///////////////////////////////////////////////////////////// */}
      <section className={styles.fifthSection}>
        <div className={styles.fifthText1}>
          Trusted by <span style={{ color: "orange" }}>20,00,000</span>
        </div>
        <div className={styles.fifthText2}>Users Every Month</div>
        <div className={styles.fifthBox1}>
          <div>🔬 Trusted Partners</div>
          <div>🗺️ 1200+ Pincode</div>
        </div>
        <div className={styles.fifthBox2}>
          <div>🧪 Daily Temperature Check</div>
          <div>💊 Use of Sanitizers</div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////
      sixth section 
      //////////////////////////////////////////////////////// */}

      <section className={styles.sixthSection}>
        <div className={styles.sixthSectionText}>
          Frequently Asked Questions
        </div>
        <div className={styles.sixthBoxFlex}>
          <div className={styles.sixthBox1}>
            <div>📃 How It Works?</div>
            <div>💊 Is getting lab test done, safe and secure?</div>
            <div>📦 What is home sample collection?</div>
            <div>🧑🏾‍⚕️ Can an appointment be cancelled?</div>
          </div>
          <div className={styles.sixthBox2}>
            <div>📜 When will I receive reprts?</div>
            <div>
              🗺️ Are any documents required for Health Checkup via Demo?
            </div>
            <div>🧑🏾‍⚕️ What should I do before a health Checkup?</div>
            <div>🪙 Refund in case of advance payment?</div>
          </div>
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

      {/* end  */}
    </div>
  );
}

export default Vaccination;
