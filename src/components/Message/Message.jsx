import { TbAdjustments } from "react-icons/tb";
import s from "./Message.module.css";

const Message = ({ text, author = "Default author" }) => {
  return (
    <div>
      <h4>{text}</h4>
      <span>
        {author}
        <TbAdjustments className={s.icon} />
      </span>
    </div>
  );
};

export default Message;
