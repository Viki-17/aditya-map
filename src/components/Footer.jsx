import "./Footer.css";

const FooterMenu = ({ children }) => {
  return (
    <span
      style={{
        fontSize: "15px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {children}
    </span>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid",
        backgroundColor: "#6c7174",
        height: "200px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "150px",
        marginTop: "100px",
      }}
    >
      <img
        src="https://www.adityabirlacapital.com/-/media/Project/ABCL/Logo/footer-logo.png"
        style={{ height: "30px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          rowGap: "10px",
        }}
      >
        <FooterMenu>About Us</FooterMenu>
        <FooterMenu>Careers</FooterMenu>
        <FooterMenu>Customer Service</FooterMenu>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          rowGap: "10px",
        }}
      >
        <FooterMenu>Our Solutions</FooterMenu>
        <FooterMenu>Investor Relations</FooterMenu>
        <FooterMenu>Press and Media</FooterMenu>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          rowGap: "10px",
        }}
      >
        <FooterMenu>Our Business</FooterMenu>
        <FooterMenu>Our Achievements</FooterMenu>
        <FooterMenu>Locate Us</FooterMenu>
      </div>
    </div>
  );
};

export default Footer;
