import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Adoption } from '../../pages/Adoption';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMapQuestion from '../../assets/map-marker-question.svg';
import { Profile } from '../../pages/Profile';
import { Create } from '../../pages/Create';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#fff', height: 80, justifyContent: 'center', paddingBottom: 16, bottom: 0 },
                tabBarInactiveTintColor: '#999',
                tabBarActiveTintColor: '#EB4A69',
            }}
        >
            <Tab.Screen name="Adoption" component={Adoption} options={{
                tabBarIcon: ({color, size}) => {
                    return <Icon name="hand-holding-heart" size={size} color={color} />
                }
            }} />
            <Tab.Screen name="Find me" component={Adoption}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <IconMapQuestion width={size} height={size} fill={color} />
                    }
                }} />
            <Tab.Screen name="Create" component={Create}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Icon name='plus-circle' size={size} color={color} />
                    }
                }} />
            <Tab.Screen name="Map" component={Adoption}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Icon name='map' size={size} color={color}/>
                    }
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Icon name='user-alt' size={size} color={color}/>
                    }
                }} />
        </Tab.Navigator>
    );
}