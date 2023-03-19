import "./ResultsComponent.css"

const ResultsComponent = ({billAmount, tipAmount, peopleAmount, billValueSetter, peopleValueSetter, tipValueSetter}) => {
    const tip = ((billAmount/100) * tipAmount) / peopleAmount
    const total = (billAmount / peopleAmount) + tip

    const handleClick = () => {
        billValueSetter(0)
        peopleValueSetter(0)
        tipValueSetter(0)
    }

    return(
        <div className="results-container">
            <div className="tipamount-container">
                <div>
                    <p className="amount-p">Tip Amount</p>
                    <p className="person-p">/ person</p>
                </div>
                
                {tip ? <p className="amount1">${tip.toFixed(2)}</p> : <p className="amount1">$0.00</p>}

            </div>

            <div className="totalAmount-container">
                <div>
                    <p className="amount-p">Total</p>
                    <p className="person-p">/ person</p>
                </div>

                {total ? <p className="amount2">${total.toFixed(2)}</p> : <p className="amount1">$0.00</p>}

            </div>


            <div className="reset-button">
                <button onClick={handleClick}>RESET</button>
            </div>
        </div>
    )
}

export default ResultsComponent