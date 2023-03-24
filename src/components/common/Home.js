import React from 'react';
  
function Home (){
    return (
        <div className='home-page container'>
            <div className='row'>
                <div className="col">
                    <h2 className='page-header'>Trivia</h2>
                    <div className="card">
                        <div className="card-body">
                            <p>Welcome to this Trivia application.</p>
                            <button className='btn btn-secondary'>Begin!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Home;