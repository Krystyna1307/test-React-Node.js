import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <p className={s.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi
        sint quasi vero, doloremque ipsa nam voluptatum temporibus culpa
        consequatur molestiae possimus. Corrupti necessitatibus inventore
        doloremque similique nostrum, nesciunt iusto.
      </p>
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
