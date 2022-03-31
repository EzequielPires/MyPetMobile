import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 56,
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Inter_500Medium',
        fontSize: 16
    },
    keyboard: {
        paddingHorizontal: 16
    },
    input_box: {
    
    },
    label: {
        color: '#eb4a69',
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ededed'
    },
    btn_submit: {
        height: 48,
        width: '100%',
        marginTop: 32,
        backgroundColor: '#eb4a69',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 32
    },
    text_button: {
        color: '#fff',
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
    }

})