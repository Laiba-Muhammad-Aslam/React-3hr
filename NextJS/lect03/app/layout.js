// Traditional way 
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "./footer/page";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Facebook - Connect with the world",
//   description: "Facebook helps you connect with the world",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">

//       <body className={inter.className}>
//         <Navbar />
//         <div className="container max-w-[60rem] mx-auto my-5 min-h-screen">

//         {children}
//         </div>
//         <Footer/>
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect with the world",
  description: "This is facebook and we can connect with the world using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="container mx-auto min-h-[85vh]">
          {children}
        </div>
        
      </body>
    </html>
  );
}