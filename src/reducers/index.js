// Es como un objeto grande.
import { combineReducers } from 'redux'; 
import companyReducers from './Questionary';
import registerReducers from './Register';
import CollapseReducers from './CollapseControl';

//creo reducers con una clave que define el estado:
// availableDoctors.
export default combineReducers({
    companyReducers,
    registerReducers,
    CollapseReducers
})