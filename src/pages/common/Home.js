import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../questions/Questions';

function Home (){

    let navigate = useNavigate();

    const settingsRoute = () => {
        return navigate('/settings');
    };

    return (
        <div className='home-page container'>
            <div className='row'>
                <div className="col-lg-6 col-12 mx-auto text-center">
                    <h1 className='page-header'><img src="t-key.png" className='trivia-image pb-2' width={50} height={50} alt="" srcset="" /> Trivia</h1>
                    <div className="card pt-5 pb-5">
                        <div className="card-body">
                            <p>Welcome to the Trivia application.</p>
                            <button className='btn btn-secondary' onClick={settingsRoute}>Begin!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Home;