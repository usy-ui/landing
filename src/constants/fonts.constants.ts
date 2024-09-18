import { JetBrains_Mono, Poppins, Lato } from "next/font/google";

export const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const fontJetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const fontOswald = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
