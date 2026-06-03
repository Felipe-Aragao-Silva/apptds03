import React from "react";
import { View, Text, Image, StyleSheet, TextInput, Button, ToastAndroid, Platform, Alert, TouchableOpacity} from 'react-native';
import { RoundedButton } from "../../components/RoundedButton";
import { COLORS } from '../../theme/AppTheme';
//importação dos elementos de navegação
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParameList} from '../../../../App';

 
export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

  const testOS = () =>{
    if(Platform.OS === 'android'){
      ToastAndroid.show("Login realizado com sucesso!", ToastAndroid.SHORT)
    } else if (Platform.OS === 'web'){
      //Navegador: Usa o alert do JS classic
      alert('Teste de Login! - WEB');
    } else{
      // iOS: usa o alert nativo do iphone
      Alert.alert('Aviso', 'Test de Login! - iPhone');
    }

  }





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
        <Text style={styles.frmTitle}>Entrar</Text>
 
        {/* Input de Usuário/Email */}
        <View style={styles.frmInput}>
          <Image
            source={require('../../../../assets/img/user.png')}
            style={styles.frmIco}
          />
          <TextInput
            placeholder="Digite seu Email / Usuário"
            keyboardType="email-address"
            style={styles.txtInput}
          />
        </View>
 
        {/* CORREÇÃO AQUI: Mudado de 'styles.frm' para 'styles.frmInput' */}
        <View style={styles.frmInput}>
          <Image
            source={require('../../../../assets/img/password.png')}
            style={styles.frmIco}
          />
          <TextInput
            placeholder="Digite sua Senha"
            keyboardType="default"
            secureTextEntry={true}
            style={styles.txtInput}
          />
        </View>
 
        {/* Botão de Entrar */}
        <View style={{ marginTop: 40 }}>
          <RoundedButton
          text="Login"
          onPress={testOS}
          //  onPress={() => {
          //     ToastAndroid.show("Login realizado com sucesso!", ToastAndroid.SHORT);}}
          />
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
  frmInput:{
      flexDirection: 'row',
      marginTop: 30,
  },
 
  frmIco:{
  width: 25,
  height: 25,
  marginTop: 10,
},
txtInput:{
  flex:1,
  borderBottomWidth: 2,
  marginLeft: 15,
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