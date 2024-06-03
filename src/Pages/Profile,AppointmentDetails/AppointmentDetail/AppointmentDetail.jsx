import styles from "./AppointmentDetail.module.css";
import { TopOfHeader } from "../../Components/TopOFHeader";
import { FiUser } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";

function AppointmentDetail() {
  return (
    <>
      {/* Header Section Start */}
      <TopOfHeader />
      {/* Header Section End */}

      {/* Current Apppointment Booked Section Start */}
      <div className={styles.appointment}>
        <div className={styles.locationDoctor}>
          <h1>Appointment Booked !</h1>
          <h4>You will receive a confirmation mail shortly.</h4>
          <hr className={styles.divider} />
          <div className={styles.location}>
            <div className={styles.locationDetails}>
              <p className={styles.center}>Test Centre:</p>
              <p className={styles.clinic}>Express Clinic:</p>
              <p className={styles.actualLocation}>
                KDPF, Phase-ll, Kukuhad Pali, hydrabad.
              </p>
              <div className={styles.sample}>
                Sample will be collected from home
              </div>
            </div>
            <button>View Location</button>
          </div>
          <div className={styles.bookDoctor}>
            <div className={styles.doctor}>
              <p className={styles.bookHeading}>Booked For</p>
              <p className={styles.docName}>
                <FiUser /> Dr.Ashok V -B
              </p>
              <p className={styles.docName}>
                <FiUser /> Dr.Chandu Thallapalli
              </p>
            </div>
            <div className={styles.bookId}>
              <p className={styles.bookHeading}>Booked ID</p>
              <p className={styles.bId}>EKAPT483RNB</p>
              <p className={styles.bId}>EKAPT486750</p>
            </div>
          </div>
          <div className={styles.dateTime}>
            <div className={styles.dateTimeDetails}>
              <p className={styles.dateTimeHeading}>Date & Time</p>
              <p className={styles.timeDate}>
                {" "}
                <IoCalendarClearOutline style={{ padding: "0 4px" }} />
                6:00 AM Sat, 9 Feb 2023
              </p>
            </div>
            <button>Reschedule</button>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.pricingDetails}>
            <h3 className={styles.headingPrice}>Booking Details</h3>
            <hr className={styles.divider} />
            <p className={styles.testPackages}>Packages / Tests Added</p>
            <table>
              <tbody>
                <tr>
                  <td>Cold and Fever</td>
                  <td>Rs. 1700/-</td>
                </tr>
                <tr>
                  <td>Cold and Fever</td>
                  <td>Rs. 2800/-</td>
                </tr>
              </tbody>
            </table>
            <hr className={styles.divider} />
            <table>
              <tbody>
                <tr>
                  <td>Home Collection</td>
                  <td>Rs. 150/-</td>
                </tr>
                <tr>
                  <td>Deduction from Wallet</td>
                  <td>Rs. 1438/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.totalAmount}>
            <h3>Total Amount Paid</h3>
            <h3>Rs. 6250/-</h3>
          </div>
          <div className={styles.helpChat}>
            <FiUser className={styles.userIcon} />
            <div className={styles.details}>
              <p style={{ fontWeight: "600" }}>We can help you</p>
              <p style={{ fontWeight: "500" }}>
                Call us +91 838-678-3546 Chat With out Customer Support Them
              </p>
            </div>
            <button>Chat With us</button>
          </div>
        </div>
      </div>
      {/* Current Apppointment Booked Section End */}

      <h1 className={styles.previousHeading}>
        Previously Booked Appointments !
      </h1>

      {/* Previously Appointments Booked Section Start */}
      <div className={styles.appointment}>
        <div className={styles.locationDoctor}>
          <h1>Previous Appointment </h1>
          <h4>You will receive a confirmation mail shortly.</h4>
          <hr className={styles.divider} />
          <div className={styles.location}>
            <div className={styles.locationDetails}>
              <p className={styles.center}>Test Centre:</p>
              <p className={styles.clinic}>Zaveri Clinic:</p>
              <p className={styles.actualLocation}>vaishali nagar, Nagpur.</p>
              <div className={styles.sample}>
                Sample will be collected from home
              </div>
            </div>
            <button>View Location</button>
          </div>
          <div className={styles.bookDoctor}>
            <div className={styles.doctor}>
              <p className={styles.bookHeading}>Booked For</p>
              <p className={styles.docName}>
                <FiUser /> Dr.Ashok V -B
              </p>
              <p className={styles.docName}>
                <FiUser /> Dr.Chandu Thallapalli
              </p>
            </div>
            <div className={styles.bookId}>
              <p className={styles.bookHeading}>Booked ID</p>
              <p className={styles.bId}>EKAPT483JKB</p>
              <p className={styles.bId}>EKAPT486546</p>
            </div>
          </div>
          <div className={styles.dateTime}>
            <div className={styles.dateTimeDetails}>
              <p className={styles.dateTimeHeading}>Date & Time</p>
              <p className={styles.timeDate}>
                {" "}
                <IoCalendarClearOutline style={{ padding: "0 4px" }} />
                6:00 AM Sat, 9 Feb 2023
              </p>
            </div>
            <button>Reschedule</button>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.pricingDetails}>
            <h3 className={styles.headingPrice}>Booking Details</h3>
            <hr className={styles.divider} />
            <p className={styles.testPackages}>Packages / Tests Added</p>
            <table>
              <tbody>
                <tr>
                  <td>Cold and Fever</td>
                  <td>Rs. 1200/-</td>
                </tr>
                <tr>
                  <td>Cold and Fever</td>
                  <td>Rs. 2300/-</td>
                </tr>
              </tbody>
            </table>
            <hr className={styles.divider} />
            <table>
              <tbody>
                <tr>
                  <td>Home Collection</td>
                  <td>Rs. 150/-</td>
                </tr>
                <tr>
                  <td>Deduction from Wallet</td>
                  <td>Rs. 1238/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.totalAmount}>
            <h3>Total Amount Paid</h3>
            <h3>Rs. 5250/-</h3>
          </div>
          <div className={styles.helpChat}>
            <FiUser className={styles.userIcon} />
            <div className={styles.details}>
              <p style={{ fontWeight: "600" }}>We can help you</p>
              <p style={{ fontWeight: "500" }}>
                Call us +91 838-678-3546 Chat With out Customer Support Them
              </p>
            </div>
            <button>Chat With us</button>
          </div>
        </div>
      </div>
      {/* Previously Appointments Booked Section End */}
    </>
  );
}

export default AppointmentDetail;
