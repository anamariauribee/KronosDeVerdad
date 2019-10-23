import React, { Component } from "react";
import {Alert, TextInput, Text, View, TouchableOpacity, ScrollView, Image} from "react-native";
import StyleSheet from '../style';

 
 export default class LogIn extends Component { 

  constructor(props){
    super(props); 
    this.state ={ 
      email:'',
      password:'',
    }
    this.verificar = this.verificar.bind(this);
  }
 

verificar (){ 
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
  let reg2= /^[a-zA-Z0-9]*$/

  if(this.state.email.length<30 ){
    if(this.state.password.length<16 &&this.state.password.length>5 ){
      if(reg.test(this.state.email)==true ){
        if(reg2.test(this.state.password)==true ){
          if(this.state.email=="anamariauribee1@gmail.com"
          || this.state.email=="cristinaragnoe@gmail.com" 
          || this.state.email=="mateoarteagagiraldo@gmail.com" ){
             if(this.state.email=="anamariauribee1@gmail.com" && this.state.password=="123456" 
             || this.state.email=="cristinaragnoe@gmail.com" && this.state.password=="654321" 
             || this.state.email=="mateoarteagagiraldo@gmail.com" && this.state.password=="000000"  ){
          
     

  this.setState({email:''});
  this.setState({password:''});
  this.props.navigation.navigate('Home');

} else{
  Alert.alert('Error', 'Contraseña no corresponde a email')
}
} else{
  Alert.alert('Error', 'Email no registrado')
}
} else {
  Alert.alert('Error', 'Contraseña no válida')
} 
      } else {
        Alert.alert('Error', 'Email no válido')
      } 

} else{
  Alert.alert('Error', 'Contraseña no tiene el número requerido de caracteres')
}
} else{
  Alert.alert('Error', 'Email supera el número máxmimo de caracteres')
}


}

  render() {
      return(
        
      <ScrollView style={StyleSheet.container}> 
     
        <View >
          <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../Images/logos.png')}  style={{height: 90,
        width: 90}}/>
   </View>
        <Text></Text>
        <View >
       <TextInput
               autoCorrect={ false } 
      
               value={String(this.state.email)}
               returnKeyLabel = {"next"}
              onChangeText={(text) => this.setState({email: text})}
              placeholder="Email"
            />
            
            <Text></Text>
            <TextInput
                autoCorrect={ false } 
              
                placeholder="Contraseña"
                returnKeyLabel = {"next"}
                value={String(this.state.password)}
                onChangeText={(text) => this.setState({password:text})}
               secureTextEntry={true}
              
            />
            
            </View>
           
<Text></Text>
<View>

             <TouchableOpacity  onPress={() => {
            this.verificar();
          }} style={StyleSheet.button}>
               <Text style={StyleSheet.button}>  Entrar </Text>
             </TouchableOpacity>

             <Text></Text>

             <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('SignIn') }}>
          <Text style={StyleSheet.textButton}> Registrar Usuario </Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('RecuperarContrasena') }}>
          <Text style={StyleSheet.textButton}> Recuperar Contraseña </Text>
        </TouchableOpacity>

        <Text></Text>
        </View>


             </View>

             </ScrollView>
    );
        }
      }
      
