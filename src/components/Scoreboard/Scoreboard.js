import React from 'react'
import { Link } from 'react-router-dom'

export default function Scoreboard({ scores }) {
    const renderScores = () => {
        return scores.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.timestamp}</td>
                    <td>{item.scores}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table style={{width:'50%'}}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Scores</th>
                    </tr>
                </thead>
                <tbody>
                    {renderScores()}
                </tbody>
            </table>
            <div>
                <Link to="/">
                    Restart
                </Link>
            </div>
        </div>
    )
}
