import React from 'react'
import { useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';



export default function CartComponent() {

    const { carts } = useSelector(s => s.ProductCartReducer);

    const columns = [
        // { field: 'id', headerName: 'STT', width: 50 },
        { field: 'name', headerName: 'Product name', width: 150 },
        { field: 'price', headerName: 'Price', width: 60 },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 70,
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={carts}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}
