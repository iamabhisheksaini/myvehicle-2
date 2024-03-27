// vehicleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VehicleState {
  // Define your slice state interface
}

const initialState: VehicleState = {
  // Initial state
};

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    // Define your slice reducers
  },
});

// Define RootState type directly within the slice file
type RootState = ReturnType<typeof vehicleSlice.reducer>;

// Selectors
export const selectVehicle = (state: RootState) => state; // Use RootState type

export default vehicleSlice.reducer;
// vehicleSlice.ts
export const { action1, action2 } = actions;

