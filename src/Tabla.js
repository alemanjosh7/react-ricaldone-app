import React from "react";

function TablaEjemplo(Props) {
  return (
    <tbody>
      {Props.datos.map((usuarios) => {
        return (
          <tr>
            <td>{usuarios.userId}</td>
            <td>{usuarios.id}</td>
            <td>{usuarios.title}</td>
            <td>{usuarios.body}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TablaEjemplo;
