import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import IconFa from "react-native-vector-icons/FontAwesome5";
import { CardPet } from "../../components/CardPet";
import { api } from "../../services/api";
import { styles } from "./styles";
import { TOKEN_KEY, userLogado } from "../../services/auth";

export function Profile() {
    const [user, setUser] = useState<any>(null);
    const [switchButton, setSwitchButton] = useState<number>(1);
    const [pets, setPets] = useState<Array<any>>([]);

    const handlePets = async () => {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        await api.get('pets/my-pets', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            console.log(res.data)
            setPets(res.data.data);
        })
    }

    const handleUser = async () => {
        const user = await userLogado();
        setUser(user);
        console.log(user);
    }

    useEffect(() => {
        handleUser();
        handlePets();
    }, []);

    let avatar = 'https://avatars.githubusercontent.com/u/52329523?v=4';
    if (!user) {
        return null
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 48, paddingHorizontal: 20 }}>
                <IconFa name="envelope" size={24} color={'#EB4A69'} />
                <IconFa name="cog" size={24} color={'#EB4A69'} />
            </View>
            <View>
                <View style={styles.user}>
                    <View style={styles.circle_one}>
                        <View style={styles.circle_two}>
                            <Image source={{ uri: avatar }} style={{ width: 82, height: 82, borderRadius: 82 }} />
                        </View>
                    </View>
                    <View style={{ marginLeft: 8, flexDirection: 'row', flex: 1 }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.name_owner}>{user.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <IconFa
                                    name="map-marker-alt"
                                    size={18}
                                    color={'#999'}
                                />
                                <Text style={{ marginHorizontal: 8, fontSize: 14, fontFamily: 'Inter_600SemiBold', color: '#999' }}>Catalão, GO</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, marginTop: 8 }}>
                                <IconFa
                                    name="phone-alt"
                                    size={18}
                                    color={'#999'}
                                />
                                <Text style={{ marginHorizontal: 8, fontSize: 14, fontFamily: 'Inter_600SemiBold', color: '#999' }}>{user.phone}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 16 }}>
                    <TouchableOpacity style={[styles.switch, switchButton === 1 ? styles.active : null]} onPress={() => {
                        setSwitchButton(1);
                    }}>
                        <Text style={[styles.text_switch, switchButton === 1 ? styles.text_active : null]}>Publications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.switch, switchButton === 2 ? styles.active : null]} onPress={() => {
                        setSwitchButton(2);
                    }}>
                        <Text style={[styles.text_switch, switchButton === 2 ? styles.text_active : null]}>Favorites</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {pets?.map((item, index) => (
                            <CardPet pet={item} />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}