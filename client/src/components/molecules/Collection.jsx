import React from "react";
import { Link } from "react-router-dom";
import useCollection from "../../hooks/useCollection";
import useUser from "../../hooks/useUser";
import { formatDate, formatDateTimeAttr } from '../../util'
import { EditIcon, FolderSolidIcon, OptionsIcon, TrashIcon, PaintBrush } from "../atoms/Icons";
import ButtonWithIcon from "./ButtonWithIcon";

const Collection = ({ id, name, colorIcon, createdAt, showModal, setModeEdition, expandContract}) => {
  const { deleteMutation } = useCollection();
  const { id: userId } = useUser();

  const fechaCreacion = formatDate({ date: createdAt, dateStyle: 'medium' });
  const fechaCreacionDatetime = formatDateTimeAttr({ date: createdAt });

  const handleConfig = (e)=> {
    e.preventDefault()
  }

  const handleDeleteCollection = (e)=> {
    e.preventDefault()
    deleteMutation.mutate({ userId, collectionId: id })
  }

  const handleUpdateCollection = (e)=> {
    e.preventDefault()
    setModeEdition({ state: true, data: { id, name } })
    showModal();
  }

  const handleUpdateColor = (e)=> {
    e.preventDefault()
    setModeEdition({ state: true, data: { id, name, colorIcon } })
    showModal();
  }

  const collectionActions = [
    { icon: <TrashIcon />, text: 'Eliminar', fn: handleDeleteCollection },
    { icon: <EditIcon />, text: 'Actualizar', fn: handleUpdateCollection },
    { icon: <PaintBrush />, text: 'Cambiar color', fn: handleUpdateColor }
  ]

  return (
    <Link
      to={`/editor/${id}`}
      className="text-decoration-none col-md-3 px-1 mb-2"
    >
      <div
        className="card bg-color rounded-0 m-1"
        style={{ height: expandContract ? "140px" : "75px" }}
      >
        <div className="card-body">
          <div className="d-flex align-items-center">
            <FolderSolidIcon
              color={colorIcon}
              size={expandContract ? "36" : "31"}
            />
            <p className={`text-color ps-2 pb-0 my-0 ${expandContract ? "h4" : "h6"}`}> {name} </p>
            <div className="dropdown ms-auto bg-color">
              <ButtonWithIcon
                icon={<OptionsIcon />}
                styles="btn-sm text-color ms-auto align-self-start p-0 dropdown-toggle bg-color-hover"
                handleClick={handleConfig}
                id="dropdownMenuButton1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu rounded-0 m-0 bg-color"
                aria-labelledby="dropdownMenuButton1"
              >
                {collectionActions.map(action=> 
                  <li className="px-1" key={action.text}>
                    <ButtonWithIcon
                      icon={action.icon}
                      styles="w-100 bg-color-hover text-color d-flex align-items-center"
                      handleClick={action.fn}
                    >
                      <span className="ps-2">{action.text}</span>
                    </ButtonWithIcon>
                  </li>  
                )}
              </ul>
            </div>
          </div>
        </div>
        {expandContract && (
          <div className="card-footer py-2">
            <time dateTime={fechaCreacionDatetime} className="text-color text-muted small">
              {fechaCreacion}
            </time>
          </div>
        )}
      </div>
    </Link>
  );
};

export default React.memo(Collection);
