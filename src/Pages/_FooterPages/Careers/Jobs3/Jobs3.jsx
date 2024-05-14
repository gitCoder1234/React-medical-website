import styles from "../jobs.module.css";
import { TopOfHeader } from "./../../../Components/TopOFHeader";
import BannerForJobsPage from "./../BannerForJobsPage";
import KeepMePosted from "./../KeepMePosted";
import Footer from "./../../../Components/Footer";

function Jobs3() {
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
        <h3 className={styles.jobTitle}>Medical Assistant</h3>
        <div className={styles.locationTiming}>
          <span>Bengaluru, Karnataka, India</span>
          <span>Full-Time</span>
        </div>
        <ul>
          <li>Location: [Bengaluru, Karnataka, India]</li>
          <li>
            Description: We are seeking a detail-oriented and patient-focused
            Medical Assistant to join our healthcare team. Responsibilities
            include taking patient vitals, assisting with exams, preparing
            treatment rooms, and maintaining medical records.
          </li>
          <li>
            Requirements:
            <ul>
              <li>Completion of a Medical Assistant program</li>
              <li>Certified Medical Assistant (CMA) preferred</li>
              <li>Excellent organizational and multitasking skills</li>
            </ul>
          </li>
          <li>
            Benefits:
            <ul>
              <li>Competitive salary</li>
              <li>Health insurance benefits</li>
              <li>Continuing education opportunities</li>
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

export default Jobs3;
