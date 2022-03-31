import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { styles } from "./styles";

export function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [response, setResponse] = useState<null | boolean>(null)
    const createUser = async () => {
        const user = await api.post('/users', {
            name: name,
            email: email,
            password: password,
            phone: cellPhone
        }).then((res: any) => {
            console.log(res.data)
            res.data.success ? setResponse(true) : setResponse(false);
            return res.data.data;
        }).catch(() => setResponse(false));
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={24} color='#EB4A69' />
                </TouchableOpacity>
                <Text style={styles.title}>Create New Account</Text>
            </View>
            <View style={styles.content}>
                <KeyboardAvoidingView style={styles.keyboard}>
                    <Input value={name} onChange={setName} label={"Name"} placeholder={"Enter your name"} />
                    <Input value={email} onChange={setEmail} label={"E-mail"} placeholder={"Enter your e-mail"} />
                    <Input value={password} onChange={setPassword} label={"Password"} placeholder={"Enter your password"} />
                    <Input value={cellPhone} onChange={setCellPhone} label={"Cell Phone"} placeholder={"Enter your cell phone"} />
                    <TouchableOpacity style={styles.button_submit} onPress={createUser}>
                        <Text style={styles.text_button}>Create</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        {response ? <Text style={styles.success}>Account created successfully</Text> : null}
                        {response === false ? <Text style={styles.failed}>Something went wrong</Text> : null}
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.title}>
                        Already have an account? <Text style={styles.strong}>Sign In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}