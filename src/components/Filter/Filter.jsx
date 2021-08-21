import React from 'react';
import shortid from 'shortid';
import s from '../Filter/Filter.module.css'

export default function Filter({ value, onChange }) {
    return (
        <label className={s.label}
            htmlFor={shortid.generate()}>
            Find contact by name
            <input className={s.input}
                name="filter"
                type='text'
                value={value}
                onChange={onChange}/>
        </label>
    )
}