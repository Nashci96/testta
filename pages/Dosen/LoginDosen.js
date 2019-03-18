//page utk login Dosen

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

export default class logindsn extends Component {
    static navigationOptions= ({navigation}) => ({
        title: 'Login untuk Dosen',
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
            NIP:'',
            password:''
        }
    }

    logindosen = () =>{
        const{NIP,password} = this.state;
        if(NIP==""){
            this.setState({nip:'Tolong inputkan nip anda'})
        }
        else if(password==""){
            this.setState({pass:'tolong inputkan password anda'})
        }
        else{//alamatlogindosen.php
            fetch('http://192.168.137.1/dbtestta/logindsn.php', {
                method:'post',
                header:{
                    'Accept'        : 'application/json',
                    'Content-type'  : 'application/json'
                },

                body:JSON.stringify({
                    // we will pass  our input data to server
                    nip: NIP,
                    pass: password
                })
            })
            .then((responseJson) => {
                if(responseJson == "ok"){
                    //redirect to home dosen
                    alert("succesfully login");
                    this.props.navigation.navigate("homedsn");
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
                <Text style={{padding:10,margin:10,color:'red'}}>{this.state.nip}</Text>

                <TextInput
                placeholder="enter NIP"
                style={{width:200,margin:10}}
                onChangeText={NIP => this.setState({NIP})}/>

                <TextInput
                placeholder="enter Password"
                style={{width:200,margin:10}}
                onChangeText={password => this.setState({password})}/>

                <TouchableOpacity
                onPress={this.logindosen}
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

AppRegistry.registerComponent('logindsn',() => LoginDsn);