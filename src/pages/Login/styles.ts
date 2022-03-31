import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        paddingTop: 72,
    },
    content: {
        width: '100%',
        marginTop: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 48,
        backgroundColor: '#fff',
        color: '#333',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        fontWeight: '700',
        fontSize: 16
    },
    link: {
        fontWeight: "700",
        color: "#EB4A69",
        fontSize: 14,
    },
    button: {
        width: '100%',
        height: 48,
        backgroundColor: '#EB4A69',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 24,
    },
    text_button: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    span: {
        color: "#e8e8e8"
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#e8e8e8"
    },
    ico: {
        width: 56,
        height: 56,
        borderRadius: 56,
        backgroundColor: '#fff',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4
    },
    text: {
        textAlign: "center",
        color: '#999'
    },
    error: {
        color: '#D33030',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 16
    }
})