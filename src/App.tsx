import React from "react";

//COMPS
import SearchBox from "./components/SearchBox";

//LAYOUTS
import Navbar from "./layouts/Navbar";
import Wrapper from "./layouts/Wrapper";

const App: React.FC = () => {
  return (
    <div id="main-cont">
      <Navbar />
      <Wrapper>
        <SearchBox />
      </Wrapper>
      <div id="test">Ad Placement</div>
    </div>
  );
};

export default App;
