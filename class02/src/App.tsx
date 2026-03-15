//componente: função que retorna jsx

import { useState } from "react";
import Button2 from "./Button";
import Button3 from "./Button3";
import Button4 from "./Button4";
import Documento, { type ValidKeys } from "./Documento";
import { Field } from "./Field";

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
  const [count, setCount] = useState(0);

  const docs: ValidKeys = {
    "Documento CTE": "cte.pdf",
    "Documento NFSE": "nfse.pdf",
  };

  const handleClear = () => {
    console.log("Clean fields");
  };

  const handleIncrementCount = () => {
    setCount((prev) => prev + 1);
    console.log("Plus 1");
  };

  const handleSubmit = () => {
    console.log("Enviar");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        gap: "16px",
      }}
    >
      <Field
        name="Nome completo"
        type="text"
        placeholder="Digite o nome"
        required
      />

      <Field
        name="Cellphone"
        type="number"
        placeholder="00-00000-0000"
        required={false}
      />
      <Button pillShape={true} fontSize={30} backgroundColor="#0000ff" />
      <Button pillShape={true} fontSize={30} backgroundColor="#ffff00" />
      <Button2
        onClick={handleClear}
        type="reset"
        pillShape={false}
        backgroundColor="lightgreen"
        fontSize={20}
      >
        Clear
      </Button2>
      <Button2
        onClick={handleSubmit}
        type={"submit"}
        fontSize={50}
        backgroundColor="lightgrey"
        pillShape={true}
      >
        Salvar
      </Button2>

      <Button3 style={{ fontWeight: 65, backgroundColor: "pink" }} />

      <Documento documentos={docs} chave="Documento CTE" />

      <h1>
        {count}
        <br></br>
        <Button4
          onClickButton={handleIncrementCount}
          borderRadius={{
            topLeft: 75,
            topRight: 90,
            bottomRight: 30,
            bottomLeft: 20,
          }}
        />
      </h1>
    </div>
  );
}

export default App;
