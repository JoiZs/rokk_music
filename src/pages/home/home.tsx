import React from "react";
import Translate from "../../utils/translate";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="text-white flex justify-center items-center h-full">
      <Translate>Home</Translate>
    </div>
  );
};

export default Home;
