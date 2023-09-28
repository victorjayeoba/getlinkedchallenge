import "./globals.css";

import Image from "next/image";
import Hero from "./components/Hero";
import Overview01 from "./components/Overview01";
import Overview02 from "./components/Overview02";
import Overview03 from "./components/Overview03";
import Faqs from "./components/Faqs";
import Timeline from "./components/Timeline";
import PrizesRewards from "./components/PrizesRewards";
import PartnersSponser from "./components/PartnersSponser";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
// style={{ fontFamily: "__clashdisplay_10f617" }}
export default function Home() {
  return (
    <>
      <Hero />
      <Overview01 />
      <Overview02 />
      <Overview03 />
      <Faqs />
      <Timeline />
      <PrizesRewards />
      <PartnersSponser />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
// git push -f origin main  https://github.com/victorjayeoba/getlinked.git
