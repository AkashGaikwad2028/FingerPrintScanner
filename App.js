import React, { useState,useEffect } from 'react'
import {View,Text, TouchableOpacity} from "react-native"
import TouchID from 'react-native-touch-id'
import CustomeId from './src/CustomeId';




export default function App() {

  const handleSuccess = () => {
    console.log('Authentication successful!');
    alert('Authentication successful!');
  };

  const handleFailure = error => {
    console.log(`Authentication failed with error: ${error}`);
    alert(`Authentication failed with error: ${error}`);
  };


//   const optionalConfigObject = {
//     title: 'Authentication Required', 
//     imageColor: 'red', 
//     imageErrorColor: 'blue', 
//     sensorDescription: 'Touch sensor',
//     sensorErrorDescription: 'Failed',
//     cancelText: 'Cancel', 
//     unifiedErrors: false,
//   }

// const checkBiometricAuthentication=()=>{
//   TouchID.authenticate("Scan your Finger To Authenticate",optionalConfigObject)
//  .then (success =>{
//      console.log(success)
//   alert("Authenticated successfully")
//  })
//  .catch(error => {
//   alert('Authentication Failed',error);
// });
// }


  return ( 
   <View style={{flex:1,flexDirection:"column",justifyContent:"center",marginHorizontal:20}}>
    {/* <Text style={{textAlign:"center",marginBottom:20,fontWeight:"bold",fontSize:20}}>Fingerprint Scanner</Text>
    <TouchableOpacity style={{backgroundColor:"blue",padding:10}} onPress={checkBiometricAuthentication}>
      <Text style={{textAlign:"center"}}>CheckBiomtric</Text>
    </TouchableOpacity> */}
    <CustomeId handleFailure={handleFailure} handleSuccess={handleSuccess}promptMessage="Authenticate with TouchID" />
   </View>
  )
}
