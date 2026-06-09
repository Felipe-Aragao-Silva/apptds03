import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform } from 'react-native';

//ViewModel
import RecoveryRequisitionViewModel from "./ViewModel";

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

    const { onChange, userEmail } = RecoveryRequisitionViewModel();

    const recoveryPassword = () => {
        if (Platform.OS === 'android') {
          ToastAndroid.show("Instruções de recuperação de senha enviadas!", ToastAndroid.SHORT);
        } else if (Platform.OS === 'web') {
          alert('Instruções de recuperação de senha enviadas! - WEB');
        } else {
          Alert.alert('Aviso', 'Instruções de recuperação de senha enviadas! - iPhone');
        }
      };

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
                value={userEmail}
                onChangeText={onChange}
            />

            <RoundedButton
                text="Recuperar Senha"
                onPress={() => {
                    if(!userEmail.trim()){
                        Alert.alert('Erro', 'Por favor, insira um email ou nome de usuário válido.');
                    } else {
                        recoveryPassword();
                    }
                }}

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }


})