import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    select: {
        width: "100%",
        marginTop: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        paddingBottom: 8
    },
    label: {
        color: '#eb4a69',
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
    },
    button: {
        marginTop: 8,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    placeholder: {
        color: '#999'
    },
    modal: {
        paddingHorizontal: 16
    },
    title_modal: {
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        color: '#555'
    },
    item: {
        fontSize: 14,
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        fontFamily: 'Inter_500Medium',
        color: '#555'
    },
    selected: {
        fontSize: 14,
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        fontFamily: 'Inter_500Medium',
        color: '#eb4a69'
    }
})