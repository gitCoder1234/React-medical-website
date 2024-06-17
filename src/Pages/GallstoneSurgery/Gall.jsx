import styles from "./Gall.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

import image1 from "../../../public/logo.png";
import image2 from "../../../public/img-1.png";
import image3 from "../../../public/img-1.png";
import image4 from "../../../public/img-3.jpeg";
import image5 from "../../../public/img-4.png";

import image6 from "../../../public/img-6.png";
import image7 from "../../../public/img-7.png";

import image8 from "../../../public/img-8.png";

import image9 from "../../../public/img-9.png";
import image10 from "../../../public/img-10.png";
import image11 from "../../../public/img-11.png";
import image12 from "../../../public/img-12.png";
import image13 from "../../../public/profileLogo.png";

import image14 from "../../../public/overview-img11.png";
import image15 from "../../../public/myacc-img1.png";
import image16 from "../../../public/myacc-img2.png";
import image17 from "../../../public/myacc-img3.png";
import image18 from "../../../public/myacc-img4.png";

import { PiGreaterThanBold } from "react-icons/pi";

import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

function Gall() {
  const [myaccount, setmyaccount] = useState(false);
  const gallcontent7Ref = useRef(null);

  const toggleaccount = () => {
    setmyaccount(!myaccount);
  };

  const scrollToGallcontent7 = () => {
    gallcontent7Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.gallpage}>
      <div className={styles.gallLogo}>
        <img src={image1} alt="" />
      </div>

      <div className={styles.galldemopart}>
        <img src={image13} alt="" />
        <p id={styles.galldemoparttext1}>My Demo Benefits</p>
        <p id={styles.galldemoparttext2}>Personal Account</p>

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
        <div className={styles.galloverlay} onClick={toggleaccount}></div>
      )}

      <nav className={styles.navbar}>
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

      <div className={styles.gallnavigation}>
        <Link to={"/surgeryCare"}>
          <span id={styles.gallnavigationtext0}> Home </span>{" "}
        </Link>

        <span id={styles.gallnavigationicon}>
          <PiGreaterThanBold />{" "}
        </span>

        <span id={styles.gallnavigationtext1}>Gall Bladder Stones </span>
      </div>

      <div className={styles.gallappointment} onClick={scrollToGallcontent7}>
        <p id={styles.gallappointmenttext1}>BOOK APPOINTMENT </p>
        <p id={styles.gallappointmenticon}>
          <FaArrowRight />
        </p>{" "}
      </div>

      <div className={styles.gallcontent1}>
        <img src={image2} alt="" />
        <p>Gall Bladder Stones</p>
        <img src={image3} alt="" />
      </div>

      <div className={styles.gallcontent2}>
        <p id={styles.gallcontent2text1}>What are GallBladder Stone?</p>
        <p id={styles.gallcontent2text2}>
          Gallstones are small, solid particles that form in the Gallbladder, a
          small organ located below the liver. The Gallbladder plays a crucial
          role in the digestive process by storing bile, a fluid produced by the
          liver that helps break down fats. When there is too much cholesterol,
          it results in Gall Stones.
        </p>
        <p id={styles.gallcontent2text3}>
          Gallbladder disorders, such as gallstones and inflammation, can cause
          significant discomfort and disrupt daily life. We understand the
          importance of timely and accurate diagnosis. Gallbladder issues can be
          assessed by using MRI, Ultrasound, and CT scan machines which can help
          us determine the best course of treatment plan to convey to the
          patient.
        </p>
      </div>

      <div className={styles.gallcontent3}>
        <p id={styles.gallcontent3text1}>
          How to diagnose gallstones? When to consult a doctor?
        </p>
        <p id={styles.gallcontent3text2}>
          Ultrasound is a sensitive test to diagnose the condition. The size of
          the stones, number of stones, position of the stones in the gall
          bladder, condition of liver, condition of bile ducts is all
          collectively investigated while planning for surgery.
        </p>

        <p id={styles.gallcontent3text3}>
          CT abdomen might be needed if the patient presents with complications
          like Gall stone pancreatitis. MRI, Endoscopy, ERCP are some of the
          tests with specific criteria. The surgeon would order for these tests
          in certain complicated cases of gallstone disease.
        </p>

        <img src={image4} alt="" />
      </div>

      <div className={styles.gallcontent4}>
        <p id={styles.gallcontent4text1}>Gallbladder Stones Treatment</p>

        <p id={styles.gallcontent4text2}>
          The treatment options for gallstones include:
        </p>

        <div className={styles.gallcontent3part}>
          <div className={styles.gallcontent3part1}>
            <span>
              {" "}
              <TiTick />
            </span>
            <p id={styles.gallcontent3part1text1}> Watchful Waiting: </p>
            <p id={styles.gallcontent3part1text2}>
              This means monitoring the gallstones regularly to see if they
              cause any symptoms or problems over time.
            </p>
          </div>

          <div className={styles.gallcontent3part2}>
            <span>
              {" "}
              <TiTick />
            </span>
            <p id={styles.gallcontent3part2text1}> Medications:  </p>
            <p id={styles.gallcontent3part2text2}>
              Medications like Ursodeoxycholic acid may be prescribed to
              dissolve cholesterol gallstones.
            </p>
          </div>

          <div className={styles.gallcontent3part3}>
            <span>
              {" "}
              <TiTick />
            </span>

            <p id={styles.gallcontent3part3text1}>
              {" "}
              Laparoscopic Cholecystectomy:
            </p>

            <p id={styles.gallcontent3part3text2}>
              In laparoscopic surgery, the abdominal and pelvic cavities are
              seen through teeny keyhole incisions
            </p>
          </div>
          <p id={styles.content3extra1}>
            with the help of a laparoscope, a thin rod with a camera attached.
            Better patient outcomes and quicker recovery are linked to this
            minimally invasive surgical procedure. We have the best Gallbladder
            surgeon who are skilled and expert in Laparoscopic surgery
          </p>

          <div className={styles.gallcontent3part4}>
            <span>
              {" "}
              <TiTick />
            </span>
            <p id={styles.gallcontent3part4text1}>
              {" "}
              Extracorporeal Shock Wave Lithotripsy (ESWL):
            </p>
            <p id={styles.gallcontent3part4text2}>
               This non-surgical procedure uses shock waves to break up
              gallstones into smaller
            </p>
          </div>

          <p id={styles.content3extra2}>
            pieces, making them easier to pass out of the body.
          </p>

          <div className={styles.gallcontent3part5}>
            <span>
              {" "}
              <TiTick />
            </span>
            <p id={styles.gallcontent3part5text1}> Endoscopic Procedures: </p>
            <p id={styles.gallcontent3part5text2}>
              Gallstone removal can be done using a variety of endoscopic
              procedures like percutaneous transhepatic
            </p>
          </div>

          <p id={styles.content3extra3}>
            cholangiography and endoscopic retrograde cholangiopancreatography.
          </p>
        </div>
      </div>

      <div className={styles.gallcontent5}>
        <p id={styles.gallcontent5text1}>Causes</p>
        <p id={styles.gallcontent5text2}> Symptoms</p>

        <div className={styles.gallcontent5part}>
          <div className={styles.gallcontent5part1}>
            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Excess Cholesterol</p>
            </div>

            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Bilirubin Imbalance</p>
            </div>

            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Concentrated Bile</p>
            </div>

            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Gallbladder Emptying Issues</p>
            </div>

            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Obesity</p>
            </div>

            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Rapid Weight Loss</p>
            </div>

            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p> Age and Gende</p>
            </div>
            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Family History</p>
            </div>
            <div className={styles.gallcontent5part1con1}>
              <img src={image5} alt="" />
              <p>Certain Medical Conditions</p>{" "}
            </div>
          </div>

          <div className={styles.gallcontent5part2}>
            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p> Abdominal Pain</p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>Nausea and Vomiting </p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>Bloating and Indigestion </p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>Gas and Burping </p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p> Jaundice</p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>Changes in Stool </p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>Fever and Chills</p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>Chronic cholecystitis </p>
            </div>

            <div className={styles.gallcontent5part2con1}>
              <img src={image5} alt="" />
              <p>GB cancer in the setting of chronic cholecystitis.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gallcontent6}>
        <p id={styles.gallcontent6text1}>When to go for surgery?</p>
        <p id={styles.gallcontent6text2}>
          What would be the complication if not operated?
        </p>

        <p id={styles.gallcontent6text3}>
          Cholecystectomy Surgery is the treatment for gallstone disease.
          Laparoscopic surgery is the standard of care now. This involves
          placing 4 ports or small cuts on the abdomen through which
          laparoscopic instruments are used and gallbladder is removed
          completely along with the stones inside. Isolated removal of only the
          gallstones while retaining the gallbladder is not possible. Removal of
          gallbladder would not affect the liver or bile flow or food digestion.
          Since gallbladder serves purely a storage function, removal of GB has
          no other side effects to bodily functions. Who needs to undergo
          surgery? Symptomatic stones, Multiple stones but no symptoms, Stones
          close to the outlet of gallbladder, Stones larger than 10mm , Scarred
          Gallbladder due to repeated infections, Gallbladder with polyps ,with
          or without stones. Polyps are extra growth of tissue within the
          gallbladder and can be cancerous.
        </p>
      </div>

      <div ref={gallcontent7Ref} className={styles.gallcontent7}>
        <p id={styles.gallcontent7text1}>Book free consultation</p>

        <input type="text" id={styles.gallcontent7text2} />
        <input type="text" id={styles.gallcontent7text3} />
        <input type="text" id={styles.gallcontent7text4} />

        <p id={styles.gallcontent7text5}>
          By proceeding to submit, you agree to our
        </p>

        <p id={styles.gallcontent7text6}>Terms & Conditions</p>

        <button id={styles.gallcontent7text7}>Request call back</button>
      </div>

      <div className={styles.gallcontent8}>
        <p id={styles.gallcontent8text1}>Our Specialists</p>
        <div className={styles.gallcontent8part1}>
          <div className={styles.gallcontent8part1content1}>
            <img src={image6} alt="" />
            <p id={styles.gallcontent8part1content1text1}>Dr. Vikrant Singh</p>
            <p id={styles.gallcontent8part1content1text2}>General Surgeon</p>
            <p id={styles.gallcontent8part1content1text3}>8 Years overall</p>

            <button>Book Free consultation</button>
          </div>

          <div className={styles.gallcontent8part1content2}>
            <img src={image7} alt="" />
            <p id={styles.gallcontent8part1content2text1}>Dr.Poornima</p>
            <p id={styles.gallcontent8part1content2text2}>M.B.B.S ,M.S</p>
            <p id={styles.gallcontent8part1content2text3}>5 Years overall</p>
            <button>Book Free consultation</button>
          </div>

          <div className={styles.gallcontent8part1content3}>
            <img src={image6} alt="" />
            <p id={styles.gallcontent8part1content3text1}>Dr Shreyas</p>
            <p id={styles.gallcontent8part1content3text2}>M.B.B.S ,M.S</p>
            <p id={styles.gallcontent8part1content3text3}>7 Years overall</p>

            <button>Book Free consultation</button>
          </div>
        </div>
      </div>

      <div className={styles.gallcontent9}>
        <p id={styles.gallcontent9text1}>Frequently Asked Questions</p>

        <div className={styles.gallcontent9part1}>
          <img src={image8} alt="" />
          <p>Is gallsbladder stone surgery safe?</p>
        </div>

        <div className={styles.gallcontent9part2}>
          <img src={image8} alt="" />
          <p>How long do I need to stay in hospital after surgery? </p>
        </div>

        <div className={styles.gallcontent9part3}>
          <img src={image8} alt="" />
          <p>Can gallstones return after surgery?</p>
        </div>

        <div className={styles.gallcontent9part4}>
          <img src={image8} alt="" />
          <p>Are there non-surgical alternatives to treat this?</p>
        </div>

        <div className={styles.gallcontent9part5}>
          <img src={image8} alt="" />
          <p>How long will the procedure last?</p>
        </div>
      </div>

      <div className={styles.gallcontent10}>
        <p id={styles.gallcontent10text1}>Why Demo Surgery Care?</p>

        <div className={styles.gallcontent10part1}>
          <div className={styles.gallcontent10part1content1}>
            <img src={image9} alt="" />
            <p id={styles.gallcontent10part1content1text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.gallcontent10part1content1text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>

          <div className={styles.gallcontent10part1content2}>
            <img src={image10} alt="" />
            <p id={styles.gallcontent10part1content2text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.gallcontent10part1content2text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>

          <div className={styles.gallcontent10part1content3}>
            <img src={image11} alt="" />
            <p id={styles.gallcontent10part1content3text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.gallcontent10part1content3text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>

          <div className={styles.gallcontent10part1content4}>
            <img src={image12} alt="" />
            <p id={styles.gallcontent10part1content4text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.gallcontent10part1content4text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
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
    </div>
  );
}

export default Gall;
