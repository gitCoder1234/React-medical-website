import styles from "./Kidney.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { PiGreaterThanBold } from "react-icons/pi";

import image1 from "../../../public/kidney-1.png";
import image2 from "../../../public/kidney-2.jpeg";
import image3 from "../../../public/kidney-3.png";
import image4 from "../../../public/kidney-4.png";

import image5 from "../../../public/kid-5.png";
import image6 from "../../../public/kid-6.png";
import image7 from "../../../public/kid-7.png";
import image8 from "../../../public/kid-8.png";

import { useRef } from "react";

function Kidney() {
  const gallcontent7ref = useRef(null);

  const scrollToGallcontent7 = () => {
    gallcontent7ref.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div className={styles.kidneypage}>
      <div className={styles.navappointment} onClick={scrollToGallcontent7}>
        <p id={styles.navappointmenttext1}>BOOK APPOINTMENT </p>
        <p id={styles.navappointmenticon}>
          <FaArrowRight />
        </p>{" "}
      </div>

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

      <div className={styles.kidneynavigation}>
        <Link to={"/surgeryCare"}>
          <span> Home </span>{" "}
        </Link>
        <PiGreaterThanBold />
        <span id={styles.kidneynavigationtext1}> Lasik</span>
      </div>

      <div className={styles.kindneycontent1}>
        <p id={styles.kindneycontent1text1}>
          Kidney Stones - What you need to know
        </p>

        <p id={styles.kindneycontent1text2}>
          Kidney stones (also called renal calculi, nephrolithiasis or
          urolithiasis) are hard deposits made of minerals and salts that form
          inside your kidneys.Diet, excess body weight, some medical conditions,
          and certain supplements and medications are among the many causes of
          kidney stones. Kidney stones can affect any part of your urinary tract
          — from your kidneys to your bladder. Read to find out more.
        </p>

        <button>Book Free consultation</button>

        <p id={styles.kindneycontent1text4}>
          <FaPhoneAlt
            style={{ color: "#5350EA", marginRight: "12px", marginTop: "14px" }}
          />
          999999999999
        </p>

        <img src={image1} alt="" />
      </div>

      <div className={styles.kindneycontent2}>
        <p id={styles.kindneycontent2text1}>Condition</p>
        <img src={image2} alt="" />

        <p id={styles.kindneycontent2text2}>What are Kidney Stones</p>

        <p id={styles.kindneycontent2text3}>
          What are Kidney Stones A kidney stone is a hard object that is made
          from chemicals in the urine. Kidney stones usually originate in your
          kidneys. However, they can develop anywhere along your urinary
          tract.They usually develop between people of 15 to 50 years of age.
          view more
        </p>
      </div>

      <div className={styles.kindneycontent3}>
        <p id={styles.kindneycontent3text1}>When to consult a Doctor?</p>

        <p id={styles.kindneycontent3text2}>
          As a general rule, medical attention is required if the person
          presents with following symptoms: 1 ) Severe pain that makes sitting
          uncomfortable (Abdomen or back) 2 ) Pain along with vomiting 3 ) Pain
          with fever and chills 4 ) Blood in the urine A Doctor will then advise
          some Blood test and Diagnostic test to rule out the Kidney
          stones.Blood Test- Blood tests may reveal too much calcium or uric
          acid in your blood. Blood test results help monitor the health of your
          kidneys and may lead your doctor to check for other medical
          conditions.Ultrasound Scan-Imaging tests may show kidney stones in
          your urinary tract. High-speed or dual energy computerized tomography
          (CT) may reveal even tiny stones.
        </p>
        <img src={image3} alt="" />
      </div>

      <div className={styles.kindneycontent4}>
        <p id={styles.kindneycontent4text1}>Causes</p>
        <p id={styles.kindneycontent4text2}>Symptoms</p>

        <div className={styles.kindneycontent4part1}>
          <li>
            {" "}
            Kidney stones often have no definite, single cause, although several
            factors may increase your risk.
          </li>
          <li>
            Kidney stones form when your urine contains more crystal-forming
            substances — such as calcium, oxalate and uric acid — than the fluid
            in your urine can dilute. At the same time, your urine may lack
            substances that prevent crystals from sticking together, creating an
            ideal environment for kidney stones to form.
          </li>
        </div>

        <div className={styles.kindneycontent4part2}>
          <li>Severe pain on either side of your lower back</li>
          <li> More vague pain or stomach ache that does not go away</li>
          <li>Blood in the urine</li>
          <li> Nausea or vomiting</li>
          <li> Urine that smells bad or looks cloudy</li>
        </div>
      </div>

      <div className={styles.kindneycontent5}>
        <p id={styles.kindneycontent5text1}>When to go for surgery?</p>

        <p id={styles.kindneycontent5text2}>
          Once the ultrasound report confirm the presence of stones in Kidneys
          ,treatment is based on the size of stones in Kidneys Small sized
          stones- Most small kidney stones will not require invasive treatment.
          You may be able to pass a small stone by: 1 ) Drinking water. Drinking
          as much as 1.8 to 3.6 liters a day will keep your urine dilute and may
          prevent stones from forming. 2 ) Pain relievers. Passing a small stone
          can cause some discomfort. To relieve mild pain, your doctor may
          recommend pain relievers such as ibuprofen . 3 ) Medical therapy. Your
          doctor may give you medication to help pass your kidney stone. This
          type of medication, known as an alpha blocker, relaxes the muscles in
          your ureter, helping you pass the kidney stone more quickly and with
          less pain. 4 ) Large Sized Stones require Surgical Intervention.
          Procedures Include 1 ) Using sound waves to break up stones 2 )
          Surgery to remove very large stones in the kidney
        </p>
      </div>

      <div ref={gallcontent7ref} className={styles.kindneycontent6}>
        <p id={styles.kindneycontent6text1}>Book free consultation</p>

        <input type="text" id={styles.kindneycontent6text2} />
        <input type="text" id={styles.kindneycontent6text3} />
        <input type="text" id={styles.kindneycontent6text4} />

        <p id={styles.kindneycontent6text5}>
          By proceeding to submit, you agree to our
        </p>

        <p id={styles.kindneycontent6text6}>Terms & Conditions</p>

        <button id={styles.kindneycontent6text7}>Request call back</button>
      </div>

      <div className={styles.kindneycontent7}>
        <p id={styles.kindneycontent7text1}>Our Specialists</p>
        <div className={styles.kindneycontent7part1}>
          <div className={styles.kindneycontent7part1content1}>
            <img src={image4} alt="" />
            <p id={styles.kindneycontent7part1content1text1}>Dr Usha</p>
            <p id={styles.kindneycontent7part1content1text2}>M.B.B.S ,M.S</p>
            <p id={styles.kindneycontent7part1content1text3}>
              10 Years overall
            </p>

            <button>Book Free consultation</button>
          </div>

          <div className={styles.kindneycontent7part1content2}>
            <img src={image4} alt="" />
            <p id={styles.kindneycontent7part1content2text1}>Dr Usha</p>
            <p id={styles.kindneycontent7part1content2text2}>M.B.B.S ,M.S</p>
            <p id={styles.kindneycontent7part1content2text3}>
              10 Years overall
            </p>
            <button>Book Free consultation</button>
          </div>

          <div className={styles.kindneycontent7part1content3}>
            <img src={image4} alt="" />
            <p id={styles.kindneycontent7part1content3text1}>Dr Usha</p>
            <p id={styles.kindneycontent7part1content3text2}>M.B.B.S ,M.S</p>
            <p id={styles.kindneycontent7part1content3text3}>
              10 Years overall
            </p>

            <button>Book Free consultation</button>
          </div>
        </div>
      </div>

      <div className={styles.kindneycontent8}>
        <p id={styles.kindneycontent8text1}>Why MediBuddy Surgery Care?</p>

        <div className={styles.kindneycontent8part1}>
          <div className={styles.kindneycontent8part1content1}>
            <img src={image5} alt="" />
            <p id={styles.kindneycontent8part1content1text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.kindneycontent8part1content1text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>

          <div className={styles.kindneycontent8part1content2}>
            <img src={image6} alt="" />
            <p id={styles.kindneycontent8part1content2text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.kindneycontent8part1content2text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>

          <div className={styles.kindneycontent8part1content3}>
            <img src={image7} alt="" />
            <p id={styles.kindneycontent8part1content3text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.kindneycontent8part1content3text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
          </div>

          <div className={styles.kindneycontent8part1content4}>
            <img src={image8} alt="" />
            <p id={styles.kindneycontent8part1content4text1}>
              Enhanced Quality of Care
            </p>
            <p id={styles.kindneycontent8part1content4text2}>
              Constant support, a network of premium hospitals and top-tier
              surgeons.
            </p>
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
    </div>
  );
}

export default Kidney;
