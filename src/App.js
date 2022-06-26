import React from 'react';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './components/Table';


const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      date: '2/07/20',
      phone: '08143567241',
      program: 'Car',
      age: 27,
      imgurl: '',
      status: 'Block',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      date: '21/11/22',
      phone: '07034567213',
      program: 'Keke',
      age: 43,
      imgurl: '',
      status: 'Block',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      date: '31/3/19',
      phone: '08034567124',
      program: 'Sewing Machine',
      age: 32,
      imgurl: '',
      status: 'Block',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      date: '30/04/21',
      phone: '09045672378',
      program: 'Keke',
      age: 29,
      imgurl: '',
      status: 'Block',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      date: '15/09/22',
      phone: '09087654321',
      program: 'Sewing Machine',
      age: 36,
      imgurl: '',
      status: 'Block',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      date: '30/10/22',
      phone: '08067452319',
      program: 'Car',
      age: 24,
      imgurl: '',
      status: 'Block',
    },
  ]
  return [...data, ...data, ...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "img",
      emailAccessor: "email",
    },
    {
      Header: "Phone",
      accessor: 'phone',
    },
    {
      Header: "Date",
      accessor: 'date',
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "Program",
      accessor: 'program',
    },
    {
      Header: "Status",
      accessor: "status",
    }
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
