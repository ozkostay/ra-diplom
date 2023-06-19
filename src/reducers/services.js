// import {
//   LIST_SERVICES_REQUEST,
//   LIST_SERVICES_SUCCESS,
//   ITEM_SERVICE_REQUEST,
//   ITEM_SERVICE_SUCCESS,
//   ERROR_LIST_REQUEST,
//   ERROR_ITEM_REQUEST
//  } from '../actions/actionTypes'

// const initialState = {
//   services: [],
//   item: {},
//   loading: false,
//   error: null,
//   route: ''
// };

// export default function servicesReducer(state = initialState, action) {
//   switch (action.type) {
//     case LIST_SERVICES_REQUEST:
//       return {...state, loading: true, error: null, route: '/'};
//     case LIST_SERVICES_SUCCESS:
//       const {services} = action.payload;
//       return {...state, services, loading: false, error: null, route: '/'};
//     case ITEM_SERVICE_REQUEST:
//       return {...state, loading: true, error: null, route: '/service/2'};
//     case ITEM_SERVICE_SUCCESS:
//       const {item} = action.payload;
//       return {...state, item, loading: false, error: null, route: '/service/2'};
//     case ERROR_LIST_REQUEST:
//       return {...state, loading: false, error: true, route: '/'};
//     case ERROR_ITEM_REQUEST:
//       return {...state, loading: false, error: true, route: '/service/2'};
//     default:
//       return state;
//   }
// }
