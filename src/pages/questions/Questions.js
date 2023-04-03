import { decode } from 'html-entities';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { handleScoreChange } from '../../redux/actions';
  
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

function Questions (){

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let apiUrl = `/api.php?amount=${amount_of_question}`;
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&diffculty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }

    const { response, error, loading } = useAxios({ url: apiUrl });
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [response, questionIndex]);

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

    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === question.correct_answer) {
            dispatch(handleScoreChange(score + 1));
        }
        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate('/score');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 mx-auto">
                    <div className="card">
                        <h2 className="card-header text-center">Questions { questionIndex + 1 }</h2>
                        <div className="card-body">
                            <h4 className="card-title">{decode(response.results[questionIndex].question)}</h4>
                            <hr />
                            {options.map((data, id) => (
                                <button onClick={handleClickAnswer} key={id} className='btn btn-secondary form-control mt-3'>{decode(data)}</button>
                            ))}
                            <div className="score text-center mt-5">
                                Score: {score}/{response.results.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Questions;