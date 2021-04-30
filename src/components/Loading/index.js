import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import Header from "../Header";
import PaneHolder from "./PaneHolder";
import LoadingNode from "./LoadingNode";
import LoadingPane from "./LoadingPane";

const Loading = (props) => {
  const {
    appState: { message },
  } = useContext(AppContext);
  return (
    <div className="container-fluid px-0 main-form">
      <div className="row main-row">
        <div className="main-block mt-3">
          <Header />
          <LoadingNode />
          <PaneHolder
            key="pane-holder--Order"
            sectionTitle={message}
            children={<LoadingPane />}
          />
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {};

export default Loading;
