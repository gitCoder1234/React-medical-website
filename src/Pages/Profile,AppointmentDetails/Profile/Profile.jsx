import Footer from "../../Components/Footer";
import { TopOfHeader } from "../../Components/TopOFHeader";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <>
      {/* Header Section Start */}
      <TopOfHeader />
      {/* Header Section End */}

      {/* Profile Section Start */}
      <div className={styles.profile}>
        <h2 className={styles.pageHeading}>YOUR PROFILE</h2>
        <form>
          <div className={styles.basicInfo}>
            <h3 className={styles.formHeading}>Basic information</h3>
            <hr className={styles.divider} />
            <div className={styles.basicInfoInput}>
              <div className={styles.fName}>
                <label htmlFor="fName">Full Name</label>
                <input type="text" id="fName" placeholder="Full Name" />
              </div>
              <div className={styles.birthday}>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id="birthday" />
              </div>
              <div className={styles.birthday}>
                <label htmlFor="moNumber">Mobile No.</label>
                <input type="text" id="moNumber" placeholder="9999999999" />
              </div>
            </div>
          </div>
          <div className={styles.address}>
            <h3 className={styles.formHeading}>Your Addresses</h3>
            <hr className={styles.divider} />
            <div className={styles.addressInput}>
              <label htmlFor="address1">Add Address</label>
              <input type="text" id="address1" placeholder="Address Line 1" />
              <input type="text" id="address2" placeholder="Address Line 2" />
              <button>Add</button>
            </div>
          </div>
          <div className={styles.changePassword}>
            <h3 className={styles.formHeading}>Change password</h3>
            <hr className={styles.divider} />
            <div className={styles.changePasswordInput}>
              <div className={styles.oldPass}>
                <label htmlFor="oldPass">Old password</label>
                <input
                  type="text"
                  id="oldPass"
                  placeholder="Enter old password"
                />
              </div>
              <div className={styles.newPass}>
                <label htmlFor="newPass">New Password</label>
                <input
                  type="text"
                  id="newPass"
                  placeholder="Enter new password"
                />
              </div>
              <div className={styles.reNewPass}>
                <label htmlFor="reNewPass">New password</label>
                <input
                  type="text"
                  id="reNewPass"
                  placeholder="Re-type new password"
                />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.updateBtn}>Update Password</button>
              <button className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
      {/* Profile Section End */}

      {/* Enquire Now Section Start */}
      <div className={styles.enquireNow}>
        <img src="./PlanningLadyDoctor.png" alt="Lady Doctor" />
        <div className={styles.para}>
          <p className={styles.planning}>
            Planning for a surgery? Or have surgery related queries?
          </p>
          <p className={styles.anyTime}>
            Get help with best hospitals/doctors, Insurance/cashless assistance
            and 24x7 support
          </p>
        </div>
        <button>Enquire Now</button>
      </div>
      {/* Enquire Now Section End */}

      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
    </>
  );
}

export default Profile;
