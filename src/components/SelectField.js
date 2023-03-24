import React, { useState } from 'react';
  
const SelectField = (props) => {
    const { label } = props;
    const [value, setValue] = useState('');

    const handleChange = () => {}
    return (
        <div>
            <div className='form-inline form-horizontal'>
                <label htmlFor={label}><b>{label}</b></label>
                <div className="form-group">
                    <select className='form-control' value={value} label={label} onChange={handleChange}>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                        <option>Option4</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
  
export default SelectField;