import React from 'react'
import {useState,useRef} from "react";

const Input = ({setItems}) => {

    const form = useRef()

    const createItemObject = (e) => {
        e.preventDefault()
        const formElement = form.current
        const formData = new FormData(formElement)

        const itemObject = {}

        for (const pair of formData.entries()) {
            itemObject[pair[0]] = pair[1]
        }

        console.log(Object.entries(itemObject))
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
                <button className={'btn'} onClick={createItemObject}>add to</button>
            </div>

        </form>
    )
}

export default Input