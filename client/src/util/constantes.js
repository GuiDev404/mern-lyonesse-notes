export const regexValidId = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/;

export const toolbarOptions = [
  [{ header: "1" }, { header: "2" }, { font: [] }],
  [{ size: [] }],
  [{ color: [] }, { background: [] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  //  {'indent': '-1'}, {'indent': '+1'}],
  [{ align: [] }],
  ["link", "image"],
  ["clean"],
];

export const COLORS = ["#0d6aff", "#ff503d", "#ffd53d", "#c5ff3d", "#cfcfcf","#27ae60", "#8e44ad", "#2c3e50", "#e67e22", "#7f8c8d"];

export const patternPassword =
  /^(?=.*\d)(?=.*[\u0021|\u002b|\u003c|\u003e|\u0040|\u005F|\u0023|\u0024])(?=.*[A-Z])(?=.*[a-z])\S{8,32}$/;

export const patternEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PAGES = [
  {url: '/', label: 'Home' },
  {url: '/404', label: '404' }
];
