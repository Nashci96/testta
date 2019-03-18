//Halaman Registrasi Akun Mahasiswa

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class registermhs extends Component {
    constructor(props){
        super(props)
        this.state={
            nobp:'',
            password:'',
            username:''
        }
    }

    registermahasiswa = () =>{
        const {nobp}         = this.state;
        const {username}    = this.state;
        const {password}    = this.state;

        //alamatregmhs.php
        fetch('http://192.168.137.1/dbtestta/tu/regmhs.php',
        {
            method: 'post',
            header: {
                'Accept'        :   'application/json',
                'Content-type'  :   'application/json'
            },
            body:JSON.stringify({
                no_bp   : nobp,
                pass    : password,
                name    : username,
            })

        })
        .then((response) => response.json())
        .then((responseJson) => {
            alert(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                
                <TextInput
                    placeholder="Enter Name"
                    style={styles.reg}
                    underlineColorAndroid="transparent"
                    onChangeText= {username => this.setState({username})} 
                />

                
                <TextInput
                    placeholder="Enter BP"
                    style={styles.reg}
                    underlineColorAndroid="transparent"
                    onChangeText= {nobp => this.setState({nobp})} 
                />

                
                <TextInput
                    placeholder="Enter Password"
                    style={styles.reg}
                    underlineColorAndroid="transparent"
                    onChangeText= {password => this.setState({password})} 
                />

                <TouchableOpacity
                    onPress={this.registermahasiswa}
                    style={styles.regtext}>
                    <Text style={{color:'#fff'}}>Sign Up Mahasiswa</Text>    
                </TouchableOpacity>  

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

    reg: {
        width:250,
        margin: 10,
        borderColor: "#333",
        borderWidth: 1,
    },

    regtext: {
        width:250,
        padding: 10,
        backgroundColor:"#333",
        borderWidth:1
    }
});

AppRegistry.registerComponent('regmhs', ()=> RegMhs );