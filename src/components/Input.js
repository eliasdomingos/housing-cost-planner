import React from 'react'
import {useState,useRef} from "react";

const Input = ({setItems, items, rows, setRows}) => {

    const form = useRef()

    const createItemObject = () => {
        const formElement = form.current
        const formData = new FormData(formElement)
        const currRow = rows
        const newTableRow = {}

        const itemObject = {}

        for (const pair of formData.entries()) {
            if (pair[1] === '') {
                alert('fill all fields')
                return;
            }else {
                itemObject[pair[0]] = pair[1]
            }
        }

        newTableRow[currRow] = itemObject
        const newItems = {...items, ...newTableRow}

        localStorage.setItem('items', JSON.stringify(newItems))

        setItems(newItems)
        setRows(currRow + 1)
    }


    const addNewItem = (e) => {
        e.preventDefault()

        createItemObject()
    }
    return (
        <form id={'productInput-form'} ref={form}>
            <div className="productInput-form-input-container">
                <input required={true} type="text" name={'productInput-form-input-name'}/>
                <label htmlFor="{'productInput-form-input-name'}">product name</label>
            </div>
            <div className="productInput-form-input-container">
                <input required={true} type="number" name={'productInput-form-input-amount'}/>
                <label htmlFor="productInput-form-input-amount">amount</label>
            </div>
            <div className="productInput-form-input-container">
                <input required={true} type="number" name={'productInput-form-input-costPerUnit'}/>
                <label htmlFor="productInput-form-input-costPerUnit">cost per unit</label>
            </div>
            <div className="productInput-form-input-container">
                <input required={true} type="number" name={'productInput-form-input-totalCost'}/>
                <label htmlFor={'productInput-form-input-totalCost'}>total cost</label>
            </div>
            <div className="productInput-form-input-container">
                <button className={'btn'} onClick={addNewItem}>add to</button>
            </div>

        </form>
    )
}

export default Input