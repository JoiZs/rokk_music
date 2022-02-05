/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbuttons: React.FC = () => {
  let Location = useLocation().pathname;
  // const [prevPath, setPrevPath] = useState<string>("");
  // const [nextPath, setNextPath] = useState<string>("");

  return (
    <div className="flex items-center text-3xl text-white">
      {/* <Link to={prevPath}> */}
      <IoIosArrowRoundBack
        // onClick={}
        className="hover:bg-gray-700 mx-1 border-gray-700 cursor-pointer focus:bg-gray-600 border rounded-full"
      />
      {/* </Link> */}
      {/* <Link to={prevPath}> */}
      <IoIosArrowRoundForward
        // onClick={nextHandler}
        className="border mx-1 hover:bg-gray-700 border-gray-700 cursor-pointer focus:bg-gray-600 rounded-full"
      />
      {/* </Link> */}
    </div>
  );
};

export default Navbuttons;
