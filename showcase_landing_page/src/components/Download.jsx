import React from "react";
import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            See the source code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            see the whole build on Expo.
            <span className="underline decoration-green-500 hover:text-green-400 duration-50 ease-in-out">
              {" "}
              <a  href="https://expo.dev//accounts/abdelrahmanzaitoun39ejust/projects/nft-reactnative/builds/6d8eb282-2a38-4b2d-bcf4-2dda6bef4541">
                For free!
              </a>
            </span>
          </p>
        </div>
        <a href="https://github.com/abdelrahman830a/ProNef_ReactNative">
        <button className={styles.btnPrimary}>
          Source Code
        </button>
        </a>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download-png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
