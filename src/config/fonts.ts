import { Dekko, Special_Elite, Playfair_Display, Merriweather, Mulish } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dekko = Dekko({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dekko",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-merriweather",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mulish",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special-elite",
});



const fonts = {
  dekko: dekko.className,
  specialElite: specialElite.className,
  playfair: playfair.className,
  merriweather: merriweather.className,
  mulish: mulish.className,
};


export default fonts;
