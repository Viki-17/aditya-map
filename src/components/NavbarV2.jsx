const MenuButton = ({ label }) => {
  return (
    <div
      style={{
        fontSize: "20px",
        color: "#fff",
        cursor: "pointer",
        padding: "10px",
        userSelect: "none",
      }}
    >
      {label}
    </div>
  );
};

const ToolBar = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        maxWidth: "1200px",
        backgroundColor: "#c7222a",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "250px",
          padding: "20px",
        }}
        src="https://www.adityabirlacapital.com/-/media/Project/ABCL/Logo/abc-logo/abc-logo.png?extension=webp"
        alt="logo"
      />
      <div style={{ flexGrow: 1 }} />
      {/* <MenuButton label='Login' />
      <MenuButton label='Home' /> */}
    </div>
  );
};

const CoverImage = () => {
  return (
    <img
      style={{
        width: "100%",
        height: "600px",
        position: "absolute",
        zIndex: 0,
        objectFit: "cover",
        top: "0px",
      }}
      src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwbGlmZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    />
  );
};

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <CoverImage />
      <ToolBar />
    </div>
  );
};
export default Navbar;
