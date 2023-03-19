import "./InputComponent.css"

const InputComponent = ({name, ICON, setValue, value}) => {
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return(
        <div className="input-container">
            <label for={name}>{name}</label>
            <div className="input-div">
                <img src={ICON}/>
                <input name={name} placeholder="0" value={value} onChange={handleChange}/>
            </div>
        </div>
    )
}




export default InputComponent