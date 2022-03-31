import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

export const TOKEN_KEY = "@mypet:token";

export const onSignIn = (user: any, token: string) => {
    AsyncStorage.setItem(TOKEN_KEY, token);
    let json = JSON.stringify(user);
    AsyncStorage.setItem("User", json);
};

export const onSignOut = () => {
    AsyncStorage.removeItem(TOKEN_KEY)
    AsyncStorage.removeItem("User");
};

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null) ? true : false;
};

export const userLogado = async () => {
    return await AsyncStorage.getItem('User').then((res:any) => {
        return JSON.parse(res);
    });
}