//Home utk TU

import React, { Component} from 'react';
import { AppRegistry,View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default class home extends Component{
    static navigationOptions =({navigation}) =>({
        title: 'Welcome', 
    });

    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={styles.container}>
                <Text style={styles.pageName}>profile TU</Text>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn1}>
                    <Text style={styles.btnText}> Profil Akun </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('regopt')}
                    style={styles.btn2}>
                    <Text style={styles.btnText}> Registrasi Akun </Text>   
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn3}>
                    <Text style={styles.btnText}> Registrasi Seminar </Text>   
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn4}>
                    <Text style={styles.btnText}> Jadwal Dosen dan Seminar </Text>   
                </TouchableOpacity>


            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',alignItems: 'center',
        justifyContent:'center'
    },

    pageName:{
        margin:10,fontWeight: 'bold',
        color: '#000' , textAlign:'center'
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
        backgroundColor : 'yellow',
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

    btnText:{
        color:'#fff',fontWeight:'bold'
    },

});

AppRegistry.registerComponent('hometu',() => HomeTU);
