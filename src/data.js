import logo from "./assets/logo.png";
import prize from "./assets/1.png";
import honoring from "./assets/2.png";
import hardware from "./assets/3.png";
import { LogoFacebook, GlobeOutline, CallOutline } from "react-ionicons";

const images = {
  logo: {
    img: logo,
    alt: "C.R.I. FLUID SYSTEM LOGO",
  },

  prize: {
    img: prize,
    alt: "C.R.I. FLUID SYSTEM LOGO",
  },

  honoring: {
    img: honoring,
    alt: "C.R.I. FLUID SYSTEM LOGO",
  },

  hardware: {
    img: hardware,
    alt: "C.R.I. FLUID SYSTEM LOGO",
  },
};

//===================
const icons = {
  LogoFacebook,
  GlobeOutline,
  CallOutline,
};

//============
//text

const TXT = {
  heroTxt: {
    heading:
      " C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.",

    list: [
      " C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy",
      " C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.",
    ],
  },

  work: {
    paragraph:
      "INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.",
    hardware:
      " Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors",
  },

  footerTxt: {
    heading: "C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS",
    paragraph:
      " CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL",
  },
};

//============
//list
const contactList = [
  {
    icon: icons.CallOutline,
    link: "call free: 1800 200 1243",
  },
  {
    icon: icons.LogoFacebook,
    link: "www.facebook.com/cripumps",
  },
  {
    icon: icons.GlobeOutline,
    link: "www.cripumps.com",
  },
];

export { TXT, icons, images, contactList };
