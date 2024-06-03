import React from "react";
import styles from "./KeepMePosted.module.css";

const KeepMePosted = () => {
  return (
    <>
      <div className={styles.keepMePosted}>
        <h3>Couldn't find the opening you were looking for ?</h3>
        <h3>Get updates about new opportunities straight to your inbox</h3>
        <div className={styles.inputField}>
          <form>
            <input type="email" name="name" placeholder="Your email address" />
            <button>Keep me posted</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default KeepMePosted;
