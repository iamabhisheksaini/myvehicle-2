import { Vehicle } from '../Components/types';

export const mapJsonToVehicle = (jsonData: any): Vehicle => {
  const { Name, Model, Manufacturer, "Manufacturing Date": manufacturingDate, Seating } = jsonData;
  const manufacturingYear = new Date(manufacturingDate).getFullYear();

  const generateUniqueId = (): string => {
    // Replace with your implementation to generate a unique number ID
    return '1'; // Convert the number to a string
  };

  const vehicle: Vehicle = {
    id: generateUniqueId(),
    Name,
    Model,
    Type: '', // Assuming you have a default value for Type
    Manufacturer,
    Seating,
  };

  return vehicle;
};

