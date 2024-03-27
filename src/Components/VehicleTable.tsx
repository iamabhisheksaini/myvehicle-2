import React from 'react';

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  // Add more fields as per your JSON structure
}

interface VehicleTableProps {
  vehicles: Vehicle[];
}

const VehicleTable: React.FC<VehicleTableProps> = ({ vehicles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          {/* Add more table headings as per your JSON structure */}
        </tr>
      </thead>
      <tbody>
        {vehicles.map(vehicle => (
          <tr key={vehicle.id}>
            <td>{vehicle.id}</td>
            <td>{vehicle.make}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.year}</td>
            {/* Add more table cells as per your JSON structure */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VehicleTable;
