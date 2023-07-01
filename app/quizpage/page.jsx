'use client'
import React, { useState } from 'react'
import { FaBeer } from "react-icons/fa";
import styles from '../quizpage.module.css';



const Quizpage = () => {
    const [quiz,SetQuiz] = useState([
        {
            question : 'what is your favorite beer?',
            option1: 'ruslain',
            option2: 'gorkha',
            option3: 'golden beer',
            option4: 'correct beer',
            ans: "correct beer",
        },
        {
            question : 'what is your favorite food?',
            option1: 'a',
            option2: 'b',
            option3: 'c',
            option4: 'correct d',
            ans : "correct d",
        },
    ])
    const [currentquiz,setCurrentQuiz] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [score ,setScore] = useState(0)
    const[history,setHistory] = useState([])
    // console.log(selectedAnswer)

    const HandleSubmit = (e) => {
        e.preventDefault();
        const currentQuestion = quiz[currentquiz];
    if (selectedAnswer === currentQuestion.ans) {
      console.log('Correct answer!');
      setScore(score+1)
    } else {
      console.log('Incorrect answer!');
    }
    setHistory([...history,{...quiz[currentquiz],myans:selectedAnswer}])
    console.log(quiz.length)
    if (quiz.length-1 == currentquiz)
    {
        console.log('thank for playing')
    }
    else {

        setCurrentQuiz(currentquiz + 1);
    }
    setSelectedAnswer('');

    };
    console.log('history history',history)
    // const handleNext = () => {
    //     // console.log('curent sq',currentQuestion)
    //     // console.log('hello')
    //     // const currentQuestion = quiz[currentquiz];
    //     // SetQuiz([ ...quiz, current])

    //     HandleSubmit();


    // };

    return (
        <div style={{
            backgroundImage: "url('/img/bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
        }}>

            <div className='flex flex-row p-6 justify-between'>
                <div>
                    <img src="https://jthemes.net/themes/html/quizo/version-6/assets/images/logo/logo.png" alt="dd" />
                </div>
                <div>
                    <h3 className='text-[#c0cf4b] '>
                        Score:  {score} <FaBeer />?
                    </h3>
                </div>
            </div>



            <div className='w-3/4 mx-auto bg-white  rounded-md my-auto '>
                <div className='text-center relative font-bold text-2xl text-[#2F3146] h-40 rounded-md bg-[#bfc0c4]'>
                    <div className='flex h-full '>
                        <h1 className='my-auto mx-auto'>{quiz[currentquiz].question}</h1>

                    </div>
                    <div className="inline-block rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-[10rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Question {currentquiz+1} to {quiz.length}</div>
                </div>
                
                <form className='my-10 text-center' onSubmit={HandleSubmit} >
                    <ul className='list-none grid grid-rows-2 grid-flow-col gap-4'>
                        <li>
                            <input type="radio" value={quiz[currentquiz].option1}
                            checked={selectedAnswer === quiz[currentquiz].option1}
                            onChange={(e)=>{setSelectedAnswer(e.target.value)}} name="options" id="a" />
                            <label htmlFor="a" className='radiolabel'>{quiz[currentquiz].option1}</label>
                        </li>
                        <li>
                            <input type="radio" value={quiz[currentquiz].option2}
                            checked={selectedAnswer === quiz[currentquiz].option2}
                            onChange={(e)=>{setSelectedAnswer(e.target.value)}} name="options" id="b"  />
                            <label htmlFor="b">{quiz[currentquiz].option2}</label>
                        </li>
                        <li>
                            <input type="radio" value={quiz[currentquiz].option3}
                            checked={selectedAnswer === quiz[currentquiz].option3}
                            onChange={(e)=>{setSelectedAnswer(e.target.value)}} name="options" id="c" />
                            <label htmlFor="c">{quiz[currentquiz].option3}</label>
                        </li>
                        <li>
                            <input type="radio" value={quiz[currentquiz].option4}
                            checked={selectedAnswer === quiz[currentquiz].option4}
                            onChange={(e)=>{setSelectedAnswer(e.target.value)}} name="options" id="d" />
                            <label htmlFor="d">{quiz[currentquiz].option4}</label>
                        </li>

                    </ul>
                    {
                        currentquiz+1 == quiz.length ? <button type='submit'>Submit</button>:<button type='submit'>Next</button>
                    }

                    
                </form>
                <div className='text-center relative font-bold text-2xl text-[#2F3146] h-20 rounded-md bg-[#bfc0c4]'>
                   
                </div>


            </div>

        </div>

    )
}

export default Quizpage