import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constant/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h1 * 1.5
    },
    subtitle: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        paddingTop: 3,
    },
    dataContainer: {
        marginTop: 50,
    },

    customBorder:{
        borderColor:COLORS.blue,
        borderWidth: 3,
        backgroundColor:COLORS.white,
       
    },
    textinput: {
        color: COLORS.blue,
        fontSize: SIZES.h3,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        padding:10,
    },
    btnContainer: {
        marginTop: 50,
    },
    button1: {
        backgroundColor: COLORS.primary,
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h4,
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginRight: 10,
    },
    text: {
        color: COLORS.blue,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600',
        fontSize: SIZES.h5,
    },
    bottomContainer: {
        justifyContent: 'center',
        marginTop: 50,
    }
});

export default styles;