import React from 'react'
import Collection from './Collection'

const ListOfCollections = ({ colecciones, ...props }) => {
  return (
    <div className="d-flex row col-md-12 m-0 p-1">
      {colecciones.map((collection) => {
        return (
          <Collection
            key={collection._id}
            id={collection._id}
            colorIcon={collection.colorIcon}
            name={collection.name}
            createdAt={collection.createdAt}
            {...props}
            // showModal={showModal}
            // setModeEdition={setModeEdition}
            // expandContract={expandContract}
          />
        );
      })}
    </div>
  );
}

export default ListOfCollections
