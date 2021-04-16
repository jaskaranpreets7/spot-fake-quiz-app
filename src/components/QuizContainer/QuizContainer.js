import React, { useState, useEffect } from 'react'
import Question from '../../common/Question/Question'
import ImageWrapper from '../../common/ImageWrapper/ImageWrapper'
import './quizContainer.css'
import * as images from '../../images'
import Counter from '../../common/Counter/Counter'
import Scoreboard from '../Scoreboard/Scoreboard'

const B = 1; //max size of 'cache'
let N = 0

const getRandomQuestion = (imgArr) => {
    let num = Math.floor(Math.random() * imgArr.length - N);
    N = Math.min(N + 1, B);
    let random = imgArr.splice(num,1);
    imgArr.push(random[0])
    return random[0]
}

export default function QuizContainer() {
    const allImages = images;
    const result = []
    const [questionNum, setQuestionNum] = useState(1)
    const [presentQuestion , setPresentQuestion] = useState(allImages[0])
    const [isSelected, setIsSelected] = useState(true)
    const [answerSelected, setAnswerSelected] = useState({})
    const [showScoreBoard, setShowScoreBoard] = useState(false)
    const [totalScores, setTotalScores] = useState(0)
    const [timeRemaing, setTimeRemaing] = useState(15)
    const [scoreboard, setScoreboard] = useState([])

    useEffect(() => {
        let timer ;
        if( timeRemaing > 0){
            timer = setInterval(()=>{
                setTimeRemaing(timeRemaing-1)
            }, 1000)
        }else if(timeRemaing === 0){
            setPresentQuestion(getRandomQuestion(allImages))
            setTimeRemaing(15)
        }else if( timeRemaing === 0 && questionNum === allImages.length){
            setShowScoreBoard(true)
        }
    
        return () => clearInterval(timer)
    }, [timeRemaing])

    const onNextQuestion = () => {
        if( questionNum !== allImages.length ){
            computeScores()
            setTimeRemaing(15)
            setIsSelected(true)
            setQuestionNum(questionNum+1)
            setPresentQuestion(getRandomQuestion(allImages))
        }else{
            computeScores()

            let obj = {}
            obj.timestamp = Date.now()
            obj.scores = totalScores
            result.push(obj)
            setShowScoreBoard(true)
            setScoreboard(result)
        }
    }

    const computeScores = () => {
        const CLEAN = 'clean'
        if( answerSelected?.default?.includes(CLEAN)){
            setTotalScores(totalScores+1)

        }else{
            setTotalScores(totalScores+0)
        }
    }

    const {label, clean, fake } = presentQuestion 
    return (
        <div className="quiz-container">
            { !showScoreBoard ?
                <>
                    <div className="quiz-counter-wrapper">
                        <Question questionNumber={questionNum} label={label}/>
                        <Counter timeRemaing={timeRemaing}/>
                    </div>
                    <div className="images-container">
                        <ImageWrapper onClickHandler={() => {setIsSelected(false); setAnswerSelected(clean) }} imgSrc={clean.default}/>
                        <ImageWrapper onClickHandler={() => {setIsSelected(false); setAnswerSelected(fake) }} imgSrc={fake.default}/>
                    </div>
                    <div>
                        <button disabled={isSelected} onClick={onNextQuestion}>
                            Next
                        </button>
                    </div>
                </>
                :
                <div>
                    <Scoreboard scores={scoreboard}/>
                </div>
            }
            
        </div>
    )
}
