// import React from "react";
// import { Link } from "react-router-dom";
// import { BiHeart } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
// import { HiMenuAlt1 } from "react-icons/hi";
// import { useState } from "react";
// function Navbar() {
//   const [toggle, setToggle] = useState(false);

//   function openMenu() {
//     setToggle(true);
//   }
//   function closeMenu() {
//     setToggle(false);
//   }
//   return (
//     <>
//       <div className="flex items-center justify-between p-8 lg:flex-row bg-[#7E8F90] text-white">
//         <div>
//           <a href="#" className="font-mono text-4xl  flex items-center">
//             <BiHeart />
//             NourishNow
//           </a>
//         </div>
//         <div className="space-x-4">
//           <div className=" hidden  lg:block space-x-2">
//             <Link
//               to="/"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Home
//             </Link>
//             <Link
//               to="/donate"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Donate
//             </Link>
//             <Link
//               to="/events"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Events
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               Contact US
//             </Link>
//             <Link
//               to="/faqs"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               FAQs
//             </Link>
//             <Link
//               to="/signin"
//               className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
//             >
//               SignIn
//             </Link>
//           </div>
//           <div className="ssm:block lg:hidden">
//             {toggle ? (
//               <AiOutlineClose
//                 onClick={closeMenu}
//                 size={30}
//                 className="cursor-pointer"
//               />
//             ) : (
//               <HiMenuAlt1 onClick={openMenu} size={30} />
//             )}
//           </div>
//         </div>
//       </div>
//       <div>
//         {toggle ? (
//           <div className="lg:hidden flex justify-between ml-10">
//             <ul>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/donate">Donate</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/events">Events</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/faqs">FAQs</Link>
//               </li>
//               <li className="text-xl mb-2 cursor-pointer">
//                 <Link to="/signin">SignIn</Link>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { useCookies } from "react-cookie"; 
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [cookies] = useCookies(["user"]); 

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }
  return (
    <>
      <div className="flex items-center justify-between p-8 lg:flex-row bg-[#7E8F90] text-white">
        <div>
          <a href="#" className="font-mono text-4xl  flex items-center">
            <BiHeart />
            NourishNow
          </a>
        </div>
        <div className="space-x-4">
          <div className=" hidden  lg:block space-x-2">
            <Link
              to="/"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Home
            </Link>
            <Link
              to="/donate"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Donate
            </Link>
            <Link
              to="/events"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Contact US
            </Link>
            <Link
              to="/faqs"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              FAQs
            </Link>
            <Link
              to="/signin"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              SignIn
            </Link>
            {cookies.user && (
              <Link
                to="/profile"
                className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
              >
                Profile
              </Link>
            )}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="cursor-pointer"
              />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} />
            )}
          </div>
        </div>
      </div>
      <div>
        {toggle ? (
          <div className="lg:hidden flex justify-between ml-10">
            <ul>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/donate">Donate</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/events">Events</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/signin">SignIn</Link>
              </li>
              {cookies.user && ( // Conditionally render Profile link
                <li className="text-xl mb-2 cursor-pointer">
                  <Link to="/profile">Profile</Link>
                </li>)}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Navbar;
