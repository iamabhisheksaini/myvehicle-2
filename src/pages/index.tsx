import React, { useState } from 'react';
import { Table } from 'antd';
import { Vehicle } from '../Components/types';
import vehicleData from '../Public/vehicle_data (1).json';
import SearchForm from '../Components/SearchForm';

const columns = [
  { title: 'Name', dataIndex: 'Name', key: 'Name' },
  { title: 'Model', dataIndex: 'Model', key: 'Model' },
  { title: 'Type', dataIndex: 'Type', key: 'Type' },
  { title: 'Manufacturer', dataIndex: 'Manufacturer', key: 'Manufacturer' },
  { title: 'Manufacturing Date', dataIndex: 'Manufacturing Date', key: 'ManufacturingDate' },
  { title: 'Seating', dataIndex: 'Seating', key: 'Seating' },
];

const HomePage: React.FC = () => {
  const [filteredData, setFilteredData] = useState(vehicleData);
  const handleSearch = (query: string) => {
    const filtered = vehicleData.filter((item: Vehicle) =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Vehicle Data App</h1>
      <SearchForm onSubmit={handleSearch} style={{ width: 200, marginBottom: '20px' }} />
      <Table dataSource={filteredData} columns={columns} />
    </div>
  );
};

export default HomePage;

