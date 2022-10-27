const Cursor = ({ min, max, value, step }) => {
    return (
      <div>
        <input
          type="range" 
          min={min || "0"}
          max={max || "10"}
          value={value || "5"}
          step={step || "1"}
          className={`rounded-full border-2 py-1 px-5`}
        />
      </div>
    );
  };
  
  // USAGE EXAMPLE:
  // <input type="range" min="0" max="10" value="5" step="1"/>
  
  export default Cursor;