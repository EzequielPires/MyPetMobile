import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: 58,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    title: {
        fontFamily: 'Inter_500Medium',
        color: '#333',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    keyboard: {
        
    },
    button_submit: {
        marginTop: 32,
        backgroundColor: '#EB4A69',
        height: 48,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    text_button: {
        color: '#fff',
        fontFamily: 'Inter_500Medium'
    },
    success: {
        marginTop: 24,
        color: '#78B296'
    },
    failed: {
        marginTop: 24,
        color: '#D9002A'
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        paddingBottom: 24
    },
    strong: {
        color: '#EB4A69',
        fontFamily: 'Inter_700Bold'
    }
});