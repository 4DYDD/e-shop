import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function index() {
  const socialMedia = {
    instagram: "#",
    whatsapp: "#",
    facebook: "#",
    twitter: "#",
  };
  // const socialMedia = {
  //   instagram: "https://www.instagram.com/nama_akun_instagram", // Ganti dengan username IG Anda
  //   whatsapp: "https://wa.me/nomor_telepon_wa", // Ganti dengan nomor WA Anda (dengan kode negara)
  //   facebook: "https://www.facebook.com/nama_akun_facebook", // Ganti dengan username/ID FB Anda
  //   twitter: "https://twitter.com/nama_akun_twitter", // Ganti dengan username Twitter Anda
  // };

  return (
    <>
      <div className="flex-col flexc">
        <div className="grid grid-cols-2 sm:grid-cols-4 h-[100%]">
          <a
            className="hover:text-red-500"
            href={socialMedia.instagram}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center px-6 py-4 mx-2 my-4 transall">
              <FontAwesomeIcon icon={faInstagram} className="mr-2 size-8" />{" "}
              Instagram
            </div>
          </a>
          <a
            className="hover:text-red-500"
            href={socialMedia.whatsapp}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center px-6 py-4 mx-2 my-4 transall">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 size-8" />{" "}
              Whatsapp
            </div>
          </a>
          <a
            className="hover:text-red-500"
            href={socialMedia.facebook}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center px-6 py-4 mx-2 my-4 transall">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 size-8" />{" "}
              Facebook
            </div>
          </a>
          <a
            className="hover:text-red-500"
            href={socialMedia.twitter}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center px-6 py-4 mx-2 my-4 transall">
              <FontAwesomeIcon icon={faTwitter} className="mr-2 size-8" />{" "}
              Twitter
            </div>
          </a>
        </div>

        <div className="w-full gap-1 px-6 py-5 mt-2 flexc">
          @copyright by{" "}
          <a href="#" className="text-blue-500">
            <b>Rombong Mamah Hasan</b>
          </a>
        </div>
      </div>
    </>
  );
}

export default index;
