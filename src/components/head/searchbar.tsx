import React from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";

interface Props {}

const Searchbar: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-700 w-3/4 p-2 rounded-full flex items-center flex-row">
      <FiSearch className="text-orange-600 text-xl" />
      <input
        className="w-full text-white px-2 font-light outline-none bg-transparent"
        placeholder={t("Explore Brands, Playlists, Albums...")}
      />
    </div>
  );
};

export default Searchbar;
