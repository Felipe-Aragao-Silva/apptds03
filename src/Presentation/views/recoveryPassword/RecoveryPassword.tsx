import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform } from 'react-native';

//ViewModel
import RecoveryPasswordViewModel from "./ViewModel";

//Componentes
import { CustomTextInput } from "../../components/CustomTextInput";
import { COLORS } from '../../theme/AppTheme'
import { RoundedButton } from "../../components/RoundedButton";

//navegação
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParameList} from '../../../../Aula03_App';

export const RecoveryPasswordScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

    const { onChange, userToken, userEmail, userPassword, userConfirmPassword, resetPassword } = RecoveryPasswordViewModel();

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/img/chef.jpg')} style={styles.ImgBg} />

            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/img/user_image.png')} style={styles.userImg} />
                <Text style={styles.textoLogo}>Digite seu Token</Text>
            </View>

            {/* Formulário */}
            <View style={styles.form}>

                {/* Input de token */}
                <CustomTextInput
                    image={require('../../../../assets/img/user_menu.png')}
                    placeholder="Digite o token recebido por email"
                    keyboardType="numeric"
                    value={userToken}
                    onChangeText={onChange}
                    secureTextEntry={false}
                    property="userToken"
                />


                {/* Input Email */}
                <CustomTextInput
                    image={require('../../../../assets/img/email.png')}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    value={userEmail}
                    onChangeText={onChange}
                    secureTextEntry={false}
                    property="userEmail"
                />

                {/* Input de Senha */}
                <CustomTextInput
                    image={require('../../../../assets/img/password.png')}
                    placeholder="Digite sua nova senha"
                    keyboardType="default"
                    value={userPassword}
                    onChangeText={onChange}
                    secureTextEntry={true}
                    property="userPassword"
                />

                {/* Input de confirmação de Senha */}
                <CustomTextInput
                    image={require('../../../../assets/img/confirm_password.png')}
                    placeholder="Confirme sua nova senha"
                    keyboardType="default"
                    value={userConfirmPassword}
                    onChangeText={onChange}
                    secureTextEntry={true}
                    property="userConfirmPassword"
                />

                {/* Botão para concluir */}
                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text="Concluir"
                        onPress={() => {
                            console.log('Sucesso: Senha alterada');

                            resetPassword();

                            navigation.navigate('HomeScreen');
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImgBg: {
        opacity: 0.8,
        width: '100%',
        height: '100%',
        bottom: '30%',
    },

    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: '5%',
    },

    userImg: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },

    textoLogo: {
        color: COLORS.bgColor,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 26,
    },

    form: {
        width: '100%',
        height: '74%',
        backgroundColor: COLORS.bgColor,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },
})
