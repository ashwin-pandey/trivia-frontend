import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';
  
const TextField = (props) => {

    const dispatch = useDispatch();
    const handleChange = (e) => {
        console.log('Amount of questions: ', e.target.value);
        dispatch(handleAmountChange(e.target.velue));
    }
    return (
        <div>
            <div className='form-inline form-horizontal mt-3'>
                <label htmlFor="Number of questions?"><b>Number of questions?</b></label>
                <div className="form-group">
                    <input type='number' className='form-control' label='Number of questions?' onChange={handleChange} />
                </div>
            </div>
        </div>
    );
}
  
export default TextField;