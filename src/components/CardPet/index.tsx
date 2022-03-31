import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from "./styles";

export function CardPet({ pet }: any) {

    const navigation = useNavigation<any>();

    const handleToViewPet = () => {
        navigation.navigate('ViewPet', {pet})
    }

    return (
        <TouchableOpacity style={styles.card} onPress={handleToViewPet}>
            <View style={styles.card_header}>
                {
                    pet.photos && pet.photos.length > 0 ?
                    <Image
                        style={{ width: '100%', height: 102, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                        source={{ uri: `http://192.168.0.39:3000/photos/${pet.photos.length > 0 && pet.photos[0].filename ? pet.photos[0].filename : ''}` }}
                    /> : null
                }
            </View>
            <View style={{ padding: 8 }}>
                <View style={{ flexDirection: "row" }}>
                    {pet?.gender === 'female' ? <Text style={styles.female}>Female</Text> : <Text style={styles.male}>Male</Text>}
                    <Text style={styles.gender}>{pet.age.name}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}}>
                    <Icon
                        name="map-marker-alt"
                        size={12}
                        color={'#EB4A69'}
                    />
                    <Text style={{ marginHorizontal: 8, fontSize: 12, fontWeight: '700', color: '#555' }}>Catalão, GO</Text>
                </View>
                <Text style={styles.name}>{pet.name}</Text>
                <Text style={styles.type}>{pet.type.name} - {pet.race.name}</Text>
            </View>
        </TouchableOpacity>
    );
}