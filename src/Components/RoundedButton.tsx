//Cria um arquivo para componente de Botões
// ./src/components/RoundedButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../Presentation/theme/AppTheme";

interface Props{
    text:string,

}

export const RoundedButton = ( {text}: Props) =>{
    return (
        <TouchableOpacity onPress={() => {}}
        style={styles.btn}>
            <Text style={styles.txtBtn}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width:'100%',
        height:50,
        backgroundColor:COLORS.secundary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    txtBtn:{
        color:COLORS.bgColor,
        fontWeight:'bold',
        fontSize:16,
    }
})
