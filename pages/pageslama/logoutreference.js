import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
 
    // Creating Login Activity.
    class LoginActivity extends Component { 
    // Setting up Login Activity title.
    static navigationOptions =
    {
      title: 'LoginActivity',
    };
 
    constructor(props) {
        super(props)
        this.state = {
        UserEmail: '',
        UserPassword: ''
        }
    }
 
    UserLoginFunction = () =>{
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;

    fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: UserEmail,
                password: UserPassword 
            })
 
        }).then((response) => response.json())
        .then((responseJson) => {
 
        // If server response message same as Data Matched
        if(responseJson === 'Data Matched')
        {
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { Email: UserEmail });
        }
        else
        {
          Alert.alert(responseJson);
        }
 
        }).catch((error) => {
        console.error(error);
      });
  }
 
  render() {
    return (
 
    <View style={styles.MainContainer}>
        <Text style= {styles.TextComponentStyle}>User Login Form</Text>
        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
          onChangeText={UserEmail => this.setState({UserEmail})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
          onChangeText={UserPassword => this.setState({UserPassword})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass} 
          secureTextEntry={true}
        />
 
        <Button title="Click Here To Login" 
            onPress={this.UserLoginFunction} color="#2196F3" />
    </View>
            
        );
    }
}
 
// Creating Profile activity.
    class ProfileActivity extends Component{
        // Setting up profile activity title.
        static navigationOptions =
        {
        title: 'ProfileActivity',   
        };
 
   render(){ 
     const {goBack} = this.props.navigation;

    return(
        <View style = { styles.MainContainer }>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>

            <Button title="Click here to Logout" 
            onPress={ () => goBack(null) } /> 
         </View>
      );
   }
}
 
export default MainProject = StackNavigator(
    {
        First: { screen: LoginActivity },
        Second: { screen: ProfileActivity }
    });
 
const styles = StyleSheet.create({ 
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10,
    },
 
    TextInputStyleClass: { 
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3', 
        // Set border Radius.
        borderRadius: 5 ,
    },
 
    TextComponentStyle: {
        fontSize: 20,
        color: "#000",
        textAlign: 'center', 
        marginBottom: 15
    }
});