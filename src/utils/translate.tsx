import React from "react";
import { useTranslation } from "react-i18next";

interface Prop {
  children: string;
}

const Translate: React.FC<Prop> = ({ children }) => {
  const { t } = useTranslation();
  return <span>{t(children)}</span>;
};

export default Translate;
