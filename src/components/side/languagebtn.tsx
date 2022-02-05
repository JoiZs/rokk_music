import { Listbox, Transition } from "@headlessui/react";
import { Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import _ from "lodash";
import Gb from "flag-icons/flags/1x1/gb.svg";
import Fr from "flag-icons/flags/1x1/fr.svg";
import De from "flag-icons/flags/1x1/de.svg";
import Es from "flag-icons/flags/1x1/es.svg";
import SwitchLang from "../../utils/changeLang";
import Translate from "../../utils/translate";

interface langArrayType {
  lang: string;
  fg: string;
  i18n: string;
}

const langs: langArrayType[] = [
  { lang: "English", fg: Gb, i18n: "en-US" },
  { lang: "French", fg: Fr, i18n: "fr" },
  { lang: "Germany", fg: De, i18n: "de" },
  { lang: "Spain", fg: Es, i18n: "es" },
];

const Languagebtn = () => {
  let loadLang = localStorage.getItem("i18nextLng");

  const [selected, setSelected] = useState(
    !!loadLang
      ? langs[_.findIndex(langs, (el: langArrayType) => el.i18n === loadLang)]
      : langs[0]
  );

  return (
    <Grid
      item
      xs={12}
      className="flex p-1 justify-center text-xs text-gray-300 items-center"
    >
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-48 py-2 pl-3 pr-10 text-left border-2 border-gray-700 rounded shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75">
            <span className=" truncate flex flex-row items-center">
              <img
                src={selected.fg}
                alt=""
                className="w-4 h-4 mr-2 rounded-full"
              />
              <Translate>{selected.lang}</Translate>
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute backdrop-blur-lg w-full bottom-full overflow-auto shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {langs.map((lang, langIdx) => (
                <Listbox.Option
                  key={langIdx}
                  className={({ active }) =>
                    `${active ? "text-gray-900 bg-gray-500" : "text-gray-500"}
                          cursor-default select-none relative m-1 py-1 pl-10 pr-4`
                  }
                  value={lang}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        onClick={() => {
                          SwitchLang(lang.i18n);
                        }}
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } flex truncate flex-row`}
                      >
                        <img
                          src={lang.fg}
                          alt=""
                          className="w-4 h-4 mr-2 rounded-full"
                        />
                        <Translate>{lang.lang}</Translate>
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </Grid>
  );
};

export default Languagebtn;
