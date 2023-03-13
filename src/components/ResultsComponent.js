import "./ResultsComponent.css"

const ResultsComponent = ({billAmount, tipAmount, peopleAmount}) => {
    const tip = ((billAmount/100) * tipAmount) / peopleAmount
    const total = (billAmount / peopleAmount) + tip

    return(
        <div className="results-container">
            <div className="tipamount-container">
                <div>
                    <p className="amount-p">Tip Amount</p>
                    <p className="person-p">/ person</p>
                </div>

                <p className="amount1">${tip.toFixed(2)}</p>
            </div>

            <div className="totalAmount-container">
                <div>
                    <p className="amount-p">Total</p>
                    <p className="person-p">/ person</p>
                </div>

                <p className="amount2">${total.toFixed(2)}</p>
            </div>


            <div className="reset-button">
                <button>RESET</button>
            </div>
        </div>
    )
}

export default ResultsComponent