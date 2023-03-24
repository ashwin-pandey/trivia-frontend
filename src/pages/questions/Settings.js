import React from 'react';
import SelectField from '../../components/SelectField';
import TextField from '../../components/TextField';
  
function Settings (){

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-12 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Settings</h2>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <SelectField label="Category" />
                                <SelectField label="Difficulty" />
                                <SelectField label="Type" />
                                <TextField />
                                <hr />
                                <button className='btn btn-secondary' type='submit'>Get Started!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Settings;