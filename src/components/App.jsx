import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Message from "./Message/Message";
import Section from "./Section/Section";

const App = () => {
  return (
    <div>
      <Header />
      <Message text="Куплю праску!" author="Олена" />
      <Message text="Продам!" />
    </div>
  );
};

export default App;
