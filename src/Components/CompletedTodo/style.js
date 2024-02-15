import React from 'react';
import {StyleSheet} from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        maxHeight:80,
        backgroundColor:"#fff",
        borderColor:"#e5e5e5",
        minHeight:80
    },
    IconContainer:{
        flex:3,
        alignItems:"center",
        justifyContent:"center"
    },
    TitleContainer:{
        flex:10,
        justifyContent:"center",
        gap:6
    },
    CheckboxContainer:{
        flex:3,
        alignItems:"center",
        justifyContent:"center"
    },
    image: {
        width: 30,
        height: 30,
    },
    Icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:.5
        // backgroundColor: '#E7E2F3',
    },
    firstTitle:{
        fontWeight:600,
        fontSize:16,
        lineHeight:17,
        textDecorationLine:"line-through"
    },
    secondTitle:{
        fontWeight:500,
        fontSize:14,
        lineHeight:16,
        textDecorationLine:"line-through"
    },
    checkbox:{
        width:24,
        height:24,
    }
});

export default styles;