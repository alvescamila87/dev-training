type ToogleProps = {
  shouldShow: boolean;
  onClickToggle: () => void;
};
export const Toggle = ({ shouldShow, onClickToggle }: ToogleProps) => {
  return (
    <div>
      {shouldShow && <p>Tô aqui</p>}
      <button onClick={onClickToggle}>Alterar visibilidade</button>
    </div>
  );
};
