const InputText = ({textePlaceHolder, bgColor, borderColor, textColor}) => {
    return(
        <div>
            <input type="text" className={`rounded-full border-2 py-1 px-5 ${borderColor} ${bgColor} ${textColor}`} placeHolder={(textePlaceHolder ? textePlaceHolder : 'Default place holder')}/>
        </div>
    )
}

// USAGE EXAMPLE:
// <input textPlaceHolder='Test' borderColor='border-red-400' bgColor='bg-red-300' textColor='text-white'/>

export default InputText;