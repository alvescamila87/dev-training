type TypeButton = "button" | "reset" | "submit";

type ButtonProps = {
  type: TypeButton;
  fontSize: number;
  backgroundColor: string;
  pillShape: boolean;
  children: React.ReactNode;
};

const Button2 = ({
  fontSize,
  backgroundColor,
  pillShape,
  type,
  children,
}: ButtonProps) => {
  return (
    <button
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
