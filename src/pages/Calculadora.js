import { useState } from 'react';
import { styles, setTheme } from '../components/styles'
import { View, Text, Display, FAIcon, Button, Keyboard } from "../components/myComponents";
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Calculadora(props) {
    const [subValue, setSubValue] = useState(localStorage.getItem('subValue') || " ")
    const [value, setValue] = useState(localStorage.getItem('value') || "")

    function saveValues(value, subValue) {
        localStorage.setItem('subValue', subValue);
        localStorage.setItem('value', value);
    }

    function getKey(key) {
        setSubValue(" ");
        switch (key) {
            case ",":
                var char = value.slice(-1)
                var block = ".,+-*/%^"
                if(char != "" && !block.includes(char))
                    setValue(value + ",")
                saveValues(value, subValue)
                break;

            case "⇦":
                setValue(value.slice(0, -1))
                saveValues(value, subValue)
                break;

            case "=":
                setSubValue(value + " =")
                var keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", "÷", "×", "\\+", "-"]
                var vkey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "+", "-"]
                var result = "";
                for(let char = 0; char < value.length; char++) {
                    for(let i = 0; i < keys.length; i++)
                        if(value[char] == keys[i])
                            result += vkey[i]
                };
                var result = eval(result)
                setValue(String(result))
                saveValues(result, value + " =")
                break;
        
            default:
                setValue(value + key)
                break;
        }
    }
    
    return (
        <>

        <FAIcon
            onPress={() => setTheme()}
            icon={faMoon} size={25} style={{marginTop: "2%", alignSelf: "end"}}/>
        <Display style={{height: "100px", marginTop: "5%"}}>
            <Text style={styles.subValue}>{subValue}</Text>
            <Text style={styles.displayValue}>{value}</Text>
        </Display>

        <View style={{marginTop: "30%", display: "flex", flexDirection: "row"}}>
            <View style={{width: "75%", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "space-between"}}>
                <Keyboard value={"7"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"8"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"9"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"4"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"5"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"6"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"1"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"2"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"3"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={","} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"0"} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"="} getKey={getKey}
                    clickOpacity="true"
                    style={styles.display_button}
                    textStyle={styles.display_button_text}></Keyboard>
            </View>

            <View style={{width: "25%", display: "flex", rowGap: "30px"}}>
                <Keyboard value={"⇦"} getKey={getKey}
                    clickOpacity="true"
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"÷"} getKey={getKey}
                    clickOpacity="true"
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"×"} getKey={getKey}
                    clickOpacity="true"
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"+"} getKey={getKey}
                    clickOpacity="true"
                    textStyle={styles.display_button_text}></Keyboard>
                <Keyboard value={"-"} getKey={getKey}
                    clickOpacity="true"
                    textStyle={styles.display_button_text}></Keyboard>
            </View>
        </View>

        </>
    );
}