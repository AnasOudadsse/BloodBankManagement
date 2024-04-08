import React, { useState } from 'react';

const InlineEditTable = () => {
  const initialData = [
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 15 },
    { id: 3, name: 'Item 3', quantity: 20 },
  ];

  const [data, setData] = useState(initialData);
  const [editCell, setEditCell] = useState({ row: -1, column: '' });

  const handleEdit = (rowIndex, columnKey) => {
    setEditCell({ row: rowIndex, column: columnKey });
  };

  const handleChange = (event, rowIndex, columnKey) => {
    const newData = [...data];
    newData[rowIndex][columnKey] = event.target.value;
    setData(newData);
  };

  const handleBlur = () => {
    setEditCell({ row: -1, column: '' });
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="w-32">Name</th>
          <th className="w-32">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.id}>
            <td className="w-32 p-2" onClick={() => handleEdit(rowIndex, 'name')}>
              {editCell.row === rowIndex && editCell.column === 'name' ? (
                <input
                  className="w-full p-2"
                  type="text"
                  value={row.name}
                  onChange={(e) => handleChange(e, rowIndex, 'name')}
                  onBlur={handleBlur}
                  autoFocus
                />
              ) : (
                row.name
              )}
            </td>
            <td className="w-32 p-2" onClick={() => handleEdit(rowIndex, 'quantity')}>
              {editCell.row === rowIndex && editCell.column === 'quantity' ? (
                <input
                  className="w-full p-2"
                  type="number"
                  value={row.quantity}
                  onChange={(e) => handleChange(e, rowIndex, 'quantity')}
                  onBlur={handleBlur}
                  autoFocus
                />
              ) : (
                row.quantity
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InlineEditTable;
