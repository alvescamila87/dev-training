type FieldProps = {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  //children?: React.ReactNode;
};
export const Field = ({
  id,
  name,
  type,
  placeholder,
  required,
  //children,
}: FieldProps) => {
  return (
    <div>
      <label id={id}>{name.toUpperCase()}</label> <br></br>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      ></input>
    </div>
  );
};
