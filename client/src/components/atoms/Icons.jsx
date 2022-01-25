// Icons from: 
// https://teenyicons.com/
// https://systemuicons.com/

import React from "react"

const EyeIcon = ()=> {
  return (
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M.5 7.5l-.464-.186a.5.5 0 000 .372L.5 7.5zm14 0l.464.186a.5.5 0 000-.372L14.5 7.5zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.368 9.368 0 01-1.449-2.164 5.065 5.065 0 01-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004a2.107 2.107 0 00.026.063l.078.173a10.368 10.368 0 001.61 2.406C2.94 11.652 4.814 13 7.5 13v-1zm-7-4.5l.464.186.004-.008a2.62 2.62 0 01.08-.18 9.368 9.368 0 011.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.367 10.367 0 00-1.61 2.406 6.05 6.05 0 00-.104.236l-.002.004v.001H.035L.5 7.5zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.37 9.37 0 011.449 2.164 4.705 4.705 0 01.08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004a.656.656 0 00-.026-.063 9.094 9.094 0 00-.39-.773 10.365 10.365 0 00-1.298-1.806C12.06 3.348 10.186 2 7.5 2v1zm7 4.5a68.887 68.887 0 01-.464-.186l-.003.008-.015.035-.066.145a9.37 9.37 0 01-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.366 10.366 0 001.61-2.407 6.164 6.164 0 00.104-.236l.002-.004v-.001h.001L14.5 7.5zM7.5 9A1.5 1.5 0 016 7.5H5A2.5 2.5 0 007.5 10V9zM9 7.5A1.5 1.5 0 017.5 9v1A2.5 2.5 0 0010 7.5H9zM7.5 6A1.5 1.5 0 019 7.5h1A2.5 2.5 0 007.5 5v1zm0-1A2.5 2.5 0 005 7.5h1A1.5 1.5 0 017.5 6V5z" fill="currentColor"></path></svg>
  )
}

const CalendarIcon = ()=> {
  return (
    <svg viewBox="0 0 15 15" className='me-2' fill="none" xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M3.5 0v5m8-5v5m-10-2.5h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z" stroke="currentColor"></path></svg>
  )
}

const FolderOutlineIcon = ({ color, size } = { color: 'currentColor',size: '20' })=> {
  return (
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}><path d="M.5 12.5v-10a1 1 0 011-1h4l2 2h6a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1z" stroke={color}></path></svg>
  )
}

const FolderOpenIcon = ({size } = { size: '80' })=> {

  return (
    <svg
      height={size}
      viewBox="0 0 21 21"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className='text-muted'
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 4)"
      >
        <path d="m15.5 4.5c.000802-1.10737712-.8946285-2.00280762-1.999198-2.00280762l-5.000802.00280762-2-2h-4c-.55228475 0-1 .44771525-1 1v.99719238 2.00280762" />
        <path d="m.81056316 5.74177845 1.31072322 5.24326075c.22257179.8903496 1.02254541 1.5149608 1.94029301 1.5149608h8.87667761c.9177969 0 1.7178001-.6246768 1.9403251-1.5150889l1.3108108-5.24508337c.1339045-.53580596-.1919011-1.07871356-.727707-1.21261805-.079341-.0198283-.1608148-.02983749-.2425959-.02983749l-13.43852073.00188666c-.55228474.00007754-.99985959.44785564-.99985959 1.00014038 0 .08170931.01003737.16310922.02985348.24237922z" />
      </g>
    </svg>
  );
}

const AddIcon = ()=> {
  return (
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M7.5 4v7M4 7.5h7" stroke="currentColor"></path></svg>
  )
}


const CloseIcon = ()=> {
  return (
    <svg height="25" viewBox="0 0 21 21" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z"/><path d="m10.5.5-10 10"/></g></svg>
  )
}

const LockIcon = ()=> {
  return (
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M4.5 6.5v-3a3 3 0 016 0v3m-8 0h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1z" stroke="currentColor"></path></svg>
  ) 
}

const UnlockIcon = ()=> {
  return (
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M4.5 6.5v-3a3 3 0 016 0V4m-8 2.5h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1z" stroke="currentColor"></path></svg>
  ) 
}

