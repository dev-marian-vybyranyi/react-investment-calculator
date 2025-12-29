import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
    const investmentResults = calculateInvestmentResults(userInput);
    console.log(investmentResults);

    return (
        <section id="results">
            <h2>Results</h2>
        </section>
    );
};

export default Results;
