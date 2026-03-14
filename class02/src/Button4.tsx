type ButtonProps = {
  borderRadius: Record<string, number>;
  //   borderRadius: {
  //     topLeft: number;
  //     topRight: number;
  //     bottomRight: number;
  //     bottomLeft: number;
  //   };
  onClickButton: () => void;
};

const Button4 = ({ borderRadius, onClickButton }: ButtonProps) => {
  return <button onClick={onClickButton}>My button 4</button>;
};

export default Button4;
