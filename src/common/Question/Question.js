import React from 'react'

export default function Question({ questionNumber, label }) {
    return (
        <div>
            <h2>{questionNumber}. Indentify the fake image of {label} : </h2>
        </div>
    )
}
