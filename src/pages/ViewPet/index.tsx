import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Linking, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";

export function ViewPet() {
    const navigation = useNavigation();
    const route = useRoute();

    const { pet }: any = route.params;
    let avatar = 'https://avatars.githubusercontent.com/u/52329523?v=4'
    const message = `Olá ${pet.user.name}, estou entrando em contato pois gostaria de adotar o pet ${pet.name}`;

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+55 ${pet.user.phone}&text=${message}`);
    }
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{ position: 'absolute', top: 32, left: 20, zIndex: 9999 }}  onPress={() => {
                navigation.goBack();
            }}>
                <Icon name="chevron-left" size={24} color={'#fff'}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', top: 32, right: 20, zIndex: 9999, height: 32, width: 32, justifyContent: "center", alignItems: "center", borderRadius: 32, backgroundColor: '#fff' }}  onPress={() => {
                navigation.goBack();
            }}>
                <AntDesign name="hearto" size={18} color={'#EB4A69'}/>
            </TouchableOpacity>
            <View>
                <Image source={{ uri: `http://192.168.0.138:3000/photos/${pet.photos[0].filename}` }} style={{ width: '100%', height: 294, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }} />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16, borderBottomWidth: 1, borderColor: '#EB4A69', paddingBottom: 16 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#555' }}>Age</Text>
                        <Text style={{ fontSize: 16, color: '#333', fontWeight: '700' }}>{pet.age.name}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#555' }}>Sex</Text>
                        <Text style={{ fontSize: 16, color: '#333', fontWeight: '700', textTransform: 'capitalize' }}>{pet.gender === "0" ? "Female" : "Male"}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#555' }}>Size</Text>
                        <Text style={{ fontSize: 16, color: '#333', fontWeight: '700' }}>Great</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, marginTop: 16 }}>
                    <Icon
                        name="map-marker-alt"
                        size={12}
                        color={'#EB4A69'}
                    />
                    <Text style={{ marginHorizontal: 8, fontSize: 12, fontWeight: '700', color: '#555' }}>Catalão, GO</Text>
                </View>
                <Text style={styles.name}>{pet.name}</Text>
                <Text style={styles.type}>{pet.type.name} - {pet.race.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#333', marginTop: 32 }}>About</Text>
                <Text style={{ fontSize: 16, color: '#333', marginTop: 8 }}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
                </Text>
                <View style={styles.user}>
                    <View style={styles.circle_one}>
                        <View style={styles.circle_two}>
                            <Image source={{ uri: avatar }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                        </View>
                    </View>
                    <View style={{ marginLeft: 8, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                        <View>
                            <Text style={styles.name_owner}>Ezequiel Pires e Silva</Text>
                            <Text style={styles.owner}>Owner</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 24, alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn} onPress={sendWhatsapp}>
                        <Text style={styles.text_btn}>Message</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}