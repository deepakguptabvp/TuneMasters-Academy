import React from "react";

const Footer = () => {
  return (
    // <footer className="bg-black flex flex-col">
    //   <div className="flex p-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //     <div className="flex flex-col">
    //       <h2 className="text-white text-lg font-semibold mt-4">About Us</h2>
    //       <p className="text-sm">
    //         Music School is a premier institution dedicated to teaching the art
    //         and science of music. We nurture talent from the ground up,
    //         fostering a vibrant community of musicians.
    //       </p>
    //     </div>
    //     <div>
    //       <h2 className="text-white text-lg font-semibold mt-4">
    //         Quick Links
    //       </h2>
    //       <ul className="text-sm">
    //         <li>
    //           <a href="">Home</a>
    //         </li>
    //         <li>
    //           <a href="">About Us</a>
    //         </li>
    //         <li>
    //           <a href="">Courses</a>
    //         </li>
    //         <li>
    //           <a href="">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h2 className="text-white text-lg font-semibold mt-4">
    //         Follow Us
    //       </h2>
    //       <ul className="text-sm">
    //         <li className="hover:underline">
    //           <a href="">Facebook</a>
    //         </li>
    //         <li>
    //           <a href="">Twitter</a>
    //         </li>
    //         <li>
    //           <a href="">Instagram</a>
    //         </li>
    //         <li>
    //           <a href="">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div></div>
    //   </div>
    //   <p className="text-center text-xs p-8">© 2024 Music School. All rights reserved.</p>
    // </footer>

    <footer className="bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-2"
                alt="FlowBite Logo"
              />
              <h2 className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
                TuneMasters Academy
              </h2>
            </a>
            {/* <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 max-w-xl">
                Music School is a premier institution dedicated to teaching the
                art and science of music. We nurture talent from the ground up,
                fostering a vibrant community of musicians.
              </p> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              TuneMasters - Academy
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
