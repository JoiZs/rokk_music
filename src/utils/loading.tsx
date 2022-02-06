import gsap from "gsap";
import React, { useEffect } from "react";

interface Props {}

const Loading: React.FC<Props> = () => {
  useEffect(() => {
    gsap
      .fromTo(
        "#loadingLogo path",
        { opacity: 0, rotate: 10, fill: "#000000" },
        { opacity: 1, delay: (i) => i * 0.2, rotate: 0, fill: "#ff6702" }
      )
      .then(() => {
        gsap.fromTo("#loadingtext", { opacity: 0 }, { opacity: 1 });
      });
  }, []);
  return (
    <div className="flex h-screen justify-center bg-black items-center flex-col">
      <Logo />
      <span
        id="loadingtext"
        className="uppercase animate-pulse tracking-widest text-orange-600 opacity-0"
      >
        Loading
      </span>
    </div>
  );
};

export default Loading;

const Logo = () => (
  <svg
    id="loadingLogo"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="100.000000pt"
    height="100.000000pt"
    viewBox="0 0 180.000000 350.000000"
    preserveAspectRatio="xMidYMid meet"
    strokeDashoffset={0}
  >
    <g
      transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
      fill="#000"
      stroke="0"
    >
      <path
        d="M17 2103 c-4 -3 -7 -258 -7 -565 0 -477 2 -563 15 -588 11 -22 48
 -46 158 -101 90 -45 150 -70 160 -66 16 6 17 52 17 567 0 484 -2 565 -15 591
 -12 23 -46 45 -155 99 -137 68 -160 77 -173 63z"
      />
      <path
        d="M1605 1782 c-96 -50 -135 -76 -152 -101 l-23 -34 0 -694 c0 -640 1
 -694 17 -700 27 -11 197 82 239 130 46 54 79 119 93 185 16 77 15 1254 -1
 1270 -20 20 -38 14 -173 -56z"
      />

      <path
        d="M487 1403 c-4 -3 -7 -151 -7 -327 0 -286 2 -325 18 -356 14 -30 38
 -46 164 -110 125 -64 148 -72 162 -61 14 12 16 52 16 333 0 276 -2 325 -16
 355 -15 30 -36 44 -155 104 -132 65 -167 78 -182 62z"
      />
      <path
        d="M1129 1215 c-70 -36 -136 -76 -148 -91 -20 -26 -21 -37 -21 -301 0
 -224 3 -275 14 -279 21 -8 290 131 315 162 20 26 21 37 21 300 l0 274 -27 -1
 c-16 0 -85 -29 -154 -64z"
      />
      <path
        d="M21 781 c-10 -7 -12 -35 -9 -127 3 -105 7 -126 32 -176 52 -109 87
 -133 433 -306 l314 -157 102 0 103 0 133 65 c187 91 181 82 181 291 0 148 -2
 170 -16 176 -11 4 -87 -28 -201 -85 -101 -51 -190 -92 -198 -92 -8 0 -204 94
 -435 210 -231 116 -421 210 -422 210 -2 0 -9 -4 -17 -9z"
      />
    </g>
  </svg>
);
