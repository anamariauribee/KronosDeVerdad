import React, {Component, Fragment} from 'react';
import {View,Text, Button, ScrollView,TouchableOpacity,Switch, TextInput, Alert, Image} from 'react-native';
import  RNFormHelpers  from 'react-native-form-helpers';
import FormInput from './FormInput'
import { validationDictionary } from "./dictionary.js"; // Archivo donde se incluyen
                                                            // todas las condiciones del Form
import StyleSheet from '../style' //Archivo donde se modifican todas las cosas estéticas, 
                                  // si se está en computador mac se redireige a style.ios.js,
                                  // si está en computados anroid se redirige a styñe.android.js

export const validationService = RNFormHelpers({
  dictionary: validationDictionary
}); //Instrucciones de la libreria

export default class App extends Component {
  constructor(props){
    super(props); 
    this.state ={ 
      codigo:'',
    
    }
    this.verificar = this.verificar.bind(this);
  }
 

verificar (){ 
  let reg = /^[0-9]+$/ 


  if(this.state.codigo.length<6 && this.state.codigo.length>4 ){
      if(reg.test(this.state.codigo)==true ){
          if(this.state.codigo=="12345"){
            
  this.setState({codigo:''});
  this.props.navigation.navigate('NuevaContrasena');

} else{
  Alert.alert('Error', 'Código inválido')
}
      } else {
        Alert.alert('Error', 'Código inválido')
      } 

} else{
  Alert.alert('Error', 'Código inválido')
}


}
  render() {
    const {inputs} = this.state;

    //Acá empiezan todos los campos con lo que debe leerse en estos, su respectivo error, estilo 
    // y las aplicaciones de las funciones de las librerias que permiten validar el texto ingresado
    return (
      <ScrollView style={StyleSheet.container}>
         <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        <Image source={require('../Images/logos.png')}  style={{height: 90,
        width: 90}}/>
        <Text style={StyleSheet.textoNormal}>Ingrese el código enviado al correo electrónico: 
        </Text>
        <Text></Text>
        <TextInput
               autoCorrect={ false } 
      
               value={String(this.state.codigo)}
               returnKeyLabel = {"next"}
              onChangeText={(text) => this.setState({codigo: text})}
              placeholder="Código"
            />
            
            </View>
           
<Text></Text>
             <TouchableOpacity  onPress={() => {
            this.verificar();
          }} style={StyleSheet.button}>
               <Text style={StyleSheet.button}>  Enviar </Text>
             </TouchableOpacity>

             <Text></Text>

             <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('LogIn') }}>
          <Text style={StyleSheet.textButton}> Cancelar </Text>
        </TouchableOpacity>
        
        <Text> </Text>


        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        
      </ScrollView>

    );
  }
}