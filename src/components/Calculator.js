import { useState } from "react"
import InputComponent from "./InputComponent"
import dolarIcon from "../images/icon-dollar.svg"
import personIcon from "../images/icon-person.svg"
import ButtonsPack from "./ButtonsPack"
import ResultsComponent from "./ResultsComponent"
import "./Calculator.css"

const Calculator = () => {
    const [bill, setBill] = useState(null)
    const [people, setPeople] = useState(null) 
    const [tip, setTip] = useState(0)

    return(
        <div className="calculator-container">
            <div className="calculator-main">
            <InputComponent name="Bill" ICON={dolarIcon} setValue={setBill} value={bill}/>
            <ButtonsPack handler={setTip}/>
            <InputComponent name="Number of People" ICON={personIcon} setValue={setPeople} value={people}/>
            </div>

            <div>
                <ResultsComponent billAmount={bill} peopleAmount={people} tipAmount={tip}
                                  billValueSetter={setBill} peopleValueSetter={setPeople} tipValueSetter={setTip}
                />
            </div>
        </div>
    )
}

export default Calculator