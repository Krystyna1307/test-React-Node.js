// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

const Header = () => {
  return (
    <header>
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

const Section = () => {
  return (
    <section>
      <h2>Welcome to React</h2>
      <button>click</button>
      <button>Hello</button>
      <button>submit</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
        reprehenderit exercitationem nulla magni, nostrum minima sunt autem,
        molestias tempore quod necessitatibus perferendis ullam voluptatum
        laudantium sequi repellat at saepe quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus vero
        quasi error iste deserunt veritatis, dignissimos voluptate, tenetur
        illum unde repellendus doloribus perspiciatis voluptates ipsum hic
        consectetur quae eligendi dolorum.
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <span>&copy; All right reserved</span>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
