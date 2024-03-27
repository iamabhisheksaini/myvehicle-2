// In your index.tsx file
// import React from 'react';
// import vehicleData from '../Public/vehicle_data (1).json'
// import VehicleTable from '@/Components/VehicleTable'; // Import the VehicleTable component
// import { Vehicle } from '@/Components/types';
// import { mapJsonToVehicle } from '@/Public/utils';


// const HomePage: React.FC = () => {
//   // Map JSON data to the Vehicle interface
//   const vehicles: Vehicle[] = vehicleData.map((data: any) => mapJsonToVehicle(data));

//   return (
//     <div>
//       <h1>Welcome to the Vehicle Data App</h1>
//       <VehicleTable vehicles={vehicles} />
//     </div>
//   );
// };

// export default HomePage;


// src/pages/index.tsx

// import React from 'react';
// import { Table } from 'antd';
// import { Vehicle } from '../Components/types';
// import vehicleData from '../Public/vehicle_data (1).json';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'Name',
//     key: 'Name',
//   },
//   {
//     title: 'Model',
//     dataIndex: 'Model',
//     key: 'Model',
//   },
//   {
//     title: 'Type',
//     dataIndex: 'Type',
//     key: 'Type',
//   },
//   {
//     title: 'Manufacturer',
//     dataIndex: 'Manufacturer',
//     key: 'Manufacturer',
//   },
//   {
//     title: 'Manufacturing Date',
//     dataIndex: 'ManufacturingDate',
//     key: 'ManufacturingDate',
//   },
//   {
//     title: 'Seating',
//     dataIndex: 'Seating',
//     key: 'Seating',
//   },
// ];

// const HomePage: React.FC = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Welcome to the Vehicle Data App</h1>
//       <Table dataSource={vehicleData} columns={columns} />
//     </div>
//   );
// };

// export default HomePage;




// src/pages/index.tsx

import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Vehicle } from '../Components/types';
import vehicleData from '../Public/vehicle_data (1).json';

const { Search } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Model',
    dataIndex: 'Model',
    key: 'Model',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'Manufacturer',
    key: 'Manufacturer',
  },
  {
    title: 'Manufacturing Date',
    dataIndex: 'ManufacturingDate',
    key: 'ManufacturingDate',
  },
  {
    title: 'Seating',
    dataIndex: 'Seating',
    key: 'Seating',
  },
];

const HomePage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <button
          type="button"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </button>
        <button onClick={() => handleReset(clearFilters)} style={{ width: 90 }}>
          Reset
        </button>
      </div>
    ),
    filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: any, record: any) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => document.getElementById('search-input')?.select(), 100);
      }
    },
  });

  const filteredColumns = columns.map((col) => ({
    ...col,
    ...getColumnSearchProps(col.dataIndex),
  }));

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Vehicle Data App</h1>
      <Search
        id="search-input"
        placeholder="Search..."
        onSearch={(value) => console.log(value)} // Replace with your search logic
        style={{ width: 200, marginBottom: '20px' }}
      />
      <Table dataSource={vehicleData} columns={filteredColumns} />
    </div>
  );
};

export default HomePage;
