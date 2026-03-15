type HandleClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

const Button6 = () => {
  const handleClickEvent = (e: HandleClickEvent) => {
    console.log("Cliquei aqui", e);
  };

  return <button onClick={handleClickEvent}>my button with EVENT</button>;
};

export default Button6;
