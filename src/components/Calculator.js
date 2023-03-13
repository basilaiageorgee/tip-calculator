import { useState } from "react"
import InputComponent from "./InputComponent"
import dolarIcon from "../images/icon-dollar.svg"
import personIcon from "../images/icon-person.svg"
import ButtonsPack from "./ButtonsPack"
import ResultsComponent from "./ResultsComponent"
import "./Calculator.css"

const Calculator = () => {
    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState(0) 
    const [tip, setTip] = useState(0)

    return(
        <div className="calculator-container">
            <div className="calculator-main">
            <InputComponent name="Bill" ICON={dolarIcon} setValue={setBill}/>
            <ButtonsPack handler={setTip}/>
            <InputComponent name="Number of People" ICON={personIcon} setValue={setPeople} />
            </div>

            <div>
                <ResultsComponent billAmount={bill} peopleAmount={people} tipAmount={tip}/>
            </div>
        </div>
    )
}

export default Calculator