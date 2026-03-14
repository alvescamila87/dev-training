type TypeButton = "button" | "reset" | "submit";

type ButtonProps = {
  type: TypeButton;
  fontSize: number;
  backgroundColor: string;
  pillShape: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const Button2 = ({
  fontSize,
  backgroundColor,
  pillShape,
  type,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        fontSize,
        backgroundColor,
        borderRadius: pillShape ? "20px" : "0",
      }}
    >
      {children}
    </button>
  );
};

export default Button2;
