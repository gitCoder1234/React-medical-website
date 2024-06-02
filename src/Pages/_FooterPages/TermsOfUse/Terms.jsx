import styles from "./Terms.module.css";
import { Link } from "react-router-dom";

import image1 from "../../../../public/logo.png";
import image2 from "../../../../public/profileLogo.png";

function Terms() {
  return (
    <>
      <div className={styles.termlogo}>
        <img src={image1} alt="" />
      </div>

      <div className={styles.termdemopart}>
        <img src={image2} alt="" />
        <p id={styles.termdemoparttext1}>My Demo Benefits</p>
        <p id={styles.termdemoparttext2}>Personal Account</p>
      </div>

      <p id={styles.termstext}> Terms Of Use</p>

      <div className={styles.termscontent1}>
        <ol>
          <li>
            Acceptance of Terms: By using our website, you agree to comply with
            these Terms of Use. If you do not agree with any part of these
            terms, you may not access or use our website.
          </li>
          <li>
            {" "}
            Use of Content: All content on our website, including text, images,
            videos, and graphics, is for informational purposes only. It is not
            intended to be a substitute for professional medical advice,
            diagnosis, or treatment.
          </li>
          <li>
            User Conduct: You agree not to use our website for any unlawful or
            prohibited purpose. You may not engage in any activity that could
            damage, disable, or impair the functioning of our website or
            interfere with other users' enjoyment of the site.{" "}
          </li>
          <li>
            {" "}
            Privacy Policy: Our Privacy Policy governs the collection, use, and
            disclosure of personal information provided by users of our website.
            By using our website, you consent to the terms of our Privacy
            Policy.
          </li>
          <li>
            {" "}
            Intellectual Property: All intellectual property rights in the
            content and materials on our website are owned by us or our
            licensors. You may not reproduce, modify, distribute, or republish
            any content from our website without our prior written consent.
          </li>

          <li>
            {" "}
            Disclaimer of Warranties: We make no representations or warranties
            about the accuracy, reliability, completeness, or timeliness of the
            content on our website. Your use of our website is at your own risk.
          </li>
          <li>
            Limitation of Liability: In no event will we be liable for any
            damages arising out of or in connection with your use of our
            website, including any direct, indirect, incidental, consequential,
            or punitive damages.
          </li>

          <li>
            Changes to Terms: We reserve the right to update or modify these
            Terms of Use at any time without prior notice. Your continued use of
            our website after any changes indicates your acceptance of the
            updated terms.
          </li>
        </ol>

        <p>Offer :</p>

        <ol>
          <li>
            {" "}
            Promotional Offers: From time to time, we may offer promotional
            discounts, special offers, or bundled services. These offers may be
            subject to specific terms and conditions, including expiration dates
            and eligibility criteria.
          </li>

          <li>
            Redemption: To redeem an offer, you may need to present a
            promotional code or mention the offer when scheduling an appointment
            or making a purchase. Offers are valid only during the specified
            promotional period and may not be combined with other discounts or
            promotions.
          </li>
          <li>
            Limitations: Offers are subject to availability and may be limited
            to certain services or products. We reserve the right to modify or
            withdraw offers at any time without prior notice.{" "}
          </li>
        </ol>
      </div>

      <div className={styles.termscontent2}>
        <p> Refund & Cancellations Policy :</p>

        <ol>
          <li>
            Appointment Cancellations: If you need to cancel or reschedule an
            appointment, please contact us at least [insert time frame, e.g., 24
            hours] in advance. Failure to provide sufficient notice may result
            in a cancellation fee.
          </li>
          <li>
            {" "}
            Refunds: Refunds for services rendered may be provided in certain
            circumstances, such as billing errors or dissatisfaction with the
            quality of care received. Requests for refunds will be reviewed on a
            case-by-case basis.
          </li>
          <li>
            Product Returns: If you are dissatisfied with a product purchased
            from our office, you may be eligible for a refund or exchange.
            Please contact our office within [insert time frame, e.g., 14 days]
            of purchase to initiate a return.{" "}
          </li>
          <li>
            No-Show Policy: Patients who fail to show up for scheduled
            appointments without prior notice may be subject to a no-show fee.
            This fee helps offset the cost of unused appointment time and allows
            us to accommodate other patients in need of care.{" "}
          </li>
          <li>
            Refund Processing: Refunds will be processed using the original
            method of payment whenever possible. Please allow [insert time
            frame, e.g., 7-10 business days] for refunds to be credited to your
            account.{" "}
          </li>
          <li>
            Exceptions: Our refund and cancellation policy may vary depending on
            the type of service or product purchased. Please review the specific
            terms and conditions associated with each service or product for
            more information.
          </li>
        </ol>

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

      
    </>
  );
}

export default Terms;
