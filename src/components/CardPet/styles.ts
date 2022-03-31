import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: '47%',
        height: 'auto',
        borderWidth: 1,
        borderColor: '#ebebeb',
        borderRadius: 8,
        marginBottom: 20
    },
    card_header: {
        height: 102
    },
    name: {
        fontSize: 16,
        color: '#333',
        fontWeight: '700'    
    },
    female: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 16,
        backgroundColor: '#FFC8D2',
        color: '#EB4A69'
    },
    male: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 16,
        backgroundColor: '#CDE5F8',
        color: '#5E82AF'
    },
    gender: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginLeft: 8,
        borderRadius: 16,
        backgroundColor: '#D2E4DA',
        color: '#78B296',
    },
    type: {
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
        color: '#555',
        textTransform: 'capitalize'
    }
});