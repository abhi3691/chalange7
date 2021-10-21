import React,{Component} from 'react'

import {View,StyleSheet,TextInput,Text,TouchableHighlight,TouchableOpacity,Image,ImageBackground} from 'react-native'

export default class App  extends Component{
    render(){
        return(
            <View style ={styles.Container}> 
            
          
            <ImageBackground source ={require('./assets/bg.jpg')} 
            style= {styles.BackgroundImage} >

            <Image style={styles.logoStyle} source={require("./assets/twitter-icon.png")} />
            <TextInput style ={styles.textInputStyle}  placeholder ='User Name' placeholderTextColor = 'blue'></TextInput>
            <TextInput style ={styles.textInputStyle}  placeholder ='Password' placeholderTextColor = 'blue' secureTextEntry = {true}></TextInput>
            <TouchableHighlight style ={styles.buttonStyle}>
                <Text style={styles.ButtonTextStyle}>
                    LOGIN
                </Text>
            </TouchableHighlight>

            <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style= {styles.SinUpContainer}>
                <Text>
                    Dont have an account?
                </Text>
                <TouchableOpacity style = {styles.SigUpText}>
                    <Text>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    Container:{
        height:'100 %',
        width:'100 %',
        backgroundColor: '#fff',
        
    },
    logoStyle:{
        width:100,
        height:100
    },

      
    BackgroundImage:{
        height:'100 %',
        width:'100 %',
        alignItems:'center',
        justifyContent:'center'
    },
    textInputStyle:{
        borderColor:'darkblue',
        borderRadius:8,
        borderWidth:1,
        width:'60 %',
        marginTop:10,
        paddingLeft:10

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
        
        marginTop:10
      },

      SinUpContainer:{
        height:50,
        width:'100 %',
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:20,
        
    },
    SigUpText:{
        
        color:'#001878',
        fontSize:20,
        fontWeight:'800',
        backgroundColor:'#fff',
        marginLeft:20,
        borderColor:'darkblue',
        borderRadius:20,
        borderWidth:5,
        width:70,
        height:40,
        alignItems:'center',
        justifyContent:'center'


        
        
    }
})