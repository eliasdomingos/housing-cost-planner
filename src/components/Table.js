import React from "react";

const Table = ({items}) => {
    return (
        <table id={'itemTable'}>
            <thead>
                <tr>
                    <th>product name</th>
                    <th>amount</th>
                    <th>costs per unit</th>
                    <th>total costs</th>
                </tr>

            </thead>
            <tbody>
            {Object.values(items).map((row, index) => {
                return (
                    <tr key={`row-${index}`}>
                        <td key={`name-${index}`}>{row['productInput-form-input-name']}</td>
                        <td key={`amount-${index}`}>{row['productInput-form-input-amount']}</td>
                        <td key={`costPerUnit-${index}`}>{row['productInput-form-input-costPerUnit']}</td>
                        <td key={`totalCost-${index}`}>{row['productInput-form-input-totalCost']}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Table