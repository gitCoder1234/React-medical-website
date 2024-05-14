import { Link } from "react-router-dom";
import styles from "./DentalApp.module.css";
import { useState } from "react";

function DentalApp() {
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

      {/* ///////////////////////////////////////////////////////////////
       filler section 
      /////////////////////////////////////////////////////////// */}
      <div className={styles.fillerSection}></div>

      {/* //////////////////////////////////////////////////////
        first section 
       /////////////////////////////////////////////////////// */}
      <section className={styles.firstSection}>
        <div className={styles.firstSectionText}>Dental Care</div>
        <div className={styles.firstSectionBox}>
          <div className={styles.firstSectionBox1}>
            <img src="../../../../public/girlSmile.jpeg" />
          </div>

          {/* box 2  */}
          <div className={styles.firstSectionBox2}>
            <div>Your Buddy For Dental Care!</div>
            <div>🔵 End to end assitance form a dedicated Care buddy</div>
            <div>
              🔵 Consultation with speacialists , right diagnosis & treatment
            </div>
            <div>🔵 Hassle free & cashless experience</div>
            <div>🔵 Appointment confirmation within 24 hours</div>

            <div>📞 080694522818</div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////
      second section 
      /////////////////////////////////////////////////////////// */}
      <section className={styles.secondSection}>
        <div className={styles.secondSectionText}>Book Consultation</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" className={styles.name} />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <br />
            <input type="text" className={styles.number} />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <br />
            <input type="text" className={styles.location} />
          </div>
          <button type="submit">Book Appointment</button>
        </form>

        <div className={styles.secondSectionLastText}>
          By Proceeding To Submit, your agree to our Terms & Conditions
        </div>
      </section>

      {/* //////////////////////////////////////////////////////////
      third section 
      /////////////////////////////////////////////////////////// */}
      <section className={styles.thirdSection}>
        <div className={styles.thirdSectionBox1}>
          <div>500+</div>
          <div>Dental Procedure</div>
        </div>
        <div className={styles.thirdSectionBox2}>
          <div>2000+</div>
          <div>Dental Care Centres</div>
        </div>
        <div className={styles.thirdSectionBox3}>
          <div>900+</div>
          <div>Cities</div>
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

export default DentalApp;
