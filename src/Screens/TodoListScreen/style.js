import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F9',
    },
    FakeBackground:{
        backgroundColor:"#4A3780",
        width:"100%",
        height:110,
        position:"absolute",
        zIndex:-1,
        top:50
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    footer: {
        flex: 3,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
    },
    SaveButton: {
        backgroundColor: '#4A3780',
        marginHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:60,
    },
    SaveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
    },
    header: {
        flex: 3,
        backgroundColor: '#4A3780',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    BackButton: {
        borderRadius: 100,
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        flex: 1,
        top: 10,
        left: 10,
    },
    HeaderDateText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 17,
        color: '#fff',
    },
    HeaderTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 30,
        color: '#fff',
    },
    main: {
        marginHorizontal: 25,
        flexDirection: 'column',
        // marginTop:30
    },
    IncompletedTodosContainer: {
        flexDirection: 'column',
    },
    CompletedTodosContainer: {
        flexDirection: 'column',
        marginVertical: 15,
    },
    CompletedText: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19,
        color: '#000',
        marginVertical: 15,
    },
});

export default styles;
