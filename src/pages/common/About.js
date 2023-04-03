import React from 'react';
  
function About (){
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-12 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                About Trivia
                            </h2>
                            <hr />
                            <p>
                                This is an simple application to practice Trivia or test yourself with MCQs and True/False type questions.
                            </p>
                            <p>
                                You can practice/test with multiple categories.
                            </p>
                            <p>
                                Each iteration consists of 10 sets of questions, based on your selection of category in the form of MCQ or True/False.
                            </p>
                            <p>
                                Settings consists of category selection, difficulty level, and type of questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default About;