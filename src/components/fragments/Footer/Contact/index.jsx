import React from "react";

import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function index() {
  const socialMedia = {
    instagram: "#",
    whatsapp: "#",
    facebook: "#",
    twitter: "#",
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-5 text-xs text-center flexc text-biru-500 md:text-base">
        <p>
          <span className="font-bold">KUNJUNGI KAMI DI :</span>
          <br />
          <span className="block mt-1">
            Komplek Budair Permai Blok B9 No.18
          </span>
          <span>Sungai Jingah, Kec. Banjarmasin Utara</span>
        </p>
      </div>
      <div className="flex-col flexc">
        <div className="grid grid-cols-2 sm:grid-cols-4 h-[100%]">
          <Link
            to="myDashboard"
            smooth={true}
            duration={300}
            className="py-4 mx-3 my-2 transall text-biru-400 !duration-200 hover:text-pink-500 sm:my-4"
            href={socialMedia.instagram}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faInstagram}
                className="block p-2 size-6 md:size-8 lg:size-9"
              />
              <span className="w-full text-sm md:text-lg">Instagram</span>
            </div>
          </Link>
          <Link
            to="myDashboard"
            smooth={true}
            duration={300}
            className="py-4 mx-3 my-2 transall text-biru-400 !duration-200 hover:text-green-500 sm:my-4"
            href={socialMedia.whatsapp}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="block p-2 size-6 md:size-8 lg:size-9"
              />
              <span className="w-full text-sm md:text-lg">Whatsapp</span>
            </div>
          </Link>
          <Link
            to="myDashboard"
            smooth={true}
            duration={300}
            className="py-4 mx-3 my-2 transall text-biru-400 !duration-200 hover:text-blue-500 sm:my-4"
            href={socialMedia.facebook}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faFacebook}
                className="block p-2 size-6 md:size-8 lg:size-9"
              />
              <span className="w-full text-sm md:text-lg">Facebook</span>
            </div>
          </Link>
          <Link
            to="myDashboard"
            smooth={true}
            duration={300}
            className="py-4 mx-3 my-2 transall text-biru-400 !duration-200 hover:text-black sm:my-4"
            href={socialMedia.twitter}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="block p-2 size-6 md:size-8 lg:size-9"
              />
              <span className="w-full text-sm md:text-lg">X-Twitter</span>
            </div>
          </Link>
        </div>

        <div className="w-full gap-1 px-6 py-6 mt-2 !text-biru-400 !duration-200 flexc">
          <div className="inline-block mx-auto text-sm sm:text-base">
            @copyright by{" "}
            <Link
              to="myDashboard"
              smooth={true}
              duration={300}
              className="text-blue-400 cursor-pointer transall hover:text-blue-500"
            >
              <b>Rombong Mamah Hasan</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
