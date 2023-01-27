const Tagline = ({ text }) => {
  return (
    <h1
      style={{
        color: "white",
        fontFamily: "serif",
        fontSize: "50px",
        fontWeight: "normal",
        letterSpacing: "3px",
        lineHeight: "55px",
        padding: "50px",
        maxWidth: "1000px",
        textAlign: "left",
        userSelect: "none",
      }}
    >
      {text}
    </h1>
  );
};

export default Tagline;
