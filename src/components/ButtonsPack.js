import Button from "./Button"
import "./ButtonsPack.css"

const ButtonsPack = ({handler}) => {
    const handleChange = (e) => {
        handler(e.target.value)
    }


    return(
        <div className="buttonpack-container">
            <p>Select Tip %</p>

            <div className="pack-1"  >
                <Button percent="5"  buttonHandler={handler}/>
                <Button percent="10" buttonHandler={handler}/>
                <Button percent="15" buttonHandler={handler}/>
            </div>

            <div className="pack-2">
                <Button percent="25" buttonHandler={handler}/>
                <Button percent="50" buttonHandler={handler}/>
                <div>
                    <input placeholder="Custom" onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
}

export default ButtonsPack