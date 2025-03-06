import Spacer from "../components/spacer";
import Hero from "../components/hero";
import ComponentHeader from "../components/componentHeader";
import FlexCol from "../components/flexCol";
import Center from "../components/center";
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse, tabs, Navigation_Config, Hero_Config, Highlight_Config, Image_Text_Full_Location, Image_Text_Full_Activities, Featured_Activities, Featured_Faq, Faq_Items, Ongoing_Events, Feb_8_Events, Feb_13_Events, Feb_14_Events, Feb_15_Events, Feb_16_Events, Feb_17_Events, Image_Text_Full_Activities_FR, Image_Text_Full_Location_FR, Ongoing_Events_FR, Feb_8_Events_FR, Feb_13_Events_FR, Feb_14_Events_FR, Feb_15_Events_FR, Feb_16_Events_FR, Feb_17_Events_FR, Featured_Activities_FR, Activities_Informational_FR, Featured_Faq_FR, Faq_Items_FR, Hero_Config_FR, Navigation_Config_FR } from "../constants/configs/site";
import ImageTextFull from "../components/imageTextFull";
import Testimonials from "../components/testimonials/testimonials";
import Navigation from "../components/navigation";
import FAQ from "../components/faq";
import BlueBanner from "../components/blueBanner";
import EventItem from "../components/eventItem";
import Text from "../components/text";
import { useContext, useState } from "react";
import Snowman from "../components/snowman";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { Context } from "../utils/context_provider";

export default function Home() {

  const { language } = useContext(Context)

  const router = useRouter()

  const [activeOngoingId, setActiveOngoingId] = useState(null);
  const [activeFeb8Id, setActiveFeb8Id] = useState(null);
  const [activeFeb13Id, setActiveFeb13Id] = useState(null);
  const [activeFeb14Id, setActiveFeb14Id] = useState(null);
  const [activeFeb15Id, setActiveFeb15Id] = useState(null);
  const [activeFeb16Id, setActiveFeb16Id] = useState(null);
  const [activeFeb17Id, setActiveFeb17Id] = useState(null);

  const handleToggleOngoing = (id) => {
    setActiveOngoingId(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb8 = (id) => {
    setActiveFeb8Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb13 = (id) => {
    setActiveFeb13Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb14 = (id) => {
    setActiveFeb14Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb15 = (id) => {
    setActiveFeb15Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb16 = (id) => {
    setActiveFeb16Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb17 = (id) => {
    setActiveFeb17Id(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <Head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
        <title>Carclick | Rent a car in minutes</title>
        <meta name='description' content="Rent a car in minutes with Carclick. The easy to use car renting platform for busy travellers that need a car on demand."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        <meta property="og:url" content={`${router.asPath}`}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={"Carclick Home"}></meta>
        <meta content="Sno-Fest" property="og:site_name"></meta>
        <meta property="og:description" content={"Rent a car in minutes with Carclick. The easy to use car renting platform for busy travellers that need a car on demand."}
        ></meta>
        <meta name="theme-color" content="#23568D"></meta>
        <meta property="og:image" content={"/images/hero.png"}></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="carclick.app"></meta>
        <meta property="twitter:url" content={`${router.asPath}`}></meta>
        <meta name="twitter:title" content="Rent a car in minutes with Carclick. The easy to use car renting platform for busy travellers that need a car on demand."></meta>
        <meta name="twitter:description" content={"Rent a car in minutes with Carclick. The easy to use car renting platform for busy travellers that need a car on demand."}></meta>
        <meta name="twitter:image" content={"/images/hero.png"}></meta>
      </Head>
      
<Navigation
          tabs={tabs}
          alert_headline={Navigation_Config.alert_headline}
          alert_hyperlink_text={Navigation_Config.alert_hyperlink_text}
          navigation_heading={Navigation_Config.navigation_heading}
          navigation_subheading={Navigation_Config.navigation_subheading}
          cta_label={Navigation_Config.cta_label}
          cta_route_to={Navigation_Config.cta_route_to}
        >
        </Navigation>

      <Hero
          heading={Hero_Config.hero_heading}
          subheading={Hero_Config.hero_subheading}
          heroImg={Hero_Config.hero_img}
          heroVid={Hero_Config.hero_vid}
          primary_button_text={Hero_Config.primary_button_text}
          primary_botton_href={Hero_Config.primary_button_href}
          secondary_button_text={Hero_Config.secondary_button_text}
          secondary_button_href={Hero_Config.secondary_button_href}
        >

        </Hero>
      
        <Footer ></Footer>
    </div>
  );
}
