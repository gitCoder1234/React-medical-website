import styles from "../jobs.module.css";
import { TopOfHeader } from "./../../../Components/TopOFHeader";
import BannerForJobsPage from "./../BannerForJobsPage";
import Footer from "./../../../Components/Footer";
import KeepMePosted from "../KeepMePosted";

function Jobs2() {
  return (
    <>
      {/* Header Section Start */}
      <TopOfHeader />
      {/* Header Section End */}

      {/* Banner Section Start */}
      <BannerForJobsPage />
      {/* Banner Section End */}

      {/* Job Description Section Start */}
      <div className={styles.jobDesc}>
        <h3 className={styles.jobTitle}>Registered Nurse (RN)</h3>
        <div className={styles.locationTiming}>
          <span>Delhi, India</span>
          <span>Full-Time</span>
        </div>
        <ul>
          <li>Location: [Delhi]</li>
          <li>
            Description: We are seeking a compassionate and skilled Registered
            Nurse to join our clinical team. Responsibilities include
            administering medications, assisting with procedures, providing
            patient education, and coordinating patient care.
          </li>
          <li>
            Requirements:
            <ul>
              <li>Valid RN license in [State]</li>
              <li>CPR certification</li>
              <li>Previous experience in a clinical setting preferred</li>
            </ul>
          </li>
        </ul>
        <button>Apply</button>
      </div>
      {/* Job Description Section End */}

      {/* Keep Me Posted Section Start */}
      <KeepMePosted />
      {/* Keep Me Posted Section End */}

      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
    </>
  );
}

export default Jobs2;
