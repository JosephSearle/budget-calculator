import './Income.css';
 
export default function Income({ income, handleIncome }) {

    function handleIncomeInput(event) {
        const val = event.target.value;
        if (onlyContainsNumbers(val) || val === '') handleIncome(val);
    }

    const onlyContainsNumbers = (str) => /^\d*(\.\d*)?$/.test(str);

    return (
        <section id='income-section'>
            <span id="input-container">
                <label>Monthly Income</label>
                <input type='text' value={income} onChange={handleIncomeInput}/>
            </span>
        </section>
    );
}