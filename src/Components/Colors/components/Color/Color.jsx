import React from "react";
import toast from "react-hot-toast";

const Color = (props) => {
  const copyColor = (e) => {
    let color = e.target.innerHTML;
    navigator.clipboard.writeText(color);
    toast.success(`Copied to clipboard ${color}`);
  };

  return (
    <>
      <div className="col" onClick={copyColor}>
        <div className="p-3 color" style={{ backgroundColor: props.clr }}>
          {props.clr}
        </div>
      </div>
    </>
  );
};

export default Color;
