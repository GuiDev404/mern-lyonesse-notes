import frases from './frases.json'
import { COLORS, regexValidId, toolbarOptions, patternEmail, patternPassword, PAGES } from './constantes';

const numeroRandom = (max)=> Math.floor(Math.random() * max);

const formatDate = ({ date, dateStyle }) =>
  new Date(date).toLocaleDateString("es-AR", { dateStyle }); 

const formatDateTimeAttr = ({ date }) =>
  new Date(date).toLocaleDateString().replace(/\//g, '-'); 

const isPlural = (cantidad)=> new Intl.PluralRules("es-AR").select(cantidad) === "other";

export {
  frases, 
  numeroRandom,
  COLORS, regexValidId, toolbarOptions,
  formatDate,
  formatDateTimeAttr,
  patternEmail,
  patternPassword,
  PAGES,
  isPlural
}
