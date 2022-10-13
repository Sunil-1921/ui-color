import React from "react";
import { UiColors } from "./constants";
import { Color } from "./components";

const Colors = () => {
  return (
    <>
      <div className="container all">
        {UiColors.map((val) => {
          return (
            <>
              <div className="container color-title">
                {val.title.toUpperCase()}
              </div>
              <div className="row row-cols-lg-6 g-lg-3">
                {val.colors.map((clr, index) => (
                  <Color clr={clr} index={index} key={index} />
                ))}
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Colors;
