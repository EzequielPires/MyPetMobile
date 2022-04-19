import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Select } from "../../components/Select";
import { useNavigation } from "@react-navigation/native";
import { TOKEN_KEY } from "../../services/auth";

import * as ImagePicker from 'expo-image-picker';

import { initializeApp } from 'firebase/app';
import * as FileSystem from 'expo-file-system';
import { FileSystemUploadType } from "expo-file-system";

const firebaseConfig = {
    apiKey: "AIzaSyC_PQRYqRmsE6mk6cvgHUs7nWZFRdHfZyY",
    authDomain: "mypet-62d19.firebaseapp.com",
    projectId: "mypet-62d19",
    storageBucket: "mypet-62d19.appspot.com",
    messagingSenderId: "611284061002",
    appId: "1:611284061002:web:c907800c82055a45114fb3",
    measurementId: "G-0ZJDS30H1Z"
};
initializeApp(firebaseConfig);

export function Create() {
    const [image, setImage] = useState<any>(null);
    const [name, setName] = useState('');
    const [type, setType] = useState<any>(null);
    const [race, setRace] = useState<any>(null);
    const [age, setAge] = useState<any>(null);
    const [sex, setSex] = useState<any>(null);
    const [listType, setListType] = useState<any>(null);
    const [listRace, setListRace] = useState<any>(null);
    const [listAge, setListAge] = useState<any>(null);
    const listSex = [
        {
            id: '0',
            name: 'Female'
        },
        {
            id: '1',
            name: 'Male'
        },
    ]
    const [uri, setUri] = useState(null);

    const handlePets = async () => {
        await api.get('type').then(res => {
            setListType(res.data.data);
        })
        await api.get('race').then(res => {
            setListRace(res.data.data);
        })
        await api.get('age').then(res => {
            setListAge(res.data.data);
        })
    }
    const uploadImage = async (id: any, uri: any) => {
        console.log(id);
        console.log(uri);
        await FileSystem.uploadAsync(`http://192.168.0.138:3000/photos/upload/${id}`, uri, {
            uploadType: FileSystemUploadType.MULTIPART,
            fieldName: "file"
        });
    }

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result);
            setUri(result.uri);
        }
    };
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result: any = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            setImage(result);
            let localUri = result.uri;
            let filename = localUri.split('/').pop();

            // Infer the type of the image
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            // Upload the image using the fetch and FormData APIs
            let formData: any = new FormData();
            const token = await AsyncStorage.getItem(TOKEN_KEY);
            // Assume "photo" is the name of the form field the server expects

            formData.append('file', {
                fieldname: new Date() + "_filename",
                uri: localUri,
                type: 'image/jpg'
            });
            await api.post('/photos/upload', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                }
            })
        }
    }

    const navigation = useNavigation<any>();

    const handleCreatePet = async () => {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        await api.post('/pets', {
            type: type.id,
            race: race.id,
            age: age.id,
            gender: sex.id,
            name: name,
        },
            {
                headers: { Authorization: `Bearer ${token}` }
            }).then(async (res) => {
                await uploadImage(res.data.data.id, uri).then(() => {
                    navigation.navigate("Main", {
                        screen: "Adoption"
                    })
                });
            }).catch(() => {
                navigation.navigate('Main');
            })
    }

    useEffect(() => {
        handlePets();
    }, []);
    useEffect(() => {
        navigation.addListener('focus', () => {
            setImage(null);
            setName('');
            setType(null);
            setRace(null);
            setAge(null);
            setSex(null);
        });
    }, [navigation]);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Icon name="chevron-left" size={24} color='#EB4A69' />
                </TouchableOpacity>
                <Text style={styles.title}>Create a new adoption post</Text>
            </View>
            <KeyboardAvoidingView style={styles.keyboard}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
                    {
                        image ?
                            <Image source={{ uri: image.uri }} style={{ width: 200, height: 200, marginBottom: 16, borderRadius: 16 }} />
                            :
                            <View style={{ height: 200, justifyContent: 'center', marginBottom: 16 }}>
                                <Icon name="images" size={24} color="#555" />
                            </View>
                    }
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={pickImage} style={{ marginRight: 24 }}>
                            <Entypo name="folder" size={24} color="#555" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openCamera}>
                            <Icon name="camera" size={24} color="#555" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.input_box}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        placeholder="Enter the pet name"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                </View>
                <Select
                    label="Type of pety"
                    placeholder="Select the type of pet"
                    options={listType}
                    onChange={setType}
                    selected={type}
                />
                <Select
                    label="Race"
                    placeholder="Select the type race"
                    options={listRace}
                    onChange={setRace}
                    selected={race}
                />
                <Select
                    label="Age"
                    placeholder="Select the pet age"
                    options={listAge}
                    onChange={setAge}
                    selected={age}
                />
                <Select
                    label="Sex"
                    placeholder="Select the pet sex"
                    options={listSex}
                    onChange={setSex}
                    selected={sex}
                />
                <TouchableOpacity style={styles.btn_submit} onPress={() => handleCreatePet()}>
                    <Text style={styles.text_button}>Submit post</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}