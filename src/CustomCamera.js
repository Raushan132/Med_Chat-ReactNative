import { Image, Text, View } from 'react-native'
import {Camera,CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react'
import Button from './CustomButtons'

const CustomCamera = ()=>{

  const [hasCameraPermission,setHasCameraPermission] = useState(null);
  const [image,setImage] = useState(null);
  const [type,setType] = useState(Camera.Constants.Type.back);
  const [flash,setFlash] = useState(Camera.Constants.FlashMode.off)
  const cameraRef = useRef(null);

  useEffect(()=>{
      const media = async ()=>{
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status==='granted');
        
      }
      media();
  },[])
   
  const reset = ()=>{
    setImage(null)
  }
  const takePicture = async ()=>{
    if(cameraRef){
      try{
         const data = await cameraRef.current.takePictureAsync();
         console.log(data);
         setImage(data.uri);
      }catch(e){
        console.log(e)
      }
    }
  }
  
    return (
      <View>
        {
          !image?
        <Camera
          className="flex w-full h-[80%] bg-black"
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
       
        </Camera> :

        <Image source={{uri:image}} className="flex w-full h-[80%]" />
        }
        <View>
          {!image? <Button
         title={"Picture"}
         icon={"camera"}
         onPress={takePicture}
       /> :
       <Button
         title={"cancle"}
         icon={"camera"}
         onPress={reset}
       />
          }
        </View>
      </View>
    )
  
}

export default CustomCamera