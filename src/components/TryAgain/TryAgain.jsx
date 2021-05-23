import React from 'react';  
import './TryAgain.css';

const TryAgain = ({words,characters,wpm,startAgain}) => {
    return(
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
            <p>
                <b>Characters :</b> {characters}
            </p>

            <p>
                <b>Words :</b> {words}
            </p>

            <p>
                <b>wpm :</b> {wpm} wpm
            </p>
            </div>
            <div>
                <button 
                    className="end-button start-again-btn"
                    onClick={()=> startAgain()}
                    >Retry</button>
                <button 
                    onClick= {() =>{
                        window.open("https://www.facebook.com/sharer/sharer.php?u=Great","facebook-share-dialog","width=800, height=600");
                    }}   
                    className="end-button share-btn">Share</button>
                <button 
                    onClick= {() =>{
                        window.open("https://www.twitter.com/intent/tweet?text=FlashType","Twitter","width=800, height=600");
                    }}   
                    className="end-button tweet-btn">Tweet</button>
            </div>

        </div>

    )
}



export default TryAgain;