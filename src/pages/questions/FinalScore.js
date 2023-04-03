import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
  
function FinalScore (){
    const { score, amount_of_question } = useSelector(state => state);

    const navigate = useNavigate();
    const goHome = () => {
        return navigate('/');
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-12 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Final Score</h2>
                            <hr />
                            <div className="text-center">
                                <h4 className="score">
                                    {score} / {amount_of_question}
                                </h4>

                                <hr />
                                <a className='btn btn-secondary' onClick={goHome}>Start Again</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default FinalScore;