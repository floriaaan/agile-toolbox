const Button = ({content, bgColor, borderColor, textColor}) => {
    return(
        <div>
            <button className={`rounded-full border-2 py-1 px-5 ${borderColor} ${bgColor} ${textColor} mt-2`}>{content ? content : 'Button'}</button>
        </div>
    )
}

// USAGE EXAMPLE:
// <Button content='Test' borderColor='border-red-400' bgColor='bg-red-300' textColor='text-white'/>

export default Button;