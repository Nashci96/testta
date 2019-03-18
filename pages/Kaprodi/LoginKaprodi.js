//Login page utk Kaprodi

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Button,
    Keyboard    
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class loginkpd extends Component {
    static navigationOptions= ({navigation}) => ({
        title: 'Login untuk Kaprodi',
        headerRight:
        <TouchableOpacity
            onPress={() => navigation.navigate('loginopt')}
            style={{margin:10,backgroundColor:'green',padding:10}}>
                <Text style={{color:'#ffffff'}}>Login Option</Text>    
        </TouchableOpacity>
    });
    
    constructor(props){
        super(props)
        this.state={
            idkpd:'',
            password:''
        }
    }

    loginkaprodi = () =>{
        const{idkpd,password} = this.state;
        if(idkpd==""){
            this.setState({id_kaprodi:'Tolong inputkan User ID anda'})
        }
        else if(password==""){
            this.setState({pass:'tolong inputkan password anda'})
        }
        else{//alamatloginkpd.php
            fetch('http://192.168.137.1/dbtestta/kaprodi/loginkpd.php', {
                method:'post',
                header:{
                    'Accept'        : 'application/json',
                    'Content-type'  : 'application/json'
                },

                body:JSON.stringify({
                    // we will pass  our input data to server
                    id_kaprodi: idkpd,
                    pass: password
                })
            })
            .then((responseJson) => {
                if(responseJson == "ok"){
                    //redirect to home kaprodi
                    alert("succesfully login");
                    this.props.navigation.navigate("homekpd");
                } else {
                    alert("wrong login details");
                }
            })
            .catch((error) => {
                console.error(error);
            });
        }
        Keyboard.dismiss()
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{padding:10,margin:10,color:'red'}}>{this.state.id_kaprodi}</Text>

                <TextInput
                placeholder="enter ID"
                style={{width:200,margin:10}}
                onChangeText={idkpd => this.setState({idkpd})}/>

                <TextInput
                placeholder="enter Password"
                style={{width:200,margin:10}}
                onChangeText={password => this.setState({password})}/>

                <TouchableOpacity
                onPress={this.loginkaprodi}
                style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
                <Text style={{color:'white'}}>login</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('loginkpd',() => LoginKpd);