import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns, pageSize }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      pagination
      pageSize={pageSize}
      disableSelectionOnClick
    />
  );
};

export default DataTable;
