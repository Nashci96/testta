//page utk login mahasiswa

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Button,
    Keyboard,
    Alert,
    AsyncStorage,
} from 'react-native';

export default class loginmhs extends Component {
    static navigationOptions= ({navigation}) => ({
        title: 'Login untuk Mahasiswa',
        headerRight:
        <TouchableOpacity
            onPress={() => navigation.navigate('loginopt')}
            style={{margin:10,backgroundColor:'green',padding:10}}>
                <Text style={{color:'#ffffff'}}>Login Opt</Text>    
        </TouchableOpacity>
    });
    
    constructor(props){
        super(props)
        this.state={
            nobp:'',
            password:'',
            asnobp:'',
            aspassword:'',
        }
    }

    componentDidMount = () => {
        AsyncStorage.getItem('asnobp').then((value) => this.setState({'asnobp':value }));
        AsyncStorage.getItem('aspassword').then((value) => this.setState({'aspassword':value }));
    }

    loginmahasiswa = (value) =>{
        const{nobp,password} = this.state;
        // const mynobp        = this.state.asnobp;
        // const mypassword    = this.state.aspassword;
        if(nobp==""){
            this.setState({no_bp:'Tolong inputkan no bp anda'})
        }
        else if(password==""){
            this.setState({pass:'tolong inputkan password anda'})
        }
        else{ //alamatphploginmhs
            fetch('http://192.168.137.1/dbtestta/mahasiswa/loginmhs.php', {
                method:'post',
                header:{
                    'Accept'        : 'application/json',
                    'Content-type'  : 'application/json'
                },

                body:JSON.stringify({
                    // we will pass  our input data to server
                    no_bp: nobp,
                    pass: password
                })
            })
            .then((responseJson) => {
                if(responseJson.ok === true){
                    //redirect to home mhs
                    alert("succesfully login");
                    this.props.navigation.navigate("homemhs");
                    AsyncStorage.setItem('asnobp',value);this.setState({'asnobp':value});
                    AsyncStorage.setItem('aspassword',value);this.setState({'aspassword':value});
                } else {
                    // alert("wrong login details");
                    Alert.alert(responseJson);
                }
            })
            .catch((error) => {
                console.error(error);
            });
            // savedata(){

            // }
        }
        Keyboard.dismiss()
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{padding:10,margin:10,color:'red'}}>{this.state.no_bp}</Text>

                <TextInput
                placeholder="enter BP"
                style={{width:200,margin:10}}
                value={this.state.nobp}
                onChangeText={nobp => this.setState({nobp})}/>

                <TextInput
                placeholder="enter Password"
                style={{width:200,margin:10}}
                value={this.state.password}
                onChangeText={password => this.setState({password})}/>

                <TouchableOpacity
                onPress={this.loginmahasiswa}
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

AppRegistry.registerComponent('loginmhs',() => LoginMhs);
