import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput, Button, ToastAndroid, Platform, Alert, TouchableOpacity} from 'react-native';

//Componentes
import { RoundedButton } from "../../components/RoundedButton";
import { CustomTextInput } from "../../components/CustomTextInput";
import { COLORS } from '../../theme/AppTheme';

//ViewModel
import HomeViewModel from "./ViewModel";


//importação dos elementos de navegação
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParameList} from '../../../../Aula03_App';



 
export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

  const { onChange, userEmail, userPassword, login } = HomeViewModel();
  

  const testOS = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show("Login realizado com sucesso!", ToastAndroid.SHORT);
    } else if (Platform.OS === 'web') {
      alert('Teste de Login! - WEB');
    } else {
      Alert.alert('Aviso', 'Teste de Login! - iPhone');
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem de Fundo */}
      <Image
        source={require('../../../../assets/img/bg-smartphone.jpg')}
        style={styles.ImgBg}
      />

      {/* Container do Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/img/logo.png')}
          style={styles.logoImg}
        />
        <Text style={styles.logoTxt}>Restaurante Trindade</Text>
      </View>

      {/* Formulário Branco */}
      <View style={styles.frm}>
        <CustomTextInput
          image={require('../../../../assets/img/user.png')}
          placeholder="Digite seu Email / Usuário"
          keyboardType="email-address"
          secureTextEntry={false}
          property="userEmail"
          onChangeText={onChange}
          value={userEmail}
        />

        <View>
          <CustomTextInput
            image={require('../../../../assets/img/user.png')}
            placeholder="Digite a senha"
            keyboardType="default"
            secureTextEntry={true}
            property="userPassword"
            onChangeText={onChange}
            value={userPassword}
          />
          <TouchableOpacity onPress={() => navigation.navigate('RecoveryRequisitionScreen')}>
            <Text style={{ color: COLORS.secundary, marginTop: 10, textAlign: 'right' }}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Entrar */}
        <View style={{ marginTop: 40 }}>
          <RoundedButton text="Login" onPress={ () => login()} />
        </View>

        {/* Texto de Registro */}
        <View style={styles.frmRegistre}>
          <Text>Crie sua conta!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.txtRegistre}> Registre-se </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
 
//
 
// Folha de estilo
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.bgBlack,
    alignItems: 'center',
    justifyContent:'center',
 
  },
 
  logoContainer:{
    position: 'absolute',
    alignItems: 'center',
    top: '15%',
  },
 
  logoImg:{
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
 
  ImgBg:{
   opacity: 0.8,
    width: '100%',
    height: '100%',
    bottom: '30%',
  },
 
  logoTxt:{
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 26,
  },
 
  frm:{
    width: '100%',
    height: '40%',
    backgroundColor: COLORS.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  frmTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },

 


frmRegistre:{
  flexDirection:'row',
  justifyContent: 'center',
  marginTop:15,
},
 
txtRegistre:{
  fontStyle: 'italic',
  fontWeight: 'bold',
  borderBottomColor: COLORS.secundary,
  borderBottomWidth: 1,
  marginLeft: 5,
  color: COLORS.secundary,
},
});
 
 
 
 
//export default HomeScreen;