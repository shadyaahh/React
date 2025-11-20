import React, { useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    // run before the UI is painted
    const width = boxRef.current.offsetWidth;
    console.log("Box width:", width);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "200px",
        height: "100px",
        background: "skyblue",
        padding: "10px",
        fontSize: "20px",
      }}
    >
      Hello, useLayoutEffect!
    </div>
  );
};

export default UseLayoutEffect;