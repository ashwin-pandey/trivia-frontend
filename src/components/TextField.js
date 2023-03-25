import React, { useState } from 'react';
  
const TextField = (props) => {

    const handleChange = () => {}
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