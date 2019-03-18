//Home utk Dosen

import React, { Component} from 'react';
import { AppRegistry,View,Text,StyleSheet} from 'react-native';

export default class home extends Component{
    static navigationOptions =({navigation}) =>({
        title: 'Welcome',
    });

    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={styles.container}>
                <Text style={styles.pageName}>profile Dosen</Text>
            
                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn1}>
                    <Text style={styles.btnText}> Profil Akun</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn2}>
                    <Text style={styles.btnText}> Bimbingan </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn3}>
                    <Text style={styles.btnText}> Jadwal </Text>
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

    btnText:{
        color:'#fff',fontWeight:'bold'
    },
});

AppRegistry.registerComponent('homedsn',() => HomeDsn);