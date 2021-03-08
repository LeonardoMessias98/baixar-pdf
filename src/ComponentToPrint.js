import React from "react";

class ComponentToPrint extends React.Component {
  render() {
    const mainDivStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    const headerStyle = {
      width: "100%",
      textAlign: "center",
    };

    const imgStyle = { maxWidth: "200px" };

    return (
      <div style={mainDivStyle}>
        <header style={headerStyle}>
          <h1>Meu PDF </h1>
        </header>

        <img
          width="100%"
          style={imgStyle}
          src="https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743160.jpg"
          alt='imagem'
        />
      </div>
    );
  }
}

export default ComponentToPrint;
