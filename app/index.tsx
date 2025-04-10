import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen(){
    const STARTVALUE = 0;
    const nome = "leandro";
    const [count,setCount] = useState(STARTVALUE);
    const [name, setNome] = useState(nome);

    


    return (
        <View>
            <Text>Bem-Vindo ao meu App! {name}</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={()=> {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={()=> {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={()=> {setCount(STARTVALUE)}}/>

           <CustomButton title="Botão vermelho" onPress={() => {setNome('leandro' + count)}}/>
        </View>
    );
}