import React from 'react'

export default function ImageWrapper({ onClickHandler, imgSrc }) {
    return (
        <div onClick={onClickHandler}>
            <img alt={imgSrc} src={imgSrc} style={{width:'100%', height:'100%'}}/>
        </div>
    )
}
