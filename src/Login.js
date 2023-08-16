
import {  View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Input,Button, Tab, TabView, Text } from 'react-native-elements'

import Delivery from '../assets/truck-delivery.gif'
import { useState } from 'react'
import googleIcon from '../assets/google_icon.png'

const Login = ({ navigation }) => {

  const [tabIndex, setTabIndex] = useState(0)

  return (
    <>
      <View>
        <Image source={Delivery} alt='delivery icon' className="w-full h-56" />
      </View>

      <View className="bg-[#2F57AE] h-screen rounded-tl-3xl rounded-tr-3xl">

        <Tab
          value={tabIndex}
          onChange={(e) => setTabIndex(e)}
          indicatorStyle={{
            backgroundColor: 'orange',
            height: 2,
            width: 100,
            marginLeft: 40


          }}

        >

          <Tab.Item
            title="Login"
            titleStyle={{ fontSize: 16, color: 'white' }}

          />

          <Tab.Item
            title="Sign up"
            titleStyle={{ fontSize: 16, color: 'white' }}
          />
        </Tab>



        {tabIndex === 0 && <View className="mx-4 mt-10">

          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white', size: 16 }}
            // onChangeText={value => this.setState({ comment: value })}
            style={{ marginLeft: 5, fontSize: 16 }}

          />
          <Input
            secureTextEntry={true}
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white', size: 16 }}
            // onChangeText={value => this.setState({ comment: value })}
            style={{ marginLeft: 5, fontSize: 16 }}
          />
          <View 
            style={{
                 flexDirection:'row',
                 gap:5,
                 justifyContent:'space-around',
                 marginBottom:5
                 
            }}
          >
            <Button title="Reset"  buttonStyle={{width:100,backgroundColor:'blue',borderRadius:20}}  />
            <Button title="Login" buttonStyle={{backgroundColor:'#EA833E', width:100,borderRadius:20}} />
            
            
          </View>
          <Text h4 style={{color:'#fff', textAlign:'center', marginVertical:10}}>------OR------</Text>
          <TouchableOpacity 
            onPress={() => { navigation.navigate("home") }}
            style={buttonStyle.btn}
          >
              <Image source={googleIcon} style={{width:25, height:25}} alt="icon"/>
             <Text style={{fontSize:16, color:'#fff'}}>SignIn with Goolgle</Text>
          </TouchableOpacity>
        </View>}

      </View>
    </>
  )

}

const buttonStyle =  StyleSheet.create({
   btn:{
    width:'100%',
     backgroundColor:"#12A5A5", 
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     paddingVertical:5,
     columnGap:18,
     borderRadius:10,
    
   }
})

export default Login