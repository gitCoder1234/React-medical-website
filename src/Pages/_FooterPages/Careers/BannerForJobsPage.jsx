import React from "react";
import styles from "./BannerForJobsPage.module.css";

const BannerForJobsPage = () => {
  return (
    <>
      <div className={styles.banner}>
        <h1>Jobs at Demo</h1>
        <button>View 8 Openings</button>
      </div>
      <div className={styles.careersWelcome}>
        <h3>
          Welcome to our Careers section. Please review the positions we are
          currently hiring for and apply to the ones that interest you.
        </h3>
      </div>
    </>
  );
};

export default BannerForJobsPage;
