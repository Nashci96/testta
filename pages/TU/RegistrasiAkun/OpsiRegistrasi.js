// menu menentukan jenis akun yg ingin didaftarkan

import React, {Component} from 'react';
import { AppRegistry,View,Text,StyleSheet,TouchableOpacity
 } from 'react-native';

export default class home extends Component{
    static navigationOptions=({}) =>({
        title: 'Registrasi Akun',
    });

    render(){
        const { navigate } = this.props.navigation;
        return(
            
            <View style={styles.container}>
                <Text style={styles.pageName}>Registrasi Akun</Text>

                <TouchableOpacity
                    onPress={() => navigate('regmhs')}
                    style={styles.btn1}>
                    <Text style={styles.btnText}> Mahasiswa </Text>    
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('regdsn')}
                    style={styles.btn2}>
                    <Text style={styles.btnText}> Dosen </Text>    
                </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',alignItems: 'center',justifyContent:'center'
    },

    pageName:{
        margin:10,fontWeight: 'bold',
        color: '#000', textAlign:'center'
    },

    btn1:{
        backgroundColor : 'green',
        padding: 10,
        margin : 10,
        width : '95%'
    },

    btn2:{
        backgroundColor : 'orange',
        padding : 10,
        margin : 10,
        width : '95%'
    },

    btnText:{
        color:'#fff',fontWeight:'bold'
    },
});

AppRegistry.registerComponent('regopt',() => RegOpt);