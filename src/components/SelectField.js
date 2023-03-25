import React, { useState } from 'react';
  
const SelectField = (props) => {
    const { label, options } = props;
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <div className='form-inline form-horizontal mt-3'>
                <label htmlFor={label}><b>{label}</b></label>
                <div className="form-group">
                    <select className='form-control' value={value} label={label} onChange={handleChange}>
                        {options.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
  
export default SelectField;