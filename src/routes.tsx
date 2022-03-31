import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Adoption } from './pages/Adoption';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { ViewPet } from './pages/ViewPet';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="ViewPet" component={ViewPet}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}