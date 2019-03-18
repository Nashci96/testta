//page utk login TU

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

export default class logintu extends Component {
    static navigationOptions= ({navigation}) => ({
        title: 'Login untuk TU',
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
            idtu:'',
            password:''
        }
    }

    logintu = () =>{
        const{idtu,password} = this.state;
        if(idtu==""){
            this.setState({id_tu:'Tolong inputkan ID user anda'})
        }
        else if(password==""){
            this.setState({pass:'tolong inputkan password anda'})
        }
        else{ //alamatphplogintu.php
            fetch('http://192.168.137.1/dbtestta/tu/logintu.php', {
                method:'post',
                header:{
                    'Accept'        : 'application/json',
                    'Content-type'  : 'application/json'
                },

                body:JSON.stringify({
                    // we will pass  our input data to server
                    id_tu: idtu,
                    pass: password
                })
            })
            .then((responseJson) => {
                if(responseJson == "ok"){
                    //redirect to home tu
                    alert("succesfully login");
                    this.props.navigation.navigate("hometu");
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
                <Text style={{padding:10,margin:10,color:'red'}}>{this.state.id_tu}</Text>

                <TextInput
                placeholder="enter ID"
                style={{width:200,margin:10}}
                onChangeText={idtu => this.setState({idtu})}/>

                <TextInput
                placeholder="enter Password"
                style={{width:200,margin:10}}
                onChangeText={password => this.setState({password})}/>

                <TouchableOpacity
                onPress={this.logintu}
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

AppRegistry.registerComponent('logintu',() => LoginTU);
