import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message/Message";
import Section from "./Section/Section";

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

      <Message text="Куплю праску!" author="Олена" />
      <Message text="Продам!" />
    </div>
  );
};

export default App;
