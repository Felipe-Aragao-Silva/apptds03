import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform } from 'react-native';

//Componentes
import { CustomTextInput } from "../../components/CustomTextInput";
import { COLORS } from '../../theme/AppTheme'
import { RoundedButton } from "../../components/RoundedButton";

//navegação
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParameList} from '../../../../App';

export const RecoveryPasswordScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

    return (
        <View style={styles.container}>
            <View>
                <Text>Digite a nova senha para sua conta.</Text>
            </View>

            <CustomTextInput
                image={require('../../../../assets/img/user.png')}
                placeholder="Digite seu token de recuperação"
                keyboardType="number-pad"
                maxLength={6}
                secureTextEntry={false}
                property="userEmail"
                value={'userEmail'}
            />            


            <CustomTextInput
                image={require('../../../../assets/img/email.png')}
                placeholder="Digite seu Email / Usuário"
                keyboardType="email-address"
                secureTextEntry={false}
                property="userEmail"
                value={'userEmail'}
            />

            <CustomTextInput
                image={require('../../../../assets/img/password.png')}
                placeholder="Digite sua nova senha"
                keyboardType="default"
                secureTextEntry={true}
                property="newPassword"
                value={'newPassword'}
            />

            <CustomTextInput
                image={require('../../../../assets/img/confirm_password.png')}
                placeholder="Confirme sua nova senha"
                keyboardType="default"
                secureTextEntry={true}
                property="confirmPassword"
                value={'confirmPassword'}
            />

            <RoundedButton
                text="Alterar Senha"
                onPress={() => }
            />
        </View>
    );
}

const styles = StyleSheet.create({
        container:{

        }
})
