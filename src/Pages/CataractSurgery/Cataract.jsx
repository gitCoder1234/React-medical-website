import { SlArrowDown, SlBookOpen } from "react-icons/sl";
import styles from "./Cataract.module.css";
import Footer from "../Components/Footer";
import HeaderCataractLasik from "../Components/HeaderCataractLasik";

function Cataract() {
  return (
    <>
      {/* Header with List Item and Location and Appointment Section Start */}
      <HeaderCataractLasik />
      {/* Header with List Item and Location and Appointment Section End */}

      {/* Eyes Surgery Section Start */}
      <div className={styles.eyeSurgeryContainer}>
        <div className={styles.eyeImg}>
          <img src="./EyeImage.png" alt="Eye Image" />
        </div>
        <h1 className={styles.eyeSurgeryHeading}>Cataract - Eye Surgery</h1>
        <div className={styles.eyeImg}>
          <img src="./EyeImage.png" alt="Eye Image" />
        </div>
      </div>
      {/* Eyes Surgery Section End */}

      {/* Cataract Details Section Start */}
      <div className={styles.cataractDetailsContainer}>
        {/* What is Cataract Start */}
        <div className={styles.whatCataract}>
          <div className={styles.imgContainer}>
            <img src="./WhatCataract.png" alt="What is Cataract" />
          </div>
          <div className={styles.descContainer}>
            <h4>What is Cataract?</h4>
            <p>
              A cataract is a clouding of the normally clear lens of the eye.
              For people who have cataracts, seeing through cloudy lenses is a
              bit like looking through a frosty or fogged-up window.
            </p>
            <p>
              It is a cloudy area in the lens of the eye that leads to a
              decrease in vision. Cataracts often develop slowly and can affect
              one or both eyes. Most commonly, cataracts occur in older people
              the lens should normally be clear. However, with cataracts, the
              affected lens becomes like frosted glass.
            </p>
          </div>
        </div>
        {/* What is Cataract End */}

        {/* Types of Cataract Start */}
        <div className={styles.typeContainer}>
          <div className={styles.descContainer}>
            <h4>What are the types of Cataract?</h4>
            <p>Two main types of Cataract are - </p>
            <p>
              <span style={{ color: "#4464D2" }}>Age Related Cataract: </span>{" "}
              Also known as senile cataract, Most age- related cataracts take
              many years to form and therefore many people do not realize when
              there is little cloudiness in the eye. For some people, the
              cataract never becomes bad enough to impair vision. However, in
              many cases, vision becomes gradually worse over the years.
            </p>
            <p>
              <span style={{ color: "#4464D2" }}>
                Congenital cataracts (present at birth):{" "}
              </span>{" "}
              These are uncommon, but important to diagnose early, and must be
              removed as early as possimport Footer from
              './../Components/Footer'; ible after birth. It can cause total
              loss of vision (severe sight impairment) which may then persist
              even if the cataract is removed later in life. Patients should
              consult an Ophthalmologist. On the Examination, Doctor will decide
              when the patient can go for surgery.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <img src="./TypeCataracts.png" alt="Type of Cataract" />
          </div>
        </div>
        {/* Types of Cataract End */}

        {/* Diagnosis of Cataract Start */}
        <div className={styles.disgnosisContainer}>
          <div className={styles.imgContainer}>
            <img src="./DiagnosisCataract.png" alt="What is Cataract" />
          </div>
          <div className={styles.descContainer}>
            <h4>Diagnosis of Cataract</h4>
            <p>
              The Diagnosis of Cataract are Visual acuity test,Slit-lamp exam
              and Retinal exam are the most commonly used methods for the
              detection of cataracts. Patients should consult an Ophthalmol
              -ogist. On the Examination, Doctor will decide when the patient
              can go for surgery.
            </p>
          </div>
        </div>
        {/* Diagnosis of Cataract End */}
      </div>
      {/* Cataract Details Section End */}

      {/* Like Breaker Section Start */}
      <div className={styles.breaker}></div>
      {/* Like Breaker Section End */}

      {/* Causes and Symptoms Section Start */}
      <div className={styles.causesSymptoms}>
        <div className={styles.bothDesc}>
          <h4>Causes</h4>
          <ul>
            <li>Diabetes</li>
            <li>Eye surgery or eye injuries</li>
            <li>Radiation treatment to your upper body.</li>
            <li>
              Steroids, common medications to treat conditions like arthritis
              and lupus.
            </li>
          </ul>
        </div>
        <div className={styles.bothDesc}>
          <h4>Symptoms</h4>
          <ul>
            <li>Double vision</li>
            <li>Need for brighter light to read.</li>
            <li>Vision that's cloudy, blurry, foggy or filmy</li>
            <li>
              Prescription changes in glasses, including sudden near sightedness
            </li>
          </ul>
        </div>
      </div>
      {/* Causes and Symptoms Section End */}

      {/* Why you choose us Section Start */}
      <div className={styles.whyChooseUsContainer}>
        <img
          src="./WhyChooseUsBgImg.png"
          alt="Background Image"
          className={styles.bgImg}
        />
        <div className={styles.detailsContainer}>
          <h1>Why you Should Choose Us?</h1>

          <div className={styles.itemsContainerRow1}>
            <div className={styles.itemDetail}>
              <img src="./virtual-reality.png" alt="Improved Vision" />
              <p>Improved Vision</p>
            </div>
            <div className={styles.itemDetail}>
              <img src="./recovery.png" alt="Fast Recovery" />
              <p>Fast Recovery</p>
            </div>
            <div className={styles.itemDetail}>
              <img src="./MinimalDiscomfort.png" alt="Minimal Discomfort" />
              <p>Minimal Discomfort</p>
            </div>
          </div>
          <div className={styles.itemsContainerRow2}>
            <div className={styles.itemDetail}>
              <img src="./Long-TermResults.png" alt="Long-Term Results" />
              <p>Long-Term Results</p>
            </div>
            <div className={styles.itemDetail}>
              <img
                src="./Reduceddependency.png"
                alt="Reduced dependency on Glasses"
              />
              <p>Reduced dependency on Glasses</p>
            </div>
          </div>
        </div>
      </div>
      {/* Why you choose us Section End */}

      {/* Questions Section Start */}
      <div className={styles.questionsContainer}>
        <h2 className={styles.qustHeading}>Frequently Asked Questions</h2>
        <h3 className={styles.f1Question}>
          <SlBookOpen className={styles.bookIcon} />
          What age do cataracts usually starts?
        </h3>
        <h3 className={styles.s2Question}>
          <SlBookOpen className={styles.bookIcon} />
          Is cataract surgery painful?
        </h3>
        <h3 className={styles.t3Question}>
          <SlBookOpen className={styles.bookIcon} />
          At what stage should cataract be removed?
        </h3>
      </div>
      {/* Questions Section End */}

      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
    </>
  );
}

export default Cataract;
