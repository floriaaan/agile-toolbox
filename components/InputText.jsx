const InputText = ({ textPlaceHolder, bgColor, borderColor, textColor }) => {
  return (
    <div>
      <input
        aria-label={textPlaceHolder}
        type="text"
        className={`rounded-full border-2 py-1 px-5 ${borderColor} ${bgColor} ${textColor} mt-2`}
        placeholder={textPlaceHolder || "Default place holder"}
      />
    </div>
  );
};

// USAGE EXAMPLE:
// <input aria-label="text" textPlaceHolder='Test' borderColor='border-red-400' bgColor='bg-red-300' textColor='text-white'/>

export default InputText;
