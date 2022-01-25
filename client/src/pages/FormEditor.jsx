import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';

import { SaveIcon } from '../components/atoms/Icons';
import Tasks from '../components/organism/Tasks';

import useNotes from '../hooks/useNotes';
import useUser from '../hooks/useUser';

import { regexValidId, toolbarOptions } from '../util'

const FormEditor = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError, clearErrors, setFocus, reset } = useForm();
  const { collectionId } = useParams();
  const editorRef = useRef();
  const { createMutation, updateMutation } = useNotes()
  const { id } = useUser()
  const [modeEdition, setModeEdition] = useState(false)
  const [noteId, setNoteId] = useState('')

  const noteContent = watch("noteContent") || '';

  useEffect(() => {
    register("noteContent", { 
      required: {
        value: true,
        message: 'El contenido de la nota es requerido.'
      }
    });

    if(noteContent || noteContent !== '<p><br></p>'){
      clearErrors('noteContent')
    } 
  }, [register, clearErrors, noteContent]);

 
  const onEditorStateChange = (editorState) => {

    // if(editorState === '<p><br></p>'){
    //   setError('noteContent', { message: 'El contenido de la nota es requerido' })
    // } else {
      setValue("noteContent", editorState);
    // }
    
  };

  const submitAdd = (data) => {
    if(!noteContent || noteContent === '<p><br></p>'){
      setError('noteContent', { message: 'El contenido de la nota es requerido' })
      return;
    } 
    
    const datos =  { name: data.noteTitle, description: data.noteContent };
    console.log(datos)
    createMutation.mutate({ userId: id, collectionId: collectionId, data: datos })
    reset()
  };

  const submitUpdate = (data)=> {
    if(!noteContent || noteContent === '<p><br></p>'){
      setError('noteContent', { message: 'El contenido de la nota es requerido' })
      return;
    } 
    
    const datos = {
      id: noteId,
      data: {
        name: data.noteTitle,
        description: data.noteContent
      }
    }

    updateMutation.mutate(datos)
    setModeEdition(false)
    reset()
  }

  const handleActiveEdition = ({ title, description, id })=> {
    setModeEdition(true);
    setNoteId(id);
    setValue('noteContent', description)
    setValue('noteTitle', title)
  } 

  return (
    <div className="row p-0" style={{ maxWidth: "100%", maxHeight: "100vh" }}>
      <div className="col-md-4 m-0 p-0">
        <Tasks
          styles="column-tasks custom-scrollbar bg-color text-color"
          collectionId={collectionId}
          userId={id}
          focusName={() => setFocus("noteTitle")}
          activeEdition={handleActiveEdition}
        />
      </div>

      <div className="col-md-8">
        <div className="p-5 pt-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className="fw-bold"> Nueva nota </h2>
            <button
              type="submit"
              form="form-add-note"
              className="btn btn-dark rounded-0 d-flex justify-content-between align-items-center"
              disabled={!collectionId || !regexValidId.test(collectionId)}
            >
              <SaveIcon />
              <span>{modeEdition ? "Actualizar" : "Guardar"}</span>
            </button>
          </div>
          <form
            className="w-100"
            onSubmit={handleSubmit(modeEdition ? submitUpdate : submitAdd)}
            id="form-add-note"
          >
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                {...register("noteTitle", {
                  required: {
                    value: true,
                    message: "El nombre de la nota es requerido.",
                  },
                })}
                type="text"
                placeholder="Ingrese el nombre de la nota"
                id="name"
                name="noteTitle"
                className="form-control rounded-0 mt-2"
                autoFocus
              />
              <p className="small text-danger">
                {errors?.noteTitle?.message}
              </p>
            </div>

            <div className="form-group mt-3">
              <label
                htmlFor="content"
                onClick={() => editorRef.current.focus()}
              >
                Contenido
              </label>
              <ReactQuill
                ref={editorRef}
                id="content"
                theme="snow"
                value={noteContent}
                onChange={onEditorStateChange}
                className="editor mt-2 mb-5"
                placeholder="Ingrese el contenido de la nota"
                initialValue=""
                modules={{
                  toolbar: toolbarOptions
                }}
              />
              <p className="small text-danger mb-0">
                {errors?.noteContent?.message}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormEditor
