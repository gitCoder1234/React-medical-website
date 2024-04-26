import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  const [state, setState] = useState(true);
  const [login, setLogin] = useState(true);

  function handleClick() {
    if (state === true) setState(false);
    else {
      setState(true);
    }
  }

  function handleLogin() {
    if (login === true) setLogin(false);
    else {
      setLogin(true);
    }
  }

  return (
    <div>
      {/* ////////////////////////////////////////////
     login popup
     /////////////////////////////////////////// */}

      <div
        className={
          login === true
            ? `${styles.loginPop} ${styles.hidden2}`
            : styles.loginPop
        }
      >
        <div onClick={handleLogin}>Close</div>
        <div>Login</div>
        <div>Enter Phone Number</div>

        <form>
          <input type="text" placeholder="+91-XXXXXXXXXX" />
          <br />
          <Link to="/main" className={styles.loginSubmit}>
            Login
          </Link>
          <div>By signing in you agree to our</div>
          <div>Terms and Conditions</div>
        </form>
      </div>

      {/* ////////////////////////////////////////////////// */}
      {/* navbar  */}
      {/* ////////////////////////////////////////////////// */}

      <nav className={styles.navbar}>
        {/* first line  */}
        <div className={styles.firstNavbar}>
          <section className={styles.nav1}>
            <img
              width="100px"
              height="30px"
              src="../../../../public/logo.png"
            />
          </section>

          {/* ////////////////////////////////////// */}
          <section className={styles.nav2}>
            <div>
              <Link to="/overview" style={{ color: "rgb(60, 210, 244)" }}>
                About us
              </Link>
            </div>
            <div onClick={handleLogin}>Login</div>
          </section>
        </div>

        {/* second line  */}
        <div className={styles.secondNavbar}>
          <div style={{ color: "black" }}>📞Helpline +91 48435 97683 </div>
          <div>| Contact Us</div>
          <div>| Online Patient Admissions</div>
        </div>

        {/* third line  */}
        <div className={styles.thirdNavbar}>
          <div>About ▼</div>
          <div>Services ▼</div>
          <div>Patients ▼</div>
          <div>Specialists ▼</div>
          <Link to="/careers">
            <div>Careers ▼</div>
          </Link>
          <div>Support Us ▼</div>
          <Link to="/donateUs">
            <div>Donate</div>
          </Link>
        </div>
      </nav>

      {/* ///////////////////////////////////////////////////////////////
       filler section 
      /////////////////////////////////////////////////////////// */}
      <div className={styles.fillerSection}></div>

      {/* //////////////////////////////////////////////////////////////
     first section 
     //////////////////////////////////////////////////////////////// */}

      <section className={styles.firstSection}>
        <div className={styles.firstbox1}>
          <div>
            Welcome to a world of <br /> Wellness and Healing
          </div>
          <div>Where Your Helath Goals Become Our Priority</div>
          <div>
            <Link to="/doctorconsultation">BOOK APPOINTMENT → </Link>
          </div>
          <div>Learn more about our services</div>
        </div>

        <img
          className={styles.firstbox2}
          src="../../../../public/hexagon.png"
          width="100px"
          height="100px"
        />
      </section>

      {/* /////////////////////////////////////////////////////
      second section 
      ///////////////////////////////////////////////////// */}
      <section className={styles.secondSection}>
        {/* first box  */}
        <div className={styles.secondBox1}>
          <div>Consult with Top Doctor online,24*7</div>
          <div>
            <Link to="/doctorconsultation">Start Consultation →</Link>
          </div>
        </div>

        {/* second box  */}
        <div className={styles.secondBox2}>
          <div>
            <img
              src="../../../../public/doctor2.png"
              width="50px"
              height="50px"
            />
            <div>Talk to Doctor</div>
          </div>
          <Link to="/medicine">
            <div>
              <img
                src="../../../../public/medicine.png"
                width="50px"
                height="50px"
              />
              <div>Medicine</div>
            </div>
          </Link>
          <Link to="/doctorconsultation">
            <div>
              <img
                src="../../../../public/calender.png"
                width="50px"
                height="50px"
              />
              <div>Book Dr. App</div>
            </div>
          </Link>
          <Link to="/labs">
            <div>
              <img
                src="../../../../public/labImage.png"
                width="50px"
                height="50px"
              />
              <div>Lab Tests </div>
            </div>
          </Link>
          <Link to="/surgeryCare">
            <div>
              <img
                src="../../../../public/doctorImage1.png"
                width="50px"
                height="50px"
              />
              <div>Surgery</div>
            </div>
          </Link>
          <div onClick={handleClick}>
            <img src="../../../../public/dots.png" width="50px" height="50px" />
          </div>
        </div>

        {/* //////////////dropdown menu  */}
        <div
          className={
            state === true
              ? `${styles.secondSectionDropdown} ${styles.hidden}`
              : styles.secondSectionDropdown
          }
        >
          <div>⛑️ Insurance</div>
          <Link to="/dentalCare">
            <div>🪥 Dental</div>
          </Link>
          <Link to="/vaccination">
            <div>💉 Vaccination</div>
          </Link>
          <Link to="/covid19">
            <div>🔅 COVID-19</div>
          </Link>
        </div>
      </section>

      {/* /////////////////////////////////////////////////////////////
      third section 
      //////////////////////////////////////////////////////////// */}
      <section className={styles.thirdSection}>
        <img src="../../../../public/thirdSectionHomepage.png" />
      </section>

      {/* //////////////////////////////////////////////////////
      fourth section 
      /////////////////////////////////////////////////////// */}

      <section className={styles.fourthSection}>
        {/* box 1  */}
        <div className={styles.fourthBox1}>
          <div>
            🪙 <span style={{ color: "red" }}>DEMO</span> GOLD
          </div>
          <div>Give the care your family deserves</div>
          <div>
            Unlimited Consultations with top doctors for 6 familly members in
            22+ specialities and 16 languages
          </div>
          <div>BUY DEMO GOLD →</div>
        </div>

        {/* box2  */}
        <div className={styles.fourthBox2}>
          <div>
            <img src="../../../../public/one.png" width="50px" height="50px" />
            <div className={styles.fourthBox2Text}>
              Unlimited free consultation
            </div>
            <div>Get unlimited free consultation with all doctors 24*7</div>
          </div>
          <div>
            <img src="../../../../public/two.png" width="50px" height="50px" />
            <div className={styles.fourthBox2Text}>Free For All Health </div>
            <div>Consult with any doctor from 18 dept. at any time</div>
          </div>
        </div>

        {/* box3  */}
        <div className={styles.fourthBox2}>
          <div>
            <img
              src="../../../../public/three.png"
              width="50px"
              height="50px"
            />
            <div className={styles.fourthBox2Text}>Free for full family</div>
            <div>Get unlimited free consultation with all doctors 24*7</div>
          </div>
          <div>
            <img src="../../../../public/four.png" width="50px" height="50px" />
            <div className={styles.fourthBox2Text}>Video consulation</div>
            <div>Get unlimited free consultation with all doctors 24*7</div>
          </div>
        </div>
      </section>

      {/* ///////////////////////////////////////////////////////////
      fifth section 
      ///////////////////////////////////////////////////////// */}
      <section className={styles.fifthSection}>
        <img src="../../../../public/abhaId.png" />
      </section>

      {/* //////////////////////////////////////////////////////////
      sixth section 
      ////////////////////////////////////////////////////////// */}
      <section className={styles.sixthSection}>
        <div className={styles.sixthOne}>Insurance</div>
        <div className={styles.sixthTwo}>
          Get access to all your Health insurrace services - View Policy,
          Initiate and Track claims , Go cashless with network hospitals and
          intimate hospitalization
        </div>

        <div className={styles.sixthBox}>
          <div>
            <Link to="/ecard1">
              <div>E-card →</div>
            </Link>
            <div>Get e-cards for you and your family members</div>
            <img
              src="../../../../public/sixthHomepage.png"
              width="50px"
              height="80px"
            />
          </div>
          <div>
            <div>Claims →</div>
            <div>Track your claims in real time</div>
            <img
              src="../../../../public/sixthHomepage.png"
              width="50px"
              height="80px"
            />
          </div>
          <div>
            <div>Network Hospital →</div>
            <div>Get e-cards for you and your family members</div>
            <img
              src="../../../../public/sixthHomepage.png"
              width="50px"
              height="80px"
            />
          </div>
          <div>
            <div>Empane Hospital →</div>
            <div>Get e-cards for you and your family members</div>
            <img
              src="../../../../public/sixthHomepage.png"
              width="50px"
              height="80px"
            />
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

      {/* end   */}
    </div>
  );
}

export default Homepage;
