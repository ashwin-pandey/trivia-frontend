import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    handleCategoryChange, 
    handleDifficultyChange, 
    handleTypeChange 
} from '../redux/actions';
  
const SelectField = (props) => {
    const { label, options } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        switch(label) {
            case "Category":
                console.log('Category: ', e.target.value);
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                console.log('Difficulty: ', e.target.value);
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Type":
                console.log('Type: ', e.target.value);
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
    }
    return (
        <div>
            <div className='form-inline form-horizontal mt-3'>
                <label htmlFor={label}><b>{label}</b></label>
                <div className="form-group">
                    <select className='form-control' value={value} label={label} onChange={handleChange}>
                        <option value="default" key="default">-- Select --</option>
                        {options.map(({ id, name }) => (
                            <option value={id} key={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
  
export default SelectField;