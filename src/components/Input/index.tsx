import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

type InputType = {
    value: string;
    onChange: any;
    placeholder?: string;
    label: string;
    secureTextEntry?: boolean;
}

export function Input({value, onChange, placeholder, label, secureTextEntry}: InputType) {
    return (
        <View style={styles.input_box}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={onChange} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
        </View>
    );
}