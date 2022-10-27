const Text = ({ text, height, width, textColor }) => {
    return (
      <div>
        <p className={`py-1 px-5 ${height} ${width} ${textColor}`} >
            ${text}
        </p>
      </div>
    );
  };
  
  // USAGE EXAMPLE:
  // <p line-height='30px' font-size='16px' textColor='text-white'> Example </p>
  
  export default Text;
  