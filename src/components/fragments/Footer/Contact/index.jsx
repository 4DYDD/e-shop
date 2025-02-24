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
            className="transall text-biru-500 hover:text-pink-500"
            href={socialMedia.instagram}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="py-4 mx-3 my-2 sm:my-4 flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faInstagram}
                className="block p-2 text-4xl size-8"
              />
              <span className="w-full text-base sm:text-lg">Instagram</span>
            </div>
          </a>
          <a
            className="transall text-biru-500 hover:text-green-500"
            href={socialMedia.whatsapp}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="py-4 mx-3 my-2 sm:my-4 flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="block p-2 text-4xl size-8"
              />
              <span className="w-full text-base sm:text-lg">Whatsapp</span>
            </div>
          </a>
          <a
            className="transall text-biru-500 hover:text-blue-500"
            href={socialMedia.facebook}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="py-4 mx-3 my-2 sm:my-4 flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faFacebook}
                className="block p-2 text-4xl size-8"
              />
              <span className="w-full text-base sm:text-lg">Facebook</span>
            </div>
          </a>
          <a
            className="transall text-biru-500 hover:text-black"
            href={socialMedia.twitter}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="py-4 mx-3 my-2 sm:my-4 flexc !justify-between transall">
              <FontAwesomeIcon
                icon={faTwitter}
                className="block p-2 text-4xl size-8"
              />
              <span className="w-full text-base sm:text-lg">Twitter</span>
            </div>
          </a>
        </div>

        <div className="w-full gap-1 px-6 py-6 mt-2 !text-biru-500 flexc">
          <div className="inline-block mx-auto text-sm sm:text-base">
            @copyright by{" "}
            <a href="#" className="text-blue-400 transall hover:text-blue-500">
              <b>Rombong Mamah Hasan</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
