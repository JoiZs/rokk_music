import React, { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Popover, Transition } from "@headlessui/react";
import Translate from "../../utils/translate";
import { Link } from "react-router-dom";

const userInfo = {
  username: "Admin",
  type: "normal",
  profile:
    "https://i.pinimg.com/originals/4b/00/b8/4b00b8ac5f3d44aa272f3e8eea5e1e97.jpg",
};

const Profile: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-3 text-gray-200">
      {userInfo.type === "premium" ? (
        "Premium"
      ) : (
        <Link
          className="text-sm text-orange-600 py-2 px-3 border-gray-600 border-2 rounded-full"
          to="/"
        >
          <Translate>Upgrade</Translate>
        </Link>
      )}
      <div className="flex flex-row justify-end items-center relative w-16 border-gray-600 border-2 rounded-full">
        <img
          className="h-10 w-10 absolute rounded-full brightness-75 -left-1"
          src={userInfo.profile}
          alt=""
        />

        <Popover className="py-1.5 flex items-center">
          <Popover.Button className="outline-none">
            <IoIosArrowDown className="mx-2 " />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute z-20 w-28 top-12 right-0">
              <div className="grid grid-cols-1 text-xs px-2 py-1 bg-gray-700 rounded-md">
                <Link className="hover:bg-gray-600 p-2 rounded" to="/">
                  <Translate>Profile</Translate>
                </Link>
                <Link className="hover:bg-gray-600 p-2 rounded" to="/">
                  <Translate>Account</Translate>
                </Link>
                <Link className="hover:bg-gray-600 p-2 rounded" to="/">
                  <Translate>Settings</Translate>
                </Link>
                <Link className="hover:bg-gray-600 p-2 rounded" to="/">
                  <Translate>Log Out</Translate>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Profile;
