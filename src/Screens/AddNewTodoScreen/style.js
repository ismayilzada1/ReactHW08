import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F5F9"
    },
    main:{
        flex:25,
        marginHorizontal:25,
        marginTop:30
    },
    footer:{
        flex:3,
        backgroundColor:"#F1F5F9",
        justifyContent:"center"
    },
    SaveButton:{
        backgroundColor:"#4A3780",
        marginHorizontal:35,
        paddingVertical:15,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    SaveButtonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"700",
        lineHeight:24
    },
    header:{
        flex:3,
        backgroundColor:"#4A3780",
        flexDirection:"row",
        alignItems:"center"
    },
    HeaderTextContainer:{
      flex:1,
        alignItems:"center"
    },
    CloseButton: {
        borderRadius: 100,
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        position:"absolute",
    },
    CloseButtonText: {
        fontSize: 45,
        textAlign: "center",
        width: '100%',
        transform: [{ rotate: '45deg' }],
        marginTop: -8,
        marginLeft:8,
        fontWeight:"400",
    },
    HeaderText:{
        color:"#fff",
        fontSize:17,
        fontWeight:"600",
        lineHeight:17,
    },
    TaskTitleContainer:{
        flex:1,
        justifyContent:"flex-end"
    },
    TaskTitle:{
        fontSize:14,
        fontWeight:"600",
        lineHeight:15,
        color:"#1B1B1D",
        marginVertical:5
    },
    TaskTitleInput:{
      backgroundColor:"white",
        fontSize:20,
        paddingLeft:10,
        borderRadius:6,
        paddingVertical:9,
        borderColor:"#E0E0E0"
    },
    DateAndTimeContainer:{
        flex:1,
        flexDirection:"row",
    },
    DateContainer:{
        flex:1,
    },
    TimeContainer:{
        flex:1,
    },
    TaskNotesContainer:{
        flex:4,
    },
    CategoriesContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"

    },
    CategoryText:{
      flex:1,
        fontWeight:"600",
        fontSize:14,
        lineHeight:15,
        color:"#000"
    },
    CategoryButtonsContainer:{
        flex:3,
        flexDirection:"row",
        gap:20
    },
    DateText:{
        fontSize:14,
        fontWeight:"600",
        lineHeight:15,
        marginBottom:15
    },
    TimeText:{
        fontSize:14,
        fontWeight:"600",
        lineHeight:15,
        marginBottom:15
    },
    NotesText:{
        fontSize:14,
        fontWeight:"600",
        lineHeight:15,
        marginBottom:15
    },
    NotesInput: {
        height: 150,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        padding: 10,
        backgroundColor:"#fff"
    },
    dateIcon:{
        marginRight:5
    },
    FakeInput:{
        borderWidth:1,
        borderColor:"#E0E0E0",
        backgroundColor:"white",
        borderRadius:6,
        justifyContent:"space-between",
        flexDirection:"row",
        paddingVertical:8,
        marginLeft:5,
        alignItems:"center"
    },
    FakeInputText:{
        fontSize:17,
        fontWeight:600,
        flex:1,
        textAlign:"center"
    }

});

export default styles;
