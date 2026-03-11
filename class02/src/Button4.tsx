type ButtonProps = {
  borderRadius: Record<string, number>;
  //   borderRadius: {
  //     topLeft: number;
  //     topRight: number;
  //     bottomRight: number;
  //     bottomLeft: number;
  //   };
};

const Button4 = ({ borderRadius }: ButtonProps) => {
  return <button>My button 4</button>;
};

export default Button4;
