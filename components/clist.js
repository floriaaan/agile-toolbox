import React from "react";
import {useState} from "react";

export default function Clist({choices,maxChoicesNumber,clabel}) {
    const [selectedValue, setSelectedValue] = useState("");
    const [nbSelected, setNbSelected] = useState(0);


    if(clabel == null || clabel == "")
    {
        clabel = "select an option"
    }
    function valueIsSelected(value)
    {
        const isSelected = selectedValue.split(";").some(v => (v === value));
        console.log(selectedValue);
        console.log(selectedValue.split(";"));
        return isSelected;
    }
    function handleClickOnChoice (choice)
    {
        if(valueIsSelected(choice.value))
        {
            setSelectedValue(selectedValue.replace(choice.value,"").replace(";;",";"));
            setNbSelected(nbSelected-1)
        }
        else
        {
            if((nbSelected < maxChoicesNumber && selectedValue != "") && selectedValue.length > 0)
            {
                console.log("add")
                setSelectedValue(selectedValue+";"+choice.value)
                setNbSelected(nbSelected+1)

            }
            else
            {
                if(selectedValue.length > 0)
                {

                }
                else
                {
                    setSelectedValue(choice.value);
                    setNbSelected(1)
                }
            }
        }
        return;
    };

    const renderedChoices = choices.map((c) => 
        valueIsSelected(c.value) 
            ? <option style={{backgroundColor:"orange" }} onClick={() => {handleClickOnChoice(c)}} value={c.value} key={c.value}>{c.label}</option>
            : <option style={{backgroundColor:"grey"}} onClick={() => {handleClickOnChoice(c)}} value={c.value} key={c.value}>{c.label}</option>
    )

    return (
        <div style={{width:"75%;"}}>
            <label for="choices" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{clabel}</label>
            <select name="choices"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" multiple>
                { renderedChoices }
            </select>
        </div>
        
    );
}
