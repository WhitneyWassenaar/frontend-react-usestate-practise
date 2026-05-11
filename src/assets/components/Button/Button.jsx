import "./Button.css";

function Button({buttonText, onClick, type}) {
    return (
        <button className="button" onClick={onClick} type={type} >{buttonText}</button>
    )
}

export default Button;