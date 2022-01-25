import { ENDPOINTS } from "./config";
import { requestAuth } from "./index";

const getPage = (params)=> {
  const { id, page } = params;
  // const [_key, id, page] = params.queryKey;
  return requestAuth(ENDPOINTS.page(id, page), 'get');
}

const getPresupuestos = ()=> requestAuth(ENDPOINTS.presupuesto, 'get');
const newPresupuesto = (data)=> requestAuth(ENDPOINTS.presupuesto, 'post', data);
const updatePresupuesto = ({ id, data })=> {
  return requestAuth(ENDPOINTS.actionInPresupuesto(id), 'put', data)
};
const deletePresupuesto = (id)=> requestAuth(ENDPOINTS.actionInPresupuesto(id), 'delete');
const getPresupuesto = (id)=> requestAuth(ENDPOINTS.actionInPresupuesto(id), 'get');

export {
  newPresupuesto,
  updatePresupuesto,
  deletePresupuesto,
  getPresupuesto,
  getPresupuestos,
  getPage
}