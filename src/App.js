import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import ComponentToPrint from "./ComponentToPrint";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const mainDivStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={mainDivStyle}>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Baixar</button>
    </div>
  );
}

export default App;
