import "./Button.css"

const Button = ({percent, buttonHandler}) => {
    return(
        <div className="button-div">
            <button className="button" onClick={() => buttonHandler(percent)}>{percent}%</button>
        </div>
    )
}

export default Button