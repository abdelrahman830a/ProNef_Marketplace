import { Download, SectionWrapper, Features } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty Gateway NFTs. Start Selling Now!"
        description="Nifty Gateway is a marketplace for NFTs. It is a platform where you can buy, sell, and store your NFTs. It is a platform where you can buy, sell, and store your NFTs."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface for NFT Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth consistent animations and transitions."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is build using Expo, which rund natively on all users'devices. Easy way to deliver your app to the world."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase your NFTs"
        description="The app contains two screens. The first screen is the home screen, featuring all NFTs. The second screen is the profile screen where you can see all the NFTs that you have bought."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold text-green-500 font-bold underline">Zaitoun</span>
        </p>
      </div>
    </>
  );
};

export default App;
