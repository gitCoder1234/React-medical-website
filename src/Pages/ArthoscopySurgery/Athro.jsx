import styles from "./Athro.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { PiGreaterThanBold } from "react-icons/pi";

import image1 from "../../../public/logo.png";
import image2 from "../../../public/artho-img1.png";
import image3 from "../../../public/artho-img2.jpeg";
import image4 from "../../../public/img-4.png";
import image5 from "../../../public/artho-img3.jpeg";

import image6 from "../../../public/img-6.png";
import image7 from "../../../public/img-7.png";

import image8 from "../../../public/img-8.png";
import image9 from "../../../public/profileLogo.png";

import { FaChevronDown } from "react-icons/fa";

function Athro() {

  return (
    <div>

      <div className={styles.artroLogo}>
        <img src={image1} alt="" />
      </div>

      <div className={styles.arthodemopart}>
        <img src={image9} alt="" />
        <p id={styles.arthodemoparttext1}>My Demo Benefits</p>
        <p id={styles.arthodemoparttext2}>Personal Account</p>
      
        <span><FaChevronDown /> </span> 

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

      <div className={styles.arthonavigation}>
        <Link to={"/surgeryCare"}>
          <span id={styles.arthonavigationtext0}> Home </span>{" "}
        </Link>
        <span id={styles.arthonavigationicon}>
          <PiGreaterThanBold />{" "}
        </span>
        <span id={styles.arthonavigationtext1}> Arthroscopy </span>
      </div>

 

      <div className={styles.navappointment}>
        <p id={styles.navappointmenttext1}>BOOK APPOINTMENT </p>
        <p id={styles.navappointmenticon}>
          <FaArrowRight />
        </p>{" "}
      </div> 

       <div className={styles.athrocontent1}>
        <img src={image2} alt="" />
        <p>Arthroscopy</p>
        <img src={image2} alt="" />
      </div>

      <div className={styles.athrocontent2}>
        <p id={styles.athrocontent2text0}>What is Arthroscopy ?</p>

        <p id={styles.athrocontent2text1}>
          Arthroscopy is a surgical procedure that orthopedic surgeons use to
          visualize and treat problems inside a joint.The word arthroscopy comes
          from two Greek words, arthro (joint) and skopein (to look). The term
          literally means (to look) within the joint.
        </p>

        <p id={styles.athrocontent2text2}>
          The doctor may recommend it if you have inflammation in a joint, have
          injured a joint, or have damaged a joint over time.You can have an
          arthroscopy on any joint. Most often, it is done on the knee,
          shoulder, elbow, ankle, hip, or wrist.
        </p>

        <p id={styles.athrocontent2text3}>
          During the procedure, your doctor will insert a tool called an
          arthroscope into your joint through several small cuts to see how much
          damage is in the joint. They can also repair many injuries during
          arthroscopy.
        </p>
      </div>

      <div className={styles.athrocontent3}>
        <p id={styles.athrocontent3text1}>What is an arthroscope?</p>
        <p id={styles.athrocontent3text2}>
          An arthroscope is a small tube that is inserted into the body. It
          contains a system of lenses, a small video camera, and a light for
          viewing. The camera is connected to a monitoring system that lets a
          surgeon view the surgery while it is being done. The arthroscope is
          often used with other tools that are inserted through another cut or
          incision. These tools are used for grasping, cutting, and probing.
        </p>
        <img src={image3} alt="" />
      </div>

      <div className={styles.athrocontent4}>
        <p id={styles.athrocontent4text1}>
          What happens during arthroscopic surgery?
        </p>

        <p id={styles.athrocontent4text2}>
          Each procedure will vary. But generally, arthroscopic surgery follows
          this process:
        </p>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>You will receive a general, local, or spinal anesthetic.</p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>A small incision is made in your skin.</p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>The arthroscope is inserted through the incision.</p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>
            Other incisions may be made to introduce other small grasping,
            probing, or cutting tools.{" "}
          </p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>
            Light is transmitted via fiber optics at the end of the arthroscope.{" "}
          </p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>
            Information about the interior of the joint is transmitted to a
            screen.
          </p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>
            Corrective surgery, if needed, may be done during the initial
            diagnostic procedure.
          </p>
        </div>

        <div className={styles.athrocontent4part1}>
          <img src={image4} alt="" />
          <p>Dressings or bandages may be put on the incisions.</p>
        </div>

        <p id={styles.athrocontent4text3}>
          The small puncture wounds created by the arthroscope and probing tools
          may take several days to weeks to heal.
        </p>

        <p id={styles.athrocontent4text4}>
          Recovery time varies. But most arthroscopic surgery is done on an
          outpatient basis. This means you can go home within hours after the
          surgery. Some people get back to their normal activity in a few days
          or weeks. Athletes and other people in good physical condition may
          return to athletic activities in a few weeks, under the care of their
          healthcare provider.
        </p>
      </div>

      <div className={styles.arthocontent5}>
        <p id={styles.athrocontent5text1}>
          Conditions most frequently found with arthroscopy
        </p>

        <p id={styles.athrocontent5text2}>
          The following are the conditions most frequently discovered during an
          arthroscopic procedure:
        </p>

        <div className={styles.athrocontent2part1}>
          <img src={image4} alt="" />
          <p id={styles.athrocontent2part1text1}> Inflammation.</p>
          <p id={styles.athrocontent2part1text2}>
            This includes in the lining (synovium) of the knee, shoulder, elbow,
            wrist, or ankle
          </p>
        </div>

        <div className={styles.athrocontent2part2}>
          <img src={image4} alt="" />
          <p id={styles.athrocontent2part2text1}> Injuries.</p>
          <p id={styles.athrocontent2part2text2}>
            These include the following:
          </p>
        </div>

        <div className={styles.athrocontent2part3}>
          <div></div>

          <p>
            Rotator cuff tendon tears, impingement syndrome, and recurrent
            dislocations in the shoulder
          </p>
        </div>

        <div className={styles.athrocontent2part4}>
          <div></div>

          <p>
            Meniscal (cartilage) tears, chondromalacia (wearing or injury of
            cartilage cushion), and ACL (anterior cruciate ligament) tears with
            instability in the knee
          </p>
        </div>

        <div className={styles.athrocontent2part5}>
          <img src={image4} alt="" />
          <p id={styles.athrocontent2part5text1}>
            Pieces of loose bone or cartilage. This is particularly in the knee,
            shoulder, elbow, ankle, or wrist.{" "}
          </p>
        </div>

        <p id={styles.arthocontent5part6}>
          Always see your healthcare provider for a treatment recommendation
          based on your individual condition.
        </p>
      </div>

      <div className={styles.arthocontent6}>
        <p id={styles.arthocontent6text1}>When to Call the Doctor</p>
        <p id={styles.arthocontent6text2}>
          Complications are rare. They happen in fewer than 1 in 100 cases. If
          you do have complications, they can include infection, blood clots,
          damage to the blood vessels or nerves, and excessive bleeding or
          swelling. Instruments can also break during surgery.
        </p>

        <p id={styles.arthocontent6text3}>
          Call your doctor right away if you have any of these symptoms:
        </p>

        <div className={styles.arthocontent6part}>
          <div className={styles.athrocontent6part1}>
            <div></div>

            <p>Fever</p>
          </div>

          <div className={styles.athrocontent6part1}>
            <div></div>

            <p>Pain that gets worse </p>
          </div>

          <div className={styles.athrocontent6part1}>
            <div></div>

            <p>Severe swelling</p>
          </div>

          <div className={styles.athrocontent6part1}>
            <div></div>

            <p>Numbness or tingling </p>
          </div>

          <div className={styles.athrocontent6part1}>
            <div></div>

            <p>Discolored or smelly fluid seeping from wound</p>
          </div>
        </div>

        <img src={image5} alt="" />
      </div>

      <div className={styles.arthocontent7}>
        <p id={styles.arthocontent7text1}>Book free consultation</p>

        <input type="text" id={styles.arthocontent7text2} />
        <input type="text" id={styles.arthocontent7text3} />
        <input type="text" id={styles.arthocontent7text4} />

        <p id={styles.arthocontent7text5}>
          By proceeding to submit, you agree to our
        </p>

        <p id={styles.arthocontent7text6}>Terms & Conditions</p>

        <button id={styles.arthocontent7text7}>Request call back</button>
      </div>

      <div className={styles.arthocontent8}>
        <p id={styles.arthocontent8text1}>Our Specialists</p>
        <div className={styles.arthocontent8part1}>
          <div className={styles.arthocontent8part1content1}>
            <img src={image6} alt="" />
            <p id={styles.arthocontent8part1content1text1}>Dr. Vikrant Singh</p>
            <p id={styles.arthocontent8part1content1text2}>General Surgeon</p>
            <p id={styles.arthocontent8part1content1text3}>8 Years overall</p>

            <button>Book Free consultation</button>
          </div>

          <div className={styles.arthocontent8part1content2}>
            <img src={image7} alt="" />
            <p id={styles.arthocontent8part1content2text1}>Dr.Poornima</p>
            <p id={styles.arthocontent8part1content2text2}>M.B.B.S ,M.S</p>
            <p id={styles.arthocontent8part1content2text3}>5 Years overall</p>
            <button>Book Free consultation</button>
          </div>

          <div className={styles.arthocontent8part1content3}>
            <img src={image6} alt="" />
            <p id={styles.arthocontent8part1content3text1}>Dr Shreyas</p>
            <p id={styles.arthocontent8part1content3text2}>M.B.B.S ,M.S</p>
            <p id={styles.arthocontent8part1content3text3}>7 Years overall</p>

            <button>Book Free consultation</button>
          </div>
        </div>
      </div>

      <div className={styles.arthocontent9}>
        <p id={styles.arthocontent9text1}>Frequently Asked Questions</p>

        <div className={styles.arthocontent9part1}>
          <img src={image8} alt="" />
          <p>Is arthoscopic surgery considered major surgery?</p>
        </div>

        <div className={styles.arthocontent9part2}>
          <img src={image8} alt="" />
          <p>Will my pain completely subside?</p>
        </div>

        <div className={styles.arthocontent9part3}>
          <img src={image8} alt="" />
          <p>What to do if i have Nausea or Vomiting? </p>
        </div>

        <div className={styles.arthocontent9part4}>
          <img src={image8} alt="" />
          <p>Should i move after arthoscopic surgery?</p>
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

+        <div className={styles.footerThree}>
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

export default Athro;
