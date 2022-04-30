import React from "react";

const Card = ({ item, methondev, editar }) => {
  //   console.log(item)
  const eliminarCard = async () => {
    methondev(item.id);
  };

  const editarCard = async () => {
    editar(item);
  };

  //   console.log(methondev);
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{item.nameTarea}</h5>
        <p className="card-text">
         <strong>Usuario</strong> {item.nombreDeUsuario}
          {/* dsad */}
          { item.origen}
          <p><strong>Descripcion : </strong>{item.decripcionTarea}</p>
          <p><strong>Notas : </strong>{item.otrasTareas}</p>
        </p>
        <div className="row">
          <div className="col" onClick={editarCard}>
            <p className="btn btn-primary">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </p>
          </div>

          <div className="col" onClick={eliminarCard}>
            <p className="btn btn-danger">
              <i className="fa fa-trash" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
