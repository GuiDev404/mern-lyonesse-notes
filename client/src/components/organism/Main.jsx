import React from 'react'
import useCollection from '../../hooks/useCollection';

import { formatDate, formatDateTimeAttr } from '../../util';
import { CalendarIcon, AddIcon, ScaleContract, ScaleExtend, AZIcon, ZAIcon, StartOutline, StartSolid } from '../atoms/Icons';
import BtnToggleable from '../molecules/BtnToggleable';

const TODAY = new Date()
const formattedDate = formatDate({ date: TODAY, dateStyle: 'full' });
const datetime = formatDateTimeAttr({ date: TODAY });

const Main = ({ showModal, children, toggleable }) => {
  const { orderAlphabetic, onlyFavs, response } = useCollection();

  const hasElements = Boolean(response && response.body && response.body.length);

  const buttonsToggleable = [
    { initialState: false, truthy: <StartSolid />,  falsy: <StartOutline />,  customHandle: onlyFavs, id: '69b8297c3743', disabled: true },
    { initialState: false, truthy: <AZIcon />,  falsy: <ZAIcon />, customHandle: orderAlphabetic, id: '85215a18', disabled: hasElements },
    { initialState: false, truthy: <ScaleContract />, falsy: <ScaleExtend />, customHandle: toggleable, id: 'c032-47fd', disabled: hasElements }
  ]

  return (
    <main className="p-5 text-color main" style={{ minHeight: "55.2vh" }}>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="m-0 p-0 text-color"> Colecciones </h2>
        
        <button className="btn btn-dark rounded-0" onClick={showModal}>
          <AddIcon />
          Agregar colección
        </button>
      </div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <p className="d-flex justify-content-center align-items-center my-0">
          <CalendarIcon />
          <time dateTime={datetime}> {formattedDate}</time>
        </p>
        {/* {hasElements && */}
          <div>
            {buttonsToggleable.map(button=> 
              <BtnToggleable
                disabled={!button.disabled}
                key={button.id}
                initialState={button.initialState}
                truthy={button.truthy}
                falsy={button.falsy}
                customHandle={button.customHandle}
              />
            )}
          </div>
        {/* } */}
      </div>
      {children}
    </main>
  );
}

export default Main
