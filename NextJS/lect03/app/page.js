// Traditional way 

// 'use client'
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div className="hidden  translate-x-[0%] translate-x-[100%] translate-x-[200%]">
//     <div className="slider bg-red-500 overflow-hidden flex ">
//       <img className="" src="http://www.menucool.com/slider/prod/image-slider-1.jpg" alt="" />
//       <img className="" src="http://www.menucool.com/slider/prod/image-slider-2.jpg" alt="" />
//       <img className="" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
//     </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}
