import { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from "react-native";
import { CardType } from "../../components/CardType";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from "./styles";
import { api } from "../../services/api";
import { CardPet } from "../../components/CardPet";

export function Adoption() {
    const [active, setActive] = useState(0);
    const types = [
        {
            id: '0',
            id_string: '',
            name: 'All',
        },
        {
            id: '1',
            id_string: 'dog',
            name: 'Dogs'
        },
        {
            id: '2',
            id_string: 'cat',
            name: 'Cats'
        },
        {
            id: '3',
            id_string: 'rodents',
            name: 'Rodents'
        },
        {
            id: '4',
            id_string: 'exotic',
            name: 'Exotic'
        }
    ]
    const [pets, setPets] = useState<Array<any>>([]);

    const handlePets = async (type_id?: string) => {
        {
            type_id && type_id != '0' ? 
            await api.get(`pets/list-pets?type=${type_id}`).then(res => {
                setPets(res.data.data);
            }) :
            await api.get('pets').then(res => {
                setPets(res.data.data);
            })
        }
    }

    useEffect(() => {
        handlePets();
    }, []);
    useEffect(() => {
        handlePets();
    }, []);

    const handleClick = (index: number, type_id: string) => {
        setActive(index);
        handlePets(type_id);
    }
    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#fff', flex: 1, height: '100%', justifyContent: 'flex-start' }}>
            <ScrollView style={{ paddingVertical: 64}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                    <Icon
                        name="map-marker-alt"
                        size={24}
                        color={'#EB4A69'}
                    />
                    <Text style={{ marginHorizontal: 8, fontWeight: '700', color: '#555' }}>Catalão, GO</Text>
                    <Icon
                        name="chevron-down"
                        size={16}
                        color={'#EB4A69'}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, position: 'relative', justifyContent: 'center' }}>
                    <Icon
                        name="search"
                        size={18}
                        color={'#EB4A69'}
                        style={{ position: 'absolute', left: 32, zIndex: 9999, top: 11 }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#999"
                        placeholder="Search"
                    />
                </View>

                <FlatList
                    horizontal
                    data={types}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={{ maxHeight: 88, minHeight: 88, marginBottom: 8 }}
                    renderItem={({ item, index }) => <CardType type={item} index={index} active={active} onPress={() => handleClick(index, item.id)} />}
                />
                <View style={{ padding: 20, paddingBottom: 64, }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {pets?.map((item, index) => (
                            <CardPet key={index} pet={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}