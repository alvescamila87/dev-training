//componente: função que retorna jsx

// mais legível
type ButtonProps = {
  //backgroundColor: string;
  backgroundColor: "#ff0000" | "#0000ff" | "#ffff00";
  fontSize: number;
  pillShape: boolean;
};

//function Button({ backgroundColor }: { backgroundColor: string }) {
function Button({ backgroundColor, fontSize, pillShape }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor,
        fontSize,
        borderRadius: pillShape ? "99x" : "0x",
      }}
    >
      My button
    </button>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        gap: "16px",
      }}
    >
      <Button pillShape={true} fontSize={30} backgroundColor="#0000ff" />
      <Button pillShape={true} fontSize={30} backgroundColor="#ffff00" />
    </div>
  );
}

export default App;
