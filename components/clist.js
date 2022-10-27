import React from "react";
import {useState} from "react";

export const clist = () => {
    const dogBreeds = ['corgi', 'shih tzu', 'pug'];
    return (
        <ul>
        {dogBreeds.map((choice, index) => {
            return <option value={choice} key={index}>{choice}</option>
        })}
        </ul>
    )

    
/*
export const Clist = ({choices,maxchoice}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [choicesState,setChoicesState] = useState([]);

    function renderChoices ()
    {
        if(!choicesState) return null;

        return choicesState.map((choice, i) => (
            <option key={i} className={valueIsSelected(choice.value) ? "selected":""} onClick={() => {handleClickOnChoice(choice)}} selected={valueIsSelected(choice.value)} value={choice.value}>{choice.label}</option>)
        );
    }

    function handleClickOnChoice (choice)
    {
        if(valueIsSelected(choice.value))
        {
            setSelectedValue(selectedValue.replace(choice.value,"").replace(";;",";"));
        }
        else
        {
            if(maxchoice > 1)
            {
                setSelectedValue( selectedValue+";"+choice.value)
            }
            else
            {
                setSelectedValue(choice.value);
            }
        }

        //On retire le pv en trop si besoin
        if(selectedValue[0] == ";")
        {
            setSelectedValue(selectedValue.substring(0,1));
        }
        return;
    };

    function valueIsSelected(value)
    {
        const isSelected = selectedValue.split(";").some(v => (v == value));
        return isSelected;
    }
    const rendered = [];
    const getItems = choices.map((item, key) => {
        rendered.push(item);
    });
    choices = [
        {
            value:"value 1",
            label:"valeur 1"
        },
        {
            value:"value 2",
            label:"valeur 2"
        }
    ]
    return (
        
        <select name="choices">
            {rendered}
        </select>
    );

    

}    
export default Clist;
*/