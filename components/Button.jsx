const Button = ({content, bgColor, borderColor, textColor}) => {
    return(
        <div>
            <button className={`rounded-full border-2 py-1 px-5 ${borderColor} ${bgColor} ${textColor}`}>{content ? content : 'Button'}</button>
        </div>
    )
}

export default Button;