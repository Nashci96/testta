import React, {Component} from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { createStackNavigator , createAppContainer} from 'react-navigation';

// import HomeScreen from './pages/home';
// import Login from './pages/login';
// import Register from './pages/register';
// import Profile from './pages/profile';

import LoginOpt from './pages/LoginOption';
import LoginMhs from './pages/Mahasiswa/LoginMahasiswa';
import HomeMhs from './pages/Mahasiswa/HomeMahasiswa';
import LoginDsn from './pages/Dosen/LoginDosen';
import HomeDsn from './pages/Dosen/HomeDosen';
import LoginTU from './pages/TU/LoginTU';
import HomeTU from './pages/TU/HomeTU';
import LoginKpd from './pages/Kaprodi/LoginKaprodi';
import HomeKpd from './pages/Kaprodi/HomeKaprodi';
import RegMhs from './pages/TU/RegistrasiAkun/RegisterMahasiswa';
import RegDsn from './pages/TU/RegistrasiAkun/RegisterDosen';
import RegOpt from './pages/TU/RegistrasiAkun/OpsiRegistrasi';

// const UserManager = createStackNavigator({
//   home: { screen: HomeScreen},
//   login: { screen: Login},
//   register: {screen: Register},
//   profile: {screen: Profile}
// });

const UserManager = createStackNavigator({
    loginopt  : { screen: LoginOpt  },
      loginmhs  : { screen: LoginMhs  },
        homemhs   : { screen: HomeMhs   },
      logindsn  : { screen: LoginDsn  },
        homedsn   : { screen: HomeDsn   },
      logintu   : { screen: LoginTU   },
        hometu    : { screen: HomeTU    },
            regopt    : { screen: RegOpt    },
            regmhs    : { screen: RegMhs    },
            regdsn    : { screen: RegDsn    },
      loginkpd  : { screen: LoginKpd  },
        homekpd   : { screen: HomeKpd   },
      

});

const App = createAppContainer(UserManager);

export default App;
