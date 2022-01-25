import React, { useRef, useState } from 'react'
import { EyeIcon, CopyIcon, TrashIcon, EditIcon, DateIcon, StartOutline, StartSolid } from '../atoms/Icons';
import Interweave from 'interweave';
import Modal from './Modal';
import useModal from '../../hooks/useModal'
import useNotes from '../../hooks/useNotes'
import { formatDate, formatDateTimeAttr } from '../../util';

const Task = ({ title, description, createdAt, id, isFav, activeEdition }) => {
  const [ copied, setCopied ] = useState(false);
  const { visibility, showModal, closeModal } = useModal()
  const { deleteMutation, updateMutation } = useNotes();
  const htmlContent = useRef();

  const createdAtFormatted = formatDate({ date: createdAt, dateStyle: 'short' });
  const dateTimeFormatted = formatDateTimeAttr({ date: createdAt });

  const handleDelete = ()=> {
    deleteMutation.mutateAsync(id)
    .then(console.log)
    .catch(console.error)
  }
  
  const toggleFav = ()=> {
    const datos = {
      id,
      data: { isFav: !isFav },
    };

    updateMutation.mutate(datos)
  }
  
  const handleEdition = ()=> {
    activeEdition({ title, description, id })
  }
 
  const copyToClipboard = async ()=> {
   if(navigator.clipboard){
     const content = `${title}\n${htmlContent.current.innerText}`;

     navigator.clipboard.writeText(content)
        .then(function() {
          setCopied(true)
        }, function() {
          setCopied(false)
        })
        .finally(()=> {
          setTimeout(()=> {
            setCopied(false)
          }, 3000)
        })
    }

  }
  
  return (
    <>
      <div className="card bg-color rounded-0 p-0 note-preview">
        <div className="card-body px-5 pt-4">
          <div className='d-flex justify-content-between align-items-center'>
            <h4 className="text-color mb-0 ellipsis ellipsis-1 w-75"> {title} </h4>
            <div className='text-end'>
              <button className={`btn btn-sm bg-transparent d-none shadow-none text-muted pb-2 copy-btn`} onClick={copyToClipboard}>
                <CopyIcon />
                {copied ? <div className="tooltiptext">Copiado 📋</div> : ''}
              </button>
              
              <button className={`btn btn-sm bg-transparent shadow-none text-warning pb-2 ${!isFav ? 'text-muted' : 'text-warning'}`} onClick={toggleFav}>
                {!isFav ? <StartOutline /> : <StartSolid />}
              </button>
            </div>
          </div>
          <div className="text-color" ref={htmlContent}>
            <Interweave className='ellipsis ellipsis-5' content={description} />
          </div>
        </div>
        <div className="card-footer d-flex px-5 py-2 justify-content-between">
          <button
            className="btn btn-sm text-color px-2 d-flex align-items-center"
            onClick={showModal}
          >
            <EyeIcon />
            <span className="ms-2 me-4 "> Ver </span>
          </button>
          <button className="btn btn-sm text-color px-2 d-flex align-items-center" onClick={handleEdition}>
            <EditIcon />
            <span className="ms-2 me-4"> Editar </span>
          </button>
          <button className="btn btn-sm text-color px-2 d-flex align-items-center" onClick={handleDelete}>
            <TrashIcon />
            <span className="ms-2 me-4"> Eliminar </span>
          </button>
        </div>
      </div>
      {visibility && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          title={title}
          customClasses="w-50"
        >
          <div className="bg-color px-4 pb-3 w-50" style={{ maxHeight: '75vh', overflowY: 'scroll' }}>
            <div className="mb-3 d-flex align-items-center sticky-top bg-color pb-2" style={{ fontSize: ".9rem" }}>
              <DateIcon /> 
              <time dateTime={dateTimeFormatted} className='ps-2 text-muted small'>
               {createdAtFormatted}
              </time>
            </div>
            <Interweave className='note-preview lh-base' content={description} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default React.memo(Task)
