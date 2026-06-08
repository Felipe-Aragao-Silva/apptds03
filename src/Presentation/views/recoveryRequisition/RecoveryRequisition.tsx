import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform } from 'react-native';

//Componentes
import { CustomTextInput } from "../../components/CustomTextInput";
import { COLORS } from '../../theme/AppTheme'
import { RoundedButton } from "../../components/RoundedButton";

//navegação
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParameList} from '../../../../App';

export const RecoveryRequisitionScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

    return (
        <View style={styles.container}>
            <View>
                <Text>Você quer recuperar sua senha?</Text>
                <Text>Digite seu e-mail ou nome para receber as instruções de recuperação de senha.</Text>
            </View>

            <CustomTextInput
                image={require('../../../../assets/img/user.png')}
                placeholder="Digite seu Email / Usuário"
                keyboardType="email-address"
                secureTextEntry={false}
                property="userEmail"

                value="userEmail"
            />

            <RoundedButton
                text="Recuperar Senha"
                onPress={() => navigation.navigate('RecoveryPasswordScreen')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }


})