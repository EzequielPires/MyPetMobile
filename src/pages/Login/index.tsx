import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.svg";
import TwitterSvg from "../../assets/twitter.svg";
import FacebookSvg from "../../assets/facebook.svg";
import GoogleSvg from "../../assets/google.svg";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";
import { Input } from "../../components/Input";

export function Login() {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<boolean | null>(null);
    const navigation = useNavigation<any>();


    const handleLogin = async () => {
        const res = await signIn({ email: email, password: password });
        console.log(res);
        if (res) {
            navigation.navigate('Main');
        } else {
            setError(true);
        }
    }
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Logo />
            <View style={styles.content}>
                <Text style={styles.title}>Faça seu login</Text>
                {error ? <Text style={styles.error}>Email e/ou senha incorreto!</Text> : null}
                <Input value={email} onChange={setEmail} label={"E-mail"} placeholder={"Entre com seu email"}/>
                <Input value={password} onChange={setPassword} label={"Senha"} placeholder={"Entre com sua senha"} secureTextEntry={true}/>
                <View style={{ width: '100%', alignItems: 'flex-end', marginTop: 16 }}>
                    <Text style={styles.link}>Esqueceu a senha?</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.text_button}>Entrar</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 32, marginBottom: 32 }}>
                    <View style={[styles.line, { marginRight: 8 }]}></View>
                    <Text style={styles.span}>ou</Text>
                    <View style={[styles.line, { marginLeft: 8 }]}></View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 72 }}>
                    <View style={styles.ico}>
                        <TwitterSvg />
                    </View>
                    <View style={styles.ico}>
                        <FacebookSvg />
                    </View>
                    <View style={styles.ico}>
                        <GoogleSvg />
                    </View>
                </View>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.text}>
                        Não tem uma conta?
                        <Text style={styles.link}> Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}