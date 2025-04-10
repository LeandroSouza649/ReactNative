import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen(){
    const STARTVALUE = 0;
    const [count,setCount] = useState(STARTVALUE);
    


    return (
        <View>
            <Text>Bem-Vindo ao meu App!</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={()=> {setCount(count+1)}}/>
            <Button title="Diminuir" onPress={()=> {setCount(count-1)}}/>
            <Button title="Resetar" onPress={()=> {setCount(STARTVALUE)}}/>

            <CustomButton title= "Name"/>
        </View>
    );
}