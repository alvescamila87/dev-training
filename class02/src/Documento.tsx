export type ValidKeys =
  | "Documento CTE"
  | "Documento NFSE"
  | "Documento CIOT"
  | "Documento GNRE";

type DocumentoProps = {
  documentos: Record<ValidKeys, string>;
  chave: ValidKeys;
};

const Documento = ({ documentos, chave }: DocumentoProps) => {
  const valor = documentos[chave];

  return <span title={chave}>{valor}</span>;
};

// type DocumentoListaProps = {
//   documentos: Record<ValidKeys, string>;
// };

// const DocumentoLista = ({ documentos }: DocumentoListaProps) => {
//   return (
//     <ul>
//       {Object.entries(documentos).map(([chave, valor]) => (
//         <li key={chave}>
//           <strong>{chave}</strong>: {valor}
//         </li>
//       ))}
//     </ul>
//   );
// };

// // Uso
// <DocumentoLista documentos={docs} />

export default Documento;
