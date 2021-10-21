import React,{Component} from 'react'

import {View,StyleSheet,TextInput,Text,TouchableHighlight,Image} from 'react-native'

export default class Register  extends Component{
    render(){
        return(
            <View style ={styles.Container}> 

            <Image style={styles.logoStyle} source={require("./assets/twitter-icon.png")} />
            <TextInput style ={styles.textInputStyle}  placeholder ='Name' placeholderTextColor = 'lightblue'></TextInput>
            <TextInput style ={styles.textInputStyle}  placeholder ='Email' placeholderTextColor = 'lightblue' keyboardType ='email-address'></TextInput>
            <View style = {styles.PhoneContainer}>
            <TextInput style = {styles.codeStyle} >
                +91
            </TextInput>
            <TextInput style ={styles.PhoneInputStyle}  
            placeholder ='Mob no' placeholderTextColor = 'lightblue'
            keyboardType ='phone-pad' ></TextInput>
            
            </View>

            <TextInput style ={styles.textInputStyle}  placeholder ='Password' placeholderTextColor = 'lightblue' secureTextEntry = {true}></TextInput>
            <TouchableHighlight style ={styles.buttonStyle}>
                <Text style={styles.ButtonTextStyle}>
                    Register
                </Text>
            </TouchableHighlight>

             </View>
        )
    }
}

const styles = StyleSheet.create({

    Container:{
        height:'100 %',
        width:'100 %',
        alignItems:'center',
        justifyContent:'center'
        
    },
    logoStyle:{
        width:100,
        height:100
    },

      

    
    textInputStyle:{
        borderColor:'darkblue',
        borderRadius:8,
        borderWidth:1,
        width:'65 %',
        marginTop:10,
        paddingLeft:10

        

    },

    PhoneContainer:{
        height:60,
        width:'100 %',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },

    PhoneInputStyle:{
        borderColor:'darkblue',
        borderRadius:8,
        borderWidth:1,
        width:'55 %',
        marginTop:10,
        paddingLeft:10,
        marginLeft:5
    },

    
    codeStyle:{
        borderColor:'darkblue',
        borderRadius:8,
        borderWidth:1,
        width:'10 %',
        marginTop:10,
        paddingLeft:10,
    },
    
    buttonStyle:{
        backgroundColor:'darkblue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        width:"50 %",
        marginTop:20,
        height:55

        
    },
    ButtonTextStyle:{
        color:'white',
        fontSize:18
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        marginTop:10
      }

})