const Header = () => {
  return (
    <header
      style={{ display: "flex", backgroundColor: "teal", color: "white" }}
    >
      <div>Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
