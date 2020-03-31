import React from 'react'

export default function TableRow(props) {

    const Data = props.Data;
    const showRow =  Data.map((value,key)=>(
        <tr key={key}>
            <td>{value.Username}</td>
            <td>{value.Permission}</td>
            <td>{value.Sexual}</td>
            <td>{value.Telephone}</td>
        </tr>
    ))
    return (
        showRow
    )
}
