import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform} from 'react-native';
import {COLORS} from '../../theme/AppTheme'
import { RoundedButton } from "../../components/RoundedButton";

export const RegisterScreen = () => {

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


    return(
        <View style={styles.container}>

              <Image
                source={require('../../../../assets/img/chef.jpg')}
                style={styles.ImgBg}
              />
         
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../../../assets/img/user_image.png')}
                  style={styles.logoImg}
                />
                <Text style={styles.logoTxt}>Selecione uma imagem</Text>
              </View>
         
              {/* Formulário Branco */}
              <View style={styles.frm}>
                <Text style={styles.frmTitle}>Registre-se</Text>
         
                {/* Input de Usuário/Email */}
                <View style={styles.frmInput}>
                  <Image
                    source={require('../../../../assets/img/user.png')}
                    style={styles.frmIco}
                  />

                  <TextInput
                    placeholder="Digite seu Nome"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    />  

                </View>

                {/* {Nome de usuario} */}
                <View style={styles.frmInput}>
                  <Image
                    source={require('../../../../assets/img/my_user.png')}
                    style={styles.frmIco}
                  />

                  <TextInput
                    placeholder="Digite seu Nome de Usuário"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    />  

                </View>

                {/* {Email} */}
                <View style={styles.frmInput}>
                  <Image
                    source={require('../../../../assets/img/email.png')}
                    style={styles.frmIco}
                  />

                  <TextInput
                    placeholder="Digite seu Email"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    />  

                </View>

                 {/* {Telefone} */}
                <View style={styles.frmInput}>
                  <Image
                    source={require('../../../../assets/img/phone.png')}
                    style={styles.frmIco}
                  />

                  <TextInput
                    placeholder="Digite seu Telefone"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    />  

                </View>
                

         
                <View style={styles.frmInput}>
                  <Image
                    source={require('../../../../assets/img/password.png')}
                    style={styles.frmIco}
                  />
                  <TextInput
                    placeholder="Digite a Senha"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    />  
                
                </View>

                <View style={styles.frmInput}>
                  <Image
                    source={require('../../../../assets/img/confirm_password.png')}
                    style={styles.frmIco}
                  />
                  <TextInput
                    placeholder="Confirme a Senha"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    />  
                
                </View>
         
                {/* Botão de Entrar */}
                <View style={{ marginTop: 40 }}>
                    <RoundedButton
                    text="Cadastre-se"
                    onPress={testOS}/>
                </View>
         

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.bgBlack,
        alignItems:'center',
        justifyContent:'center',
    },
    ImgBg:{
        opacity:0.8,
        width:'100%',
        height:'100%',
        bottom:'30%',
    },
    logoContainer:{
        position:'absolute',
        alignItems:'center',
        top:'5%',
    },
    logoImg:{
        width: 100,
        height: 100,
        alignSelf: 'center',
  },
    logoTxt:{
        color: COLORS.bgColor,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 26,
  },
   frm:{
        width: '100%',
        height: '74%',
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
    txtInput:{
        flex:1,
        borderBottomWidth: 2,
        marginLeft: 15,
    },
 
    frmIco:{
        width: 25,
        height: 25,
        marginTop: 10,
},



})