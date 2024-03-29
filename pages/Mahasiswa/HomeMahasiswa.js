//Home utk mahasiswa

import React, { Component} from 'react';
import { AppRegistry,View,Text,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';


export default class home extends Component{
    static navigationOptions =({navigation}) =>({
        title: 'Welcome',
    });

    componentDidMount = () => {
        AsyncStorage.getItem('asnobp').then((value) => this.setState({'asnobp':value }));
        AsyncStorage.getItem('aspassword').then((value) => this.setState({'aspassword':value }));
        AsyncStorage.getItem('asnama').then((value) => this.setState({'asnama':value}));
    }

    logout = () =>{
        AsyncStorage.removeItem('asnobp');
        alert('logged out');
    }

    constructor(props) {
        super(props);
        this.state = {
            asnobp: "",
            aspassword: "",
            asnama: "",
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        // const asnobp = this.props.navigation.getParam('asnobp');
        return(

            <View style={styles.container}>
                <Text style={styles.pageName}>profile mahasiswa</Text>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn1}>
                    <Text style={styles.btnText}> Profil Akun</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn2}>
                    <Text style={styles.btnText}> Pendaftaran Topik TA </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn3}>
                    <Text style={styles.btnText}> Bimbingan TA </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn4}>
                    <Text style={styles.btnText}> Tugas Akhir </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('')}
                    style={styles.btn5}>
                    <Text style={styles.btnText}> Pendaftaran Sidang </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.logout}
                    style={styles.btn5}>
                    <Text style={styles.btnText}> logout </Text>
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
        backgroundColor: 'green',
        padding: 10,
        margin : 10,
        width : '95%'
    },

    btn2:{
        backgroundColor: 'orange',
        padding: 10,
        margin : 10,
        width : '95%'
    },

    btn3:{
        backgroundColor: 'yellow',
        padding: 10,
        margin : 10,
        width : '95%'
    },

    btn4:{
        backgroundColor: 'blue',
        padding: 10,
        margin : 10,
        width : '95%'
    },

    btn5:{
        backgroundColor: 'cyan',
        padding: 10,
        margin : 10,
        width : '95%'
    },

    btnText:{
        color:'#fff',fontWeight:'bold'
    },
});

AppRegistry.registerComponent('homemhs',() => HomeMhs);