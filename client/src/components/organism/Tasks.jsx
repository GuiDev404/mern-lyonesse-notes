import React from "react";
import { AddIcon, FolderOpenIcon, StartOutline, StartSolid } from "../atoms/Icons";
import useCollection from "../../hooks/useCollection";
import useNotes from "../../hooks/useNotes";
import { isPlural } from '../../util'
import Loader from "../atoms/Loader";
import ButtonWithIcon from '../molecules/ButtonWithIcon'
import EmptyState from '../molecules/EmptyState'
import ListOfTasks from '../molecules/ListOfTasks'
import { Link } from "react-router-dom";

const Tasks = ({ collectionId, styles, focusName, userId, activeEdition }) => {
  const { isLoading, isFetching, response: collections, updateMutation } = useCollection();
  const notes = useNotes();

  const currentCollection = (!isLoading && !isFetching) && 
    collections?.body?.filter((collection) => collection._id === collectionId);

  const collection = currentCollection?.[0];

  const isEmpty =
    notes?.response?.status === 200 && !notes?.response?.body?.length;
  const cantidad = notes?.response?.body?.length;

  const toggleFav = () => {
    updateMutation.mutate({
      userId,
      collectionId,
      data: { isFav: !collection.isFav },
    });
  };

  const notesTask =
    notes.isLoading || notes.isFetching ? (
      <Loader />
    ) : (
      <ListOfTasks tasks={notes.response.body} activeEdition={activeEdition} />
    );

  return (
    <div className={`row ${styles}`}>
      <div className="p-0">
        {!currentCollection || !currentCollection?.length ? (
          <div className="mx-5 pt-5">
            <EmptyState
              icon={<FolderOpenIcon size={70} />}
              text="La coleccion no existe."
              textSm
            />
            <Link to="/" className="text-color text-center d-grid">
              Volver al inicio
            </Link>
          </div>
        ) : (
          <>
            <h2 className="px-5 pt-3 my-0 bg-color text-color col-md-12 fw-bold d-flex justify-content-between align-items-center">
              <span className="w-100">{collection.name} </span>
              <button
                className={`btn btn-sm bg-transparent shadow-none ${
                  !collection.isFav ? "text-muted" : "text-warning"
                }`}
                onClick={toggleFav}
              >
                {!collection.isFav ? <StartOutline /> : <StartSolid />}
              </button>
            </h2>
            <p className="text-muted fw-light small w-100 px-5">
              {isEmpty
                ? "Colección vacia"
                : `${cantidad} ${isPlural(cantidad) ? "notas" : "nota"} `}
            </p>

            {isEmpty ? (
              <div className="px-5 py-3 text-center mt-5">
                <EmptyState
                  icon={<FolderOpenIcon size={70} />}
                  text="Colección vacia, no has creado ninguna nota."
                  textSm
                />
                <ButtonWithIcon
                  icon={<AddIcon />}
                  styles="btn-dark rounded-0"
                  handleClick={focusName}
                >
                  Agregar nota
                </ButtonWithIcon>
              </div>
            ) : (
              notesTask
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Tasks;
