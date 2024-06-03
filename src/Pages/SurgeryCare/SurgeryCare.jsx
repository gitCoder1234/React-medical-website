import styles from "./SurgeryCare.module.css";
import { SlArrowDown } from "react-icons/sl";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function SurgeryCare() {
  const listName = [
    "Proctology",
    "Laparoscopy",
    "Ophthalmology",
    "ENT",
    "Vascular",
    "Orthopedics",
    "Urology",
    "Gynecology",
    "Fertility",
    "Others",
  ];

  const treatConditions = [
    { image: "./Cataract.png", name: "Cataract" },
    { image: "./Lasik.png", name: "Lasik" },
    { image: "./Piles.png", name: "Piles" },
    { image: "./Gallstone.png", name: "Gallstone" },
    { image: "./KneeReplacement.png", name: "Knee Replacement" },
    { image: "./Fissure.png", name: "Fissure" },
    { image: "./Gynaecology.png", name: "Gynaecology" },
    { image: "./Lipoma.png", name: "Lipoma" },
    { image: "./Liposuction.png", name: "Liposuction" },
    { image: "./VaricoseVeins.png", name: "Varicose Veins" },
    { image: "./Hair.png", name: "Hair" },
    { image: "./Ortho.png", name: "Ortho" },
    { image: "./Aesthetics.png", name: "Aesthetics" },
    { image: "./IUITreatment.png", name: "IUI Treatment" },
    { image: "./Appendicitis.png", name: "Appendicitis" },
    { image: "./Gynecosmatia.png", name: "Gynecosmatia" },
    { image: "./IVFTreatment.png", name: "IVF Treatment" },
    { image: "./HipReplacement.png", name: "HipReplacement" },
  ];

  const worksItems = [
    {
      image: "./HowWork1.png",
      title: "FREE Consultation with an Expert",
      content:
        "A Dedicated Care Buddy will reach out to understand your personal needs, connect you with our curated list of surgeons and hospitals and get the best care for your surgery",
    },
    {
      image: "./HowWork2.png",
      title: "Financial Counselling & EMI Support",
      content:
        "Help you with insurance paperwork and support you with financing as required ",
    },
    {
      image: "./HowWork3.png",
      title: "Hassle-free admission & discharge",
      content:
        "Continuous support during the admission process, pre-surgery check-list and discharge. ",
    },
    {
      image: "./HowWork4.png",
      title: "Post-Surgery Care",
      content:
        "Regular check-ins from a dedicated nurse, help with medicines and tests, and unlimited follow-up consultations.",
    },
  ];

  const surgeryCareItems = [
    {
      image: "./SurgeryCare1.png",
      title: "Enhanced Quality of Caret",
      content:
        "Constant support, a network of premium hospitals and top-tier surgeons.",
    },
    {
      image: "./SurgeryCare2.png",
      title: "End-to-End Management",
      content:
        "Your only focus should be to go and get your procedure done. Leave the rest to us. ",
    },
    {
      image: "./SurgeryCare3.png",
      title: "Continuous Guidance",
      content:
        "Fingertip-access to all the information you will need. Any problem you may face resolved with one phone call. ",
    },
    {
      image: "./SurgeryCare4.png",
      title: "Lower Costs and  easy financing support",
      content:
        "Healthcare can be expensive. We bring you the best deals, EMI options and pricing models without compromising on quality.",
    },
  ];

  return (
    <>
      {/* Header Section Start */}
      <nav className={styles.navSurgeryCare}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <img src="./logo.png" alt="Company Logo" />
          </div>
          <span className={styles.labs}>Labs</span>
        </div>
        <div className={styles.rightSide}>
          <button>Book Appointment</button>
        </div>
      </nav>
      {/* Header Section End */}

      {/* Item List Section Start  */}
      <div className={styles.listItemsDiv}>
        <ul>
          {listName.map((item, index) => {
            return (
              <li key={index}>
                {item} <SlArrowDown />
              </li>
            );
          })}
        </ul>
      </div>
      {/* Item List Section End  */}

      {/* BigB Section Start */}
      <div className={styles.bigB}>
        <div className={styles.leftSide}>
          <h2 className={styles.headingName}>Surgery Care</h2>
          <h1 className={styles.headingTitle}>Your Buddy For Surgical Care!</h1>
          <ul>
            <li>End to End Care till Recovery with a dedicated Care Buddy</li>
            <li>
              Free Consult with the right expert for your condition & Treatment
            </li>
            <li>Easy Financing & Insurance Paperwork</li>
            <li>Hassle-free pre & post operative process</li>
            <li>*For Insured users with their insurance provider’s consent</li>
          </ul>
          <div className={styles.contactButton}>
            <button className={styles.book}>Book Free Consultation</button>
            <button className={styles.number}>
              <PiPhoneCallFill /> 08047186330
            </button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src="./bigB 1.png" alt="Big Brother" />
        </div>
      </div>
      {/* BigB Section End */}

      {/* Book Free Consultation Section Start */}
      <div className={styles.freeConsForm}>
        <h3>Book Free Consultation</h3>
        <form>
          <fieldset className={styles.nameField}>
            <legend>Name</legend>
            <input type="text" id="name" />
          </fieldset>

          <fieldset className={styles.nameField}>
            <legend>Number</legend>
            <input type="text" id="number" />
          </fieldset>
          <fieldset className={styles.nameField}>
            <legend>Location</legend>
            <input type="text" id="location" />
          </fieldset>
          <fieldset className={styles.nameField}>
            <legend>Surgery</legend>
            <input type="text" id="surgery" />
          </fieldset>
          <button type="submit">Book Free Consultation</button>
        </form>
        <p>
          By proceeding to submit, you agree to our{" "}
          <span style={{ color: "blue" }}>Terms & Conditions</span>{" "}
        </p>
      </div>
      {/* Book Free Consultation Section End */}

      {/* Conditions we treat Section Start */}
      <div className={styles.conditionTreat}>
        <h1>Conditions we treat</h1>
        <div className={styles.treatItems}>
          {treatConditions.map((item, index) => {
            return (
              <div key={index} className={styles.treatName}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Conditions we treat Section End */}

      {/* Medical Details Section Start */}
      <div className={styles.medicalDetails}>
        <div className={styles.medicalDetailsItem}>
          <h2>50+</h2>
          <p>Conditions & Treatments </p>
        </div>
        <div className={styles.medicalDetailsItem}>
          <h2>30+</h2>
          <p>Cities </p>
        </div>
        <div className={styles.medicalDetailsItem}>
          <h2>300+</h2>
          <p> hospitals </p>
        </div>
        <div className={styles.medicalDetailsItem}>
          <h2>500+</h2>
          <p>Expert Surgeons </p>
        </div>
      </div>
      {/* Medical Details Section End */}

      {/* Surgery Made Super Easy Section Start */}
      <div className={styles.superEasy}>
        <h1>Surgery made super easy</h1>
        <div className={styles.superEasyBox}>
          <img src="./superEasyBox.png" alt="image" />
        </div>
      </div>
      {/* Surgery Made Super Easy Section End */}

      <hr className={styles.divider} />

      {/* How it works Section Start */}
      <div className={styles.worksContainer}>
        <h1>How it works?</h1>
        <div className={styles.worksItemsContainer}>
          {worksItems.map((item, index) => {
            return (
              <div key={index} className={styles.worksItem}>
                <img src={item.image} alt={`How it works` + index} />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* How it works Section End */}

      <hr className={styles.divider} />

      {/* Demo Surgery Care Section Start */}
      <div className={styles.surgeryCareContainer}>
        <h1>Why Demo Surgery Care ?</h1>
        <div className={styles.surgeryCareItems}>
          {surgeryCareItems.map((item, index) => {
            return (
              <div key={index} className={styles.surgeryCareItem}>
                <img src={item.image} alt={`Surgery Care ` + index} />
                <div className={styles.desc}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Demo Surgery Care Section End */}

      {/* <hr className={styles.divider} /> */}

      {/* Our User Love us Start */}
      <div className={styles.testimonialContainer}>
        <h1>Our Users Love Us</h1>
        <div className={styles.testimonialItems}>
          {/* ---First--- */}
          <div className={styles.testimonial}>
            <h5>Trusted Service by Demo</h5>
            <p>
              First I would like convey my thanks to demo and their Care Buddy
              who assisted me till the discharge. Medibuddy provided hassle free
              consultation and for the operation. The entire insurance policy
              was taken care without involvement and it helped me to take care
              of myself. Finally I would like to thank the Unity hospital staff
              and their doctor
            </p>
            <hr className={styles.divider} />
            <div className={styles.docDetails}>
              <FaUserDoctor className={styles.docIcon} />
              <div>
                <p className={styles.docName}>Surya Kumar</p>
                <div className={styles.loctionExpert}>
                  <span className={styles.location}>Hyderabad</span>
                  <span className={styles.expert}>Hydrocele</span>
                </div>
              </div>
            </div>
          </div>
          {/* ---Second--- */}
          <div className={styles.testimonial}>
            <h5>Massive Thanks!</h5>
            <p>
              I sincerely thank demo for coordination and commitment towards the
              service rendered in making my total knee replacement surgery
              hassle-free. Your work is truly commendable, and I appreciate your
              professional attitude. So easy to talk to and work with, very
              helpful always! Massive thanks.
            </p>
            <hr className={styles.divider} />
            <div className={styles.docDetails}>
              <FaUserNurse className={styles.docIcon} />
              <div>
                <p className={styles.docName}>Abhilasha vasant</p>
                <div className={styles.loctionExpert}>
                  <span className={styles.location}>Delhi</span>
                  <span className={styles.expert}>Knee Replacement</span>
                </div>
              </div>
            </div>
          </div>
          {/* ---Third--- */}
          <div className={styles.testimonial}>
            <h5>Friendly Care Buddy</h5>
            <p>
              The experience with demo and their Care Buddy was great. I had a
              fast approval on my claim. I have not faced any difficulties
              throughout the process. I would like to mention special for the
              Care Buddies for their continuous follow ups starting with the
              consultation till hospital discharge. Thanks team for following up
              even after the surgery.
            </p>
            <hr className={styles.divider} />
            <div className={styles.docDetails}>
              <FaUserDoctor className={styles.docIcon} />
              <div>
                <p className={styles.docName}>Prasanna Kumar</p>
                <div className={styles.loctionExpert}>
                  <span className={styles.location}>Bengaluru</span>
                  <span className={styles.expert}>Lipoma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our User Love us End */}

      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
    </>
  );
}
