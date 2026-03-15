//type ButtonProps = React.ComponentProps<"button">;
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  onClickButton: () => void;
};

const Button5 = ({ onClickButton, disabled, autoFocus }: ButtonProps) => {
  return (
    <button onClick={onClickButton} disabled={disabled} autoFocus={autoFocus}>
      My button component without ref
    </button>
  );
};

export default Button5;
