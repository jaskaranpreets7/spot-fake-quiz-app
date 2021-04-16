import React from 'react'
import { Link } from 'react-router-dom'
import './instruction.css'

export default function Instructions() {
    return (
        <div className="instruction-container">
            <div>
                <h1>Welcome to spot the fake quiz game</h1>
            </div>
            <div>
                <h3>Instructions : </h3>
                <ol>
                    <li>
                        Identify fake image. You will given 10 questions with 2 images
                    </li>
                    <li>
                        You have 15 seconds to answer
                    </li>
                    <li>
                        Correct answer give you 1 point
                    </li>
                </ol>
            </div>
            <div>
                <Link to="/quiz">
                    Let's Play
                </Link>
            </div>

        </div>
    )
}
