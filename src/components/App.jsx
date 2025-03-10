import Button from "./Button/Button";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message/Message";
import Modal from "./Modal/Modal";
import Section from "./Section/Section";
import "../index.css";
import "modern-normalize";
import practic from "./../assets/Rectangle 19.png";

const App = () => {
  const isOnline = false;

  const filmsData = [
    {
      id: "1",
      title: "Terminator",
    },
    {
      id: "2",
      title: "Mr.Bean",
    },
  ];

  const goodsData = [
    {
      id: "1",
      title: "Морква",
    },
    {
      id: "2",
      title: "Капуста",
    },
  ];

  return (
    <div>
      {isOnline && <h1>Welcome</h1>}
      <Header />

      <List title="My films" data={filmsData} />
      <List title="Goods" data={goodsData} />

      <Modal title="Login">
        <input type="text" />
        <input type="text" />
        <button>CLICK</button>
      </Modal>
      <img src={practic} />

      <Message text="Куплю праску!" author="Олена" />
      <Message text="Продам!" />

      <Button>Click</Button>
      <Button>close</Button>
    </div>
  );
};

export default App;
