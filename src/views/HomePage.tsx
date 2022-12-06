import React, { Fragment } from "react";

//COMPS
import SearchBox from "../components/SearchBox";
import LeaderBox from "../components/LeaderBox";

//LAYOUTS
import Wrapper from "../layouts/Wrapper";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Wrapper>
        <SearchBox />
      </Wrapper>
      <Wrapper>
        <LeaderBox />
      </Wrapper>
    </Fragment>
  );
};

export default HomePage;
