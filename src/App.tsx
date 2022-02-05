import React from "react";
import CurrentsongCtx from "./contexts/currentsong";
import Main from "./layout/main";

const App: React.FC = () => {
  return (
    <CurrentsongCtx>
      <div className="App bg-gray-900">
        <Main />
      </div>
    </CurrentsongCtx>
  );
};

export default App;
