import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation'; 


import HomeScreen from './Kronos/Home.js';
import LogInScreen from './Kronos/Usuarios/LogIn.js';
import SignInScreen from './Kronos/Usuarios/SignIn.js';
import RecuperarContrasenaScreen from './Kronos/Usuarios/RecuperarContrasena.js';
import EntrarCodigoScreen from './Kronos/Usuarios/EntrarCodigo.js';
import NuevaContrasenaScreen from './Kronos/Usuarios/NuevaContrasena.js';
import Sugerencia1Screen from './Kronos/Sugerencias/Sugerencia1.js';
import Sugerencia2Screen from './Kronos/Sugerencias/Sugerencia2.js';
import Sugerencia3Screen from './Kronos/Sugerencias/Sugerencia3.js';
import ResultadosScreen from './Kronos/Resultados.js';
import Sugerencia4Screen from './Kronos/Sugerencias/Sugerencia4.js';
import FiltrosScreen from './Kronos/Filtros.js';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen, 
    navigationOptions:  {
      title: 'Home',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  } 
  },
  LogIn: {
    screen: LogInScreen,
    navigationOptions:  {
      title: 'LogIn',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  }
  },
  Sugerencia1: {
    screen: Sugerencia1Screen, 
    navigationOptions:  {
      title: 'Sugerencia 1',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  } 
  },
  Sugerencia2: {
    screen: Sugerencia2Screen, 
    navigationOptions:  {
      title: 'Sugerencia 2',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  } 
  },Sugerencia3: {
    screen: Sugerencia3Screen, 
    navigationOptions:  {
      title: 'Sugerencia 3',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  } 
  },

  Sugerencia4: {
  screen: Sugerencia4Screen, 
  navigationOptions:  {
    title: 'Sugerencia 4',
    headerLeft: null,
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
  },
} 
},
  SignIn: {
    screen: SignInScreen,
    navigationOptions:  {
      title: 'Registrar Usuario',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  }
  },
  RecuperarContrasena: {
    screen: RecuperarContrasenaScreen,
    navigationOptions:  {
      title: 'Recuperar Contraseña',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      
  },
},
  Filtros: {
    screen: FiltrosScreen,
    navigationOptions:  {
      title: 'Filtros',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  }
},
  EntrarCodigo: {
    screen: EntrarCodigoScreen,
    navigationOptions:  {
      title: 'Código',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  }
  },

  Resultados: {
    screen: ResultadosScreen,
    navigationOptions:  {
      title: 'Resultados',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  }
  },

  NuevaContrasena: {
    screen: NuevaContrasenaScreen,
    navigationOptions:  {
      title: 'Establecer Nueva Contraseña',
      headerLeft: null,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  }
  }, 
}, {
  initialRouteName: "LogIn"
});

const AppContainer = createAppContainer(AppNavigator);