const StartSolid = ()=> {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M7.948.779a.5.5 0 00-.896 0L5.005 4.926l-4.577.665a.5.5 0 00-.277.853l3.312 3.228-.782 4.559a.5.5 0 00.725.527L7.5 12.605l4.094 2.153a.5.5 0 00.725-.527l-.782-4.56 3.312-3.227a.5.5 0 00-.277-.853l-4.577-.665L7.948.78z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

const StartOutline = ()=> {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M7.5 12.04l-4.326 2.275L4 9.497.5 6.086l4.837-.703L7.5 1l2.163 4.383 4.837.703L11 9.497l.826 4.818L7.5 12.041z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

const SaveIcon = ()=> {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 4)"
      >
        <path d="m2.5.5h7l3 3v7c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-8c0-1.1045695.8954305-2 2-2z" />
        <path d="m4.50000081 8.5h4c.55228475 0 1 .44771525 1 1v3h-6v-3c0-.55228475.44771525-1 1-1z" />
        <path d="m3.5 3.5h2v2h-2z" />
      </g>
    </svg>
  );
}

const TrashIcon = ()=> {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      >
        <path d="m2.5 2.5h10v12c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2zm5-2c1.0543618 0 1.91816512.81587779 1.99451426 1.85073766l.00548574.14926234h-4c0-1.1045695.8954305-2 2-2z" />
        <path d="m.5 2.5h14" />
        <path d="m5.5 5.5v8" />
        <path d="m9.5 5.5v8" />
      </g>
    </svg>
  );
}

const DateIcon = ()=> {
  return (
    <svg
      height="18"
      viewBox="0 0 21 21"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <path
          d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v11.9903615c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-11.9903615c0-1.1045695.8954305-2 2-2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m.659 4.5h15.841"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="currentColor">
          <path d="m4.81640625 11.1552734v-1.0791015h.87890625c.66894531 0 1.12304688-.39550784 1.12304688-.97167971 0-.52734375-.41503907-.92773438-1.10351563-.92773438-.71289063 0-1.15234375.36621094-1.20117187.99609375h-1.36230469c.04882812-1.29882812 1.04980469-2.17285156 2.63671875-2.17285156 1.5625 0 2.43164062.86425781 2.42675781 1.89453125-.00488281.85449219-.54199219 1.41601565-1.29882813 1.60156255v.0927734c.98144532.1416016 1.57714844.7666016 1.57714844 1.7089844 0 1.2353515-1.16210937 2.109375-2.75390625 2.109375-1.59179687 0-2.67578125-.8691407-2.73925781-2.2021485h1.41113281c.04394531.5957031.55175781.9765625 1.30859375.9765625.74707032 0 1.26953125-.4052734 1.26953125-1.015625 0-.625-.48828125-1.0107422-1.27929687-1.0107422z" />
          <path d="m11.516 14.227v-5.611h-.087l-1.729 1.192v-1.372l1.821-1.255h1.47v7.046z" />
        </g>
      </g>
    </svg>
  );
}

