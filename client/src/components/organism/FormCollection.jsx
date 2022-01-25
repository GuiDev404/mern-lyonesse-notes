import React, { useState } from "react";
import { useHistory } from "react-router";

import useCollection from "../../hooks/useCollection";
import useUser from "../../hooks/useUser";
import { COLORS } from "../../util";

const FormCollection = ({ modeEdition, inOwnPage }) => {
  const [name, setName] = useState("");
  const [colorSelected, setColor] = useState(modeEdition?.data?.colorIcon || '');
  const [error, setError] = useState("");
  const { id } = useUser();
  const { createMutation, updateMutation } = useCollection();
  const history = useHistory();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createData = {
      name,
      userId: id,
    };

    const updateData = {
      collectionId: modeEdition?.data?.id,
      userId: id,
      data: { name },
    };

    if (name) {
      if (!modeEdition.state) {
        createMutation.mutate(createData, {
          onSuccess: (response) => {
            inOwnPage && history.push(`/editor/${response.body._id}`);
          },
        });
        return;
      }

      updateMutation.mutate(updateData);
    } else {
      setError("El nombre es requerido.");
    }
  };
console.log(colorSelected)
  return (
    <form
      className={`bg-color pb-3 ${!inOwnPage && "col-md-4 px-4"}`}
      onSubmit={handleSubmit}
    >
      {colorSelected ? (
        <div className="form-group mt-3">
          {COLORS.filter((color) => color !== colorSelected).map(
            (color) => {
              return (
                <button
                  key={color}
                  type='button'
                  style={{
                    display: "inline-block",
                    backgroundColor: color,
                    width: "15px",
                    height: 30,
                  }}
                  className="btn rounded ms-0 me-2"
                  onClick={()=> setColor(color)}
                ></button>
              );
            }
          )}
        </div>
      ) : (
        <div className="form-group mt-3">
          <label className="pb-2" htmlFor="collection_name">
            Nombre
          </label>
          <input
            type="text"
            onChange={handleName}
            className="form-control rounded-0"
            id="collection_name"
            placeholder="Ingrese el nombre de la colección"
            defaultValue={modeEdition?.data?.name || ""}
          />
          {error && <p className="small text-danger"> {error} </p>}
        </div>
      )}

      <button
        type="submit"
        className="text-uppercase btn btn-dark rounded-0 w-100 mt-3"
      >
        {modeEdition.state ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default FormCollection;
