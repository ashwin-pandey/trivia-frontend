import React, { useEffect, useState } from 'react';
import SelectField from '../../components/SelectField';
import TextField from '../../components/TextField';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleScoreChange } from '../../redux/actions';
  
function Settings (){
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    dispatch(handleScoreChange(0));

    if (loading) {
        return (
            <div className="loading container text-center mt-5 pt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='container'>
                <div class="alert alert-danger" role="alert">
                    {error.message}
                    <button className='btn btn-danger mr-0' onClick={navigate('/')}>Go Home!</button>
                </div>
            </div>
        );
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" }
    ]
    
    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/questions');
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-12 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Settings</h2>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <SelectField options={response.trivia_categories} label="Category" />
                                <SelectField options={difficultyOptions} label="Difficulty" />
                                <SelectField options={typeOptions} label="Type" />
                                {/* <TextField /> */}
                                <hr />
                                <div className="text-center">
                                    <button className='btn btn-secondary' type='submit'>Get Started!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Settings;