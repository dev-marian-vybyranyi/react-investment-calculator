import React from 'react'

const Results = ({ userInput }) => {

    return (
        <section id="results">
            <h2>Results</h2>
            <p>{userInput.initialInvestment}</p>
            <p>{userInput.annualInvestment}</p>
            <p>{userInput.expectedReturn}</p>
            <p>{userInput.duration}</p>
        </section>
    )
}

export default Results