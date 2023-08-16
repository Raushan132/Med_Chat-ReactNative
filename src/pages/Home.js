import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Prescription from '../../assets/prescription.png'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import Refund from '../../assets/refund.png'


const Home = ({navigation}) => {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 20 }}>

            <View className="bg-[#1D9DE5] w-full  pl-10 py-5 rounded-tl-3xl rounded-br-3xl flex-row ">
                <View style={{ overflow: 'visible', gap: 10 }}>
                    <View>
                        <Text className='text-white text-lg '>Take a Picture & </Text>
                        <Text className='text-white text-lg '>Buy Product</Text>
                    </View>
                    <TouchableOpacity style={style.captureBtn} onPress={()=>navigation.navigate('customCamera')}>
                        <AntDesign name='camera' size={20} color='white' />
                        <Text style={{color:'white'}} >Capture</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.prescriptionIco}>
                    <Image source={Prescription} alt="ico" style={{ width: 150, height: 150 }} />
                </View>
            </View>

            <View style={{flexDirection:'row',gap:20, flexWrap:'wrap',}}>

                    <View style={[style.box,style.shadowStyle]}>
                        <AntDesign name='wechat' size={50} color='orange' />
                        <Text style={{fontSize:18, color:'orange', fontWeight:'bold'}}>Chat & Buy</Text>                        
                    </View>

                    <View style={[style.box,style.shadowStyle]}>
                        <FontAwesome name='history' size={50} color='orange' />
                        <Text style={{fontSize:18, color:'orange', fontWeight:'bold'}}>Payment History</Text>                        
                    </View>

                    <View style={[style.box,style.shadowStyle]}>
                        <Ionicons name='person-circle-outline' size={50} color='orange' />
                        <Text style={{fontSize:18, color:'orange', fontWeight:'bold'}}>Profile</Text>                        
                    </View>

                    <View style={[style.box,style.shadowStyle]}>
                        <Image source={Refund} alt="refund" style={{width:100, height:100}}/>
                        <Text style={{fontSize:18, color:'orange', fontWeight:'bold', transform:[{translateY:-20}]}}>Refund</Text>                        
                    </View>

                    <View style={[style.box,style.shadowStyle]}>
                        <AntDesign name='infocirlce' size={50} color='orange' />
                        <Text style={{fontSize:18, color:'orange', fontWeight:'bold'}}>About</Text>                        
                    </View>
                   
                   
            </View>


        </ScrollView>
    )
}

const style = StyleSheet.create({
    captureBtn:{ 
        width: 100,
        flexDirection: 'row', 
        gap: 10, 
        alignItems: 'center', 
        backgroundColor: '#3EE0EA', 
        justifyContent: 'center', 
        paddingVertical: 5, 
        borderRadius: 20
     },
     box:{
        width:"45%", 
        backgroundColor:'white',
        height:100, 
        marginTop:20,
        justifyContent:'center',
        alignItems:'center' 
       
     },
     shadowStyle:{
        shadowOpacity:1,
        shadowColor:'red',
        shadowRadius:20,
        shadowOffset:{width:1,height:1}
     },
     prescriptionIco:{ 
        alignItems: 'flex-end', 
        flex: 1, 
        transform: [{ translateX: 40 }, { translateY: 20 }, { rotateZ: '15deg' }], 
        position: 'absolute', 
        right: 10 
    }
})

export default Home