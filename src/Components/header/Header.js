import React from "react";
import Button from "../button/Button";
const Header = (props) => {
  const { title } = props;
  const on_click = (e) => {
    console.log(e.target.hidden);
    console.log(e);
    if (e.target.hidden === false) {
      e.target.hidden = true;
    }
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button on_click1={on_click} title="اضافه کن" color="red" />
      <Button on_click1={on_click} title="تفریق کن" />
      <Button on_click1={on_click} title="تقسیم کن" color="green" />
    </header>
  );
};
Header.defaultProps = {
  title: "masoud",
};

export default Header;
