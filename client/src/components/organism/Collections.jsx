import React, { useState } from 'react'
import useCollection from '../../hooks/useCollection'

import Modal from '../molecules/Modal'
import Loader from '../atoms/Loader'
import FormCollection from './FormCollection'
import { FolderOutlineIcon } from '../atoms/Icons'
import EmptyState from '../molecules/EmptyState'
import ListOfCollections from '../molecules/ListOfCollections'

const Collections = ({ visibility, showModal, closeModal , expandContract }) => {
  const { isLoading, isError, isFetching, error, response: colecciones } = useCollection()
  const [ modeEdition, setModeEdition ] = useState({ state: false })

  if(isError) {
    console.log(error)
    return <h2> Algo salio mal 😯 </h2>
  }

  return isLoading || isFetching ? (
    <Loader />
  ) : (
    <div className="row">
      {visibility && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          clearStatesOnClose={setModeEdition}
          title={
            modeEdition.state ? "Actualizar colección" : "Agregue una colección"
          }
        >
          <FormCollection modeEdition={modeEdition} />
        </Modal>
      )}

      {Boolean(colecciones && colecciones?.body?.length) ? (
        <ListOfCollections
          colecciones={colecciones.body}
          expandContract={expandContract}
          setModeEdition={setModeEdition}
          showModal={showModal}
        />
      ) : (
        <EmptyState
          icon={<FolderOutlineIcon color={"#777777"} size={50} />}
          text="No has hay colecciones."
        />
      )}
    </div>
  );
}

export default Collections