const FolderSolidIcon = ({ color, size } = { color: 'currentColor', size: '30' })=> {
  return (
    <svg
      height={size}
      width={size}
      viewBox={`0 0 ${size === '30' ? '21 21' : '22 23'}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={color}
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 4)"
      >
        <path d="m.5 1.5v9c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-6.00280762c.0007656-1.05436179-.8150774-1.91816512-1.8499357-1.99451426l-.1500643-.00468356-5 .00200544-2-2h-4c-.55228475 0-1 .44771525-1 1z" />
        <path d="m.5 2.5h7" />
      </g>
    </svg>
  );
}

const ScaleExtend = ()=> {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m10.5 4.5v-3.978l-4-.022" />
        <path d="m4.5 10.523h-4v-4.023" />
      </g>
    </svg>
  );
}

const ScaleContract = ()=> {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m10.5 4.5-4 .022v-4.022" />
        <path d="m4.5 10.523v-4l-4-.023" />
      </g>
    </svg>
  );
}

const OptionsIcon = ()=> {
  return <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fillRule="evenodd"><circle cx="10.5" cy="10.5" r="1"/><circle cx="5.5" cy="10.5" r="1"/><circle cx="15.5" cy="10.5" r="1"/></g></svg>
}

const EditIcon = ()=> {
  return <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="m14 1c.8284271.82842712.8284271 2.17157288 0 3l-9.5 9.5-4 1 1-3.9436508 9.5038371-9.55252193c.7829896-.78700064 2.0312313-.82943964 2.864366-.12506788z"/><path d="m12.5 3.5 1 1"/></g></svg>
}

const AZIcon = () => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M3.5 14.5l-.354.354a.5.5 0 00.708 0L3.5 14.5zm6-6V8H9v.5h.5zm0 6H9v.5h.5v-.5zm-5.646.354l3-3-.708-.708-3 3 .708.708zm0-.708l-3-3-.708.708 3 3 .708-.708zM3 0v14.5h1V0H3zm6.5 9H12V8H9.5v1zm2.5 2H9.5v1H12v-1zm-2 .5v-3H9v3h1zm3-1.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm0 5H9.5v1H12v-1zm-2 .5v-3H9v3h1zm3-1.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-2-5V2.5H9V7h1zm3-4.5V7h1V2.5h-1zM11.5 1A1.5 1.5 0 0113 2.5h1A2.5 2.5 0 0011.5 0v1zM10 2.5A1.5 1.5 0 0111.5 1V0A2.5 2.5 0 009 2.5h1zM9.5 5h4V4h-4v1z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const ZAIcon = () => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M3.5.5l.354-.354a.5.5 0 00-.708 0L3.5.5zm6 8V8H9v.5h.5zm0 6H9v.5h.5v-.5zM3.146.146l-3 3 .708.708 3-3-.708-.708zm0 .708l3 3 .708-.708-3-3-.708.708zM3 .5V15h1V.5H3zM9.5 9H12V8H9.5v1zm2.5 2H9.5v1H12v-1zm-2 .5v-3H9v3h1zm3-1.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm0 5H9.5v1H12v-1zm-2 .5v-3H9v3h1zm3-1.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-2-5V2.5H9V7h1zm3-4.5V7h1V2.5h-1zM11.5 1A1.5 1.5 0 0113 2.5h1A2.5 2.5 0 0011.5 0v1zM10 2.5A1.5 1.5 0 0111.5 1V0A2.5 2.5 0 009 2.5h1zM9.5 5h4V4h-4v1z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const DownloadIcon = ()=> {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M7.5 10.5l-3.25-3m3.25 3l3-3m-3 3V1m6 6v6.5h-12V7"
        stroke="currentColor"
      ></path>
    </svg>
  );
}

const CopyIcon = ()=> {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m.5-1h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
        stroke="currentColor"
      ></path>
    </svg>
  );
}


function PaintBrush(props) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M.5 14l-.481-.136a.5.5 0 00.758.552L.5 14zm.971-3.422l.481.136-.48-.136zm-.46 3.081l-.277-.416.277.416zm2.062-.148l-.215.451.215-.451zM5 6l-.25-.433a.5.5 0 00-.104.787L5 6zm4 4l-.354.354a.5.5 0 00.787-.103L9 10zM14.5.5l.433.25a.5.5 0 00-.684-.683L14.5.5zM.981 14.136l.971-3.422-.962-.273-.971 3.422.962.274zm2.956-4.922H4v-1h-.063v1zm2.063 2v.053h1v-.053H6zm-1.947 2h-.08v1h.08v-1zm-3.32.03l-.51.34.554.832.512-.34-.555-.833zm2.555-.185a2.594 2.594 0 00-2.554.184l.555.832a1.594 1.594 0 011.569-.113l.43-.903zm.685.155c-.237 0-.471-.053-.685-.155l-.43.903c.348.166.73.252 1.115.252v-1zM6 11.267a1.947 1.947 0 01-1.947 1.947v1A2.947 2.947 0 007 11.267H6zM4 9.214a2 2 0 012 2h1a3 3 0 00-3-3v1zm-2.048 1.5a2.063 2.063 0 011.985-1.5v-1c-1.37 0-2.573.91-2.947 2.227l.962.273zm2.694-4.36l4 4 .708-.708-4-4-.708.708zM14.25.067l-9.5 5.5.5.866 9.5-5.5-.5-.866zM9.432 10.251l5.5-9.5-.866-.502-5.5 9.5.866.502zM7.146 4.854l3 3 .708-.708-3-3-.708.708z"
        fill="currentColor"
      />
    </svg>
  )
}

export {
  EyeIcon,
  CalendarIcon,
  FolderOutlineIcon,
  FolderSolidIcon,
  AddIcon,
  CloseIcon,
  UnlockIcon,
  LockIcon,
  FolderOpenIcon,
  StartOutline,
  StartSolid,
  SaveIcon,
  TrashIcon,
  DateIcon,
  ScaleContract,
  ScaleExtend,
  OptionsIcon ,
  EditIcon,
  AZIcon,
  ZAIcon,
  DownloadIcon,
  CopyIcon,
  PaintBrush
}