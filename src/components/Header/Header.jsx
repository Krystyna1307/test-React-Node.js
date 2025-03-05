import clsx from "clsx";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <p className={clsx(s.title, s.second_class)}>
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
