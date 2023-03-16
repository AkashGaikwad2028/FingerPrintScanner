import React,{useState,useEffect} from 'react'
import TouchID from 'react-native-touch-id'
import {View,Text,Button} from "react-native"

export default function CustomeId({ handleSuccess, handleFailure, promptMessage }) {
    // const [biometricImage, setBiometricImage] = useState(require('./biometric.png'));

    const authenticate = async () => {
        console.log("ussssssssssssssssssssss")
        try {
          const success = await TouchID.authenticate(promptMessage, {
            fallbackLabel: 'Use Passcode',
            passcodeFallback: true,
            customUI: true,
            sensorErrorDescription: 'Failed. Try Again!',
          });
          if (success) {
            // setBiometricImage(require('./biometric-success.png'));
            handleSuccess();
          }
        } catch (error) {
        //   setBiometricImage(require('./biometric-failure.png'));
          handleFailure(error);
        }
      };


  return (
   <View>
    <Text>Custome</Text>
    <Button title='Touch' onPress={authenticate}/>
   </View>
  )
}
