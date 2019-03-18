//page yang menentukan kita mau login pakai akun yang mana

import React, {Component} from 'react';
import { AppRegistry,View,Text,StyleSheet,Button,TouchableOpacity,StatusBar,Image } from 'react-native';

export default class loginopt extends Component{
    static navigationOption= ({navigation}) =>({
        title: 'Welcome',
    });

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.container}>
                    UserManager
                </Text>

                <TouchableOpacity
                    onPress={() => navigate('loginmhs')}
                    style={styles.btn1}>
                    <Text style={styles.btnText}>Login Mahasiswa</Text>    
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('logindsn')}
                    style={styles.btn2}>
                    <Text style={styles.btnText}>Login Dosen</Text>    
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('loginkpd')}
                    style={styles.btn3}>
                    <Text style={styles.btnText}>Login Kaprodi</Text>    
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('logintu')}
                    style={styles.btn4}>
                    <Text style={styles.btnText}>Login TU</Text>    
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        display         : 'flex',
        alignItems      : 'center',
        justifyContent  : 'center'
    },

    btn1:{
        backgroundColor : 'green',
        padding         : 10,
        margin          : 10,
        width           : '95%'
    },
    
    btn2:{
        backgroundColor : 'orange',
        padding         : 10,
        margin          : 10,
        width           : '95%'
    },

    btn3:{
        backgroundColor : 'red',
        padding         : 10,
        margin          : 10,
        width           : '95%'
    },
    
    btn4:{
        backgroundColor : 'blue',
        padding         : 10,
        margin          : 10,
        width           : '95%'
    },

    pageName:{
        margin      : 10    ,
        fontWeight  : 'bold',
        color       : '#000',
        textAlign   : 'center'
    },

    btnText:{
        color       :'#FFF',
        fontWeight  :'bold'
    },
    
});

AppRegistry.registerComponent('loginopt', () => loginopt)