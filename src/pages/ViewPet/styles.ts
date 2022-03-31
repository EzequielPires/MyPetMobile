import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginTop: 32,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 24,
        color: '#333',
        fontWeight: '700',
        marginBottom: 4
    },
    type: {
        fontSize: 16,
        color: '#555',
        fontWeight: '700',
        textTransform: 'capitalize'
    },
    btn: {
        width: 280,
        height: 48,
        backgroundColor: '#eb4a69',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        marginBottom: 16
    },
    text_btn: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    },
    circle_one: {
        backgroundColor: '#CDCCE7',
        width: 56,
        height: 56,
        borderRadius: 56,
        alignItems: "center",
        justifyContent: "center"
    },
    circle_two: {
        backgroundColor: '#f5f5f5',
        width: 53,
        height: 53,
        borderRadius: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    name_owner: {
        fontSize: 18,
        color: '#15106a'
    },
    owner: {
        fontSize: 14,
        color: '#F9A529'
    },
});