import React from "react";
import styles from "./Lasik.module.css";
import HeaderCataractLasik from "./../Components/HeaderCataractLasik";
import Footer from "./../Components/Footer";
import { GiWallet } from "react-icons/gi";

const Lasik = () => {
  return (
    <>
      <div className={styles.bgColor}>
        {/* Header with List Item and Location and Appointment Section Start */}
        <HeaderCataractLasik />
        {/* Header with List Item and Location and Appointment Section End */}

        {/* Lasik Banner Section Start */}
        <div className={styles.lasikBanner}>
          <div className={styles.imgContainer}>
            <img src="./BannerImg.jpeg" alt="Banner Image" />
          </div>
          <div className={styles.shortDesc}>
            <h2>
              Don't Be Framed When You Can Get{" "}
              <span style={{ color: "#F50000" }}>A</span>
            </h2>
            <h2 style={{ color: "#F50000" }}>LASIK Eye Surgery.</h2>
            <h3>
              The Best Decision
              <span style={{ color: "#F50000" }}>You Could Make</span>
            </h3>
            <p style={{ fontSize: "18px" }}>Ranchhodrai Eye Hospital</p>
            <p style={{ color: "#F50000", fontSize: "14px" }}>
              The Perfect Home For LASIK
            </p>
          </div>
        </div>
        {/* Lasik Banner Section End */}

        {/* What is Lasik Section Start */}
        <div className={styles.questionAnswer}>
          <div className={styles.question}>
            <h2>What is LASIK?</h2>
          </div>
          <div className={styles.divideBorder}></div>
          <div className={styles.answer}>
            <p>
              The most popular laser eye surgery for treating myopis, hyperopia
              and astigmatism is laser- assisted in situ keratomileusis or
              LASIK.
            </p>
            <p>
              As a refractive procedure, LASIK is particularly effective at
              improving vision by precisely focusing light entering the eye onto
              the retina by altering the cornea's curve.
            </p>
            <p>
              The Demo Eye Hospital in Raipur provides{" "}
              <span style={{ fontWeight: "bold" }}>
                Lasik eye surgery in Raipur
              </span>
              using state-of-the-art equipment and recent laser technologies.
            </p>
          </div>
        </div>
        {/* What is Lasik Section End */}

        {/* Why Section Start */}
        <div className={styles.whySection}>
          <div className={styles.imgContainer}>
            <img
              src="./SwitchToBetterSide.jpeg"
              alt="Why should you opt for LASIK eye surgery ?"
            />
          </div>
          <div className={styles.whyDetails}>
            <h3>Why should you opt for LASIK eye surgery ?</h3>
            <p>
              Consider making changes to the life you have been living so far.
              Demo Eye Hospital offers the best LASIK surgery in Raipur because
              we well comprehend the hassle that wearing glasses or contacts
              causes and the debilitating impact it has on your daily life.
            </p>
            <p>
              So why not choose a simple process that is safe, well-established,
              and relied upon by millions of people worldwide and take advantage
              of the freedom from inconvenience? Indeed, we're talking about
              LASIK, a safer method of correcting vision. With a short recovery
              time and little or no pain after the treatment, it is indeed quite
              easy and secures to acquire the corrected eyesight you had hoped
              for.
            </p>
          </div>
        </div>
        {/* Why Section End */}

        {/*Below of Why Section Start */}
        <div className={styles.docPatient}>
          <div className={styles.shortDesc}>
            <p>
              As every eye is different, it is crucial to implement strict
              screening processes to prevent problems and reduce risk factors,
              no matter how uncommon they may be
            </p>
            <h3>Some general guidelines are:</h3>
          </div>
          <div className={styles.imgContainer}>
            <img src="./DoctorPatient.jpeg" alt="Patient with Doctor" />
          </div>
        </div>
        {/*Below of Why Section End */}

        {/* Like different Sectoin Start */}
        <div className={styles.youShouldOrNot}>
          {" "}
          <table>
            <colgroup>
              <col width="50%" />
              <col width="50%" />
            </colgroup>
            <thead>
              <tr>
                <th>YOU MUST BE</th>
                <th>YOU SHOULD NOT BE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18 year or older.</td>
                <td>
                  Pregnant or Lactating The hormone levels may change the shape
                  of your eye. It is best to wait till hormone levels return to
                  pre- pregnant/ pre-lactational levels.
                </td>
              </tr>
              <tr>
                <td>
                  Have experienced a stable vision for at least a year (
                  prescription change of less than 0.50 D).
                </td>
                <td>
                  Suffering from Glaucoma,Cataract,Keratoconus, and Other
                  corneal disorders.
                </td>
              </tr>
              <tr>
                <td>
                  with adeuate corneal thickness (we check this when you come
                  for a checkup)
                </td>
                <td>
                  Suffering from any systemic illness such as Rheumatoid
                  Arthritis, Sjogrens Syndrome, Systemic Lupus Erythematosus,
                  Diabetes, Hormonal disorders,etc.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Like different Sectoin End */}

        {/* Pre Operative Assessment Section Start */}
        <div className={styles.operativeAssessment}>
          <div className={styles.descSide}>
            <h2>Pre Operative Assessment</h2>
            <p>
              The following pre-operative tests would then be performed by our
              ophthalmic doctors, who provide the best LASIK surgery in
              Ahmedabad, to verify and confirm your eligibility for the LASIK
              operation.
            </p>
            <ul>
              <li>Refraction</li>
              <li>
                Corneal tomography by Pentacam which measures Anterior and
                posterior corneal contour,Corneal Pachymetry,Anterior chamber
                depth and Pupil diameter
              </li>
              <li>
                Wavefront aberrometry by OPD Scan iii(Wavefront aberrometer)
              </li>
              <li>Wetness in the eyes Related systemic examination</li>
            </ul>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="./OperativeAssessment.jpeg"
              alt="Pre Operative Assessment"
            />
          </div>
        </div>
        {/* Pre Operative Assessment Section End */}

        {/* Why Choose Section Start */}
        <div className={styles.whyChooseContainer}>
          <img
            src="./DemoEyeHospital.jpeg"
            alt="Background Image"
            className={styles.bgImage}
          />
          <div className={styles.deatils}>
            <h1>WHY SHOULD I CHOOSE DEMO EYE HOSPITAL FOR LASIK ?</h1>
            <div className={styles.hexagonDetailsTop}>
              <div className={styles.hexagon}>
                <p className={styles.textInHexagon}>
                  Thousand of happy Patients
                </p>
              </div>
              <div className={styles.hexagon}>
                <img
                  src="./userFiveStar.png"
                  alt="Five Star"
                  className={styles.imageInHexagon}
                />
                <p className={styles.textInHexagon}>
                  Over 22 years of experience
                </p>
              </div>
              <div className={styles.hexagon}>
                <img
                  src="./WalletCard.png"
                  alt="Wallet with Card"
                  className={styles.imageInHexagon}
                />
                <p className={styles.textInHexagon}>Affordable Eye Care</p>
              </div>
            </div>
            <div className={styles.hexagonDetailsBottom}>
              <div className={styles.hexagon}>
                <img
                  src="./BatchStar.png"
                  alt="Star Batch"
                  className={styles.imageInHexagon}
                />
                <p className={styles.textInHexagon}>
                  International Standards of patient safety and care{" "}
                </p>
              </div>
              <div className={styles.hexagon}>
                <img
                  src="./TVWave.png"
                  alt="TV Wave"
                  className={styles.imageInHexagon}
                />
                <p className={styles.textInHexagon}>
                  Wavefront Guided Lasik technology
                </p>
              </div>
            </div>
            <div className={styles.causesSymptoms}>
              <div className={styles.details}>
                <h2>Causes</h2>
                <ul>
                  <li>Eye injuries</li>
                  <li>Short or long eyeball</li>
                  <li>Aging of the eye lens</li>
                  <li>Curved or flattened cornea</li>
                </ul>
              </div>
              <div className={styles.details}>
                <h2>Symptoms</h2>
                <ul>
                  <li>Double vision </li>
                  <li>Blurry vision</li>
                  <li>Squinting and strain in the eyes</li>
                  <li>Inability to see closer or farby objects or both</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Section End */}

        {/* Book Free Consultation Section Start */}
        <div className={styles.bookFreeConslt}>
          <div className={styles.whenSurgery}>
            <h2>
              When to go for surgery? What would be the complication if not
              operated?
            </h2>
            <p>
              1 ) IF your reading glasses prescription is +1,+1.5 or 2 , 2 )
              Ideal age for laser correction is between 18 to 40 years, 3 )
              Prescriptions for Glasses have been stable for years. Lasik
              surgery is usually completed in 30 minutes , Eye surgeon uses a
              small blade for cutting a laser to cut a small hinged flap away
              from the front of your eye. Since Lasik is cosmetic surgery, if
              not done usually there is no complication.
            </p>
          </div>
          <div className={styles.formBookFreeConsult}>
            <h2>Book free consultation</h2>
            <form>
              <div className={styles.twoInput}>
                <fieldset>
                  <legend>Name</legend>
                  <input type="text" name="name" />
                </fieldset>
                <fieldset>
                  <legend>Phone Number</legend>
                  <input type="text" name="name" />
                </fieldset>
              </div>
              <fieldset>
                <legend>Location</legend>
                <input type="text" name="location" />
              </fieldset>
              <div className={styles.submitBtn}>
                <p>
                  By proceeding to submit, you agree to our{" "}
                  <span style={{ color: "#20A0D8", cursor: "pointer" }}>
                    Terms & Conditions
                  </span>
                </p>
                <button type="submit">Request call back</button>
              </div>
            </form>
          </div>
        </div>
        {/* Book Free Consultation Section End */}

        {/* Specialists Doctors Section Start */}
        <div className={styles.speacilistDoctor}>
          <h1>Our Specialists</h1>
          <div className={styles.doctorsDetails}>
            <div className={styles.drDetails}>
              <div className={styles.imgName}>
                <div className={styles.imgContainer}>
                  <img src="./DoctorIcon.png" alt="Doctor" />
                </div>
                <div className={styles.nameOther}>
                  <h3>Dr Usha</h3>
                  <p className={styles.qualification}>M.B.B.S ,M.S</p>
                  <p className={styles.experience}>10 Years Overall</p>
                </div>
              </div>
              <button>Book Free consultation</button>
            </div>
            <div className={styles.drDetails}>
              <div className={styles.imgName}>
                <div className={styles.imgContainer}>
                  <img src="./DoctorIcon.png" alt="Doctor" />
                </div>
                <div className={styles.nameOther}>
                  <h3>Dr Raghu</h3>
                  <p className={styles.qualification}>M.B.B.S ,M.S</p>
                  <p className={styles.experience}>14 Years Overall</p>
                </div>
              </div>
              <button>Book Free consultation</button>
            </div>
            <div className={styles.drDetails}>
              <div className={styles.imgName}>
                <div className={styles.imgContainer}>
                  <img src="./DoctorIcon.png" alt="Doctor" />
                </div>
                <div className={styles.nameOther}>
                  <h3>Dr Sirish Nelivigi</h3>
                  <p className={styles.qualification}>M.B.B.S ,M.S</p>
                  <p className={styles.experience}>10 Years Overall</p>
                </div>
              </div>
              <button>Book Free consultation</button>
            </div>
          </div>
        </div>
        {/* Specialists Doctors Section End */}

        {/* Footer Section Start */}
        <Footer />
        {/* Footer Section End */}
      </div>
    </>
  );
};

export default Lasik;
