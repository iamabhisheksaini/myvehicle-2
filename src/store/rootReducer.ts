// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import vehicleReducer from '../Components/slices/vehicleSlice';
// Import other slice reducers as needed

const rootReducer = combineReducers({
  vehicle: vehicleReducer,
  // Add other slice reducers here
});

export default rootReducer;
