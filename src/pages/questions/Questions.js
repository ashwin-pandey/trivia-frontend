import React from 'react';
import useAxios from '../../hooks/useAxios';
  
function Questions (){

    let apiUrl = `/api.php?amount=10`
    const { response, error, loading } = useAxios({ url: apiUrl });
    // console.log(response);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 mx-auto">
                    <div className="card">
                        <h2 className="card-header text-center">Questions</h2>
                        <div className="card-body">
                            <h4 className="card-title">Question 1</h4>
                            <hr />
                            <button className='btn btn-secondary form-control mt-3'>Answer</button>
                            <button className='btn btn-secondary form-control mt-3'>Answer</button>
                            <button className='btn btn-secondary form-control mt-3'>Answer</button>
                            <button className='btn btn-secondary form-control mt-3'>Answer</button>

                            <div className="score text-center mt-5">
                                Score: 2/10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Questions;