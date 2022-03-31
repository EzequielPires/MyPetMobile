import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    user: {
        alignItems: 'center',
        marginTop: 24
    },
    circle_one: {
        backgroundColor: '#CDCCE7',
        width: 88,
        height: 88,
        borderRadius: 88,
        alignItems: "center",
        justifyContent: "center"
    },
    circle_two: {
        backgroundColor: '#f5f5f5',
        width: 85,
        height: 85,
        borderRadius: 85,
        alignItems: "center",
        justifyContent: "center"
    },
    name_owner: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 8,
        color: '#333'
    },
    owner: {
        fontSize: 14,
        color: '#F9A529'
    },
    switch: {
        height: 32,
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#999'
    },
    active: {
        borderColor: '#EB4A69'
    },
    text_switch: {
        fontSize: 14,
        fontWeight: '700',
        color: '#999'
    },
    text_active: {
        color: '#EB4A69'
    }
})