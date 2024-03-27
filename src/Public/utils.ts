// src/utils.ts
import { Vehicle } from '../Components/types';




export const mapJsonToVehicle = (jsonData: any): Vehicle => {
  // Map JSON data to the Vehicle interface
  const { Name, Model, Manufacturer, "Manufacturing Date": manufacturingDate, Seating } = jsonData;
  const manufacturingYear = new Date(manufacturingDate).getFullYear();

  // Generate a unique ID for each vehicle
  const generateUniqueId = (): number => {
    // Replace with your implementation to generate a unique number ID
    return 1; 
  };

  // Create a Vehicle object
  const vehicle: Vehicle = {
    id: generateUniqueId(), // Call generateUniqueId function to get unique ID
    make: Manufacturer,
    model: Model,
    year: manufacturingYear,
    // Add other properties as needed
  };

  return vehicle;
};
