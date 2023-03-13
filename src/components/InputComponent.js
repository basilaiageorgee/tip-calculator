import "./InputComponent.css"

const InputComponent = ({name, ICON, setValue}) => {
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return(
        <div className="input-container">
            <label for={name}>{name}</label>
            <div className="input-div">
                <img src={ICON}/>
                <input name={name} placeholder="0" onChange={handleChange}/>
            </div>
        </div>
    )
}

export default InputComponent