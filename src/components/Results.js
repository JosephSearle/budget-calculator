import './Results.css'

export default function Results({ gross }) {

    let posOrNeg = 'positive';

    if (gross < 0) posOrNeg = 'negative';

    return (
        <section id="result-section">
            <label>Gross Income:</label>
            <label id={'result-' + posOrNeg}> £{gross}</label>
        </section>
    );
}