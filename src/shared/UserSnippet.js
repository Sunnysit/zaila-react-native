import React,{useState} from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';

const UserSnippet = () => {

    const [userInfo,setUserInfo] = useState({
        name:"Sunny",
        thumbnailUri:'zaila/assets/snapshot.jpg',
        level:16
    })

    return (
        <View style={styles.container}>
            <View style={styles.snapshotContainer}>
                <Image 
                style={styles.snapshot}
                source={require('zaila/assets/snapshot.jpg')}/>
            </View>
            <View style={styles.levelTextContainer}>
            <Text style={styles.levelText}>Lv.{userInfo.level}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:80,
        height:80,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'coral'
    },
    snapshotContainer:{
        borderRadius:50,
        overflow:'hidden',
        width:65,
        height:65,
        position:'relative',
        top:10
    },
    snapshot:{
        width:'100%',
        height:'100%'
    },
    levelTextContainer:{
        backgroundColor:'gray',
         width:'80%',
         borderRadius:5,
         position:'relative',
         top:5
    }
    ,
    levelText:{
        textAlign:'center',
    }
})

export default UserSnippet