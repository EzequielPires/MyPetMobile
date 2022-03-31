import { useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styles";

type Select = {
    label: any;
    placeholder: string;
    options: Array<any>;
    onChange: any;
    selected: any;
}

export function Select({ label, placeholder, options, selected, onChange }: Select) {
    const [modalVisible, setModalVisibel] = useState(false);

    return (
        <>
            <View style={styles.select}>
                <Text style={styles.label}>{label}</Text>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisibel(!modalVisible)}>
                    <Text style={styles.placeholder}>{selected && selected.name ? selected.name : placeholder}</Text>
                    <Icon name="chevron-down" size={14} color='#999' />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisibel(false)}
            >
                <View style={styles.modal}>
                    <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={() => setModalVisibel(!modalVisible)}
                    >
                        <Icon name="chevron-left" size={24} color='#999' />
                        <Text style={styles.title_modal}>{placeholder}</Text>
                    </TouchableOpacity>
                    {
                        options ?
                            <FlatList
                                style={{ marginTop: 16 }}
                                data={options}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => {
                                        onChange(item);
                                        setModalVisibel(false);
                                    }}>
                                        <Text style={selected === item.name ? styles.selected : styles.item}>{item.name ?? item}</Text>
                                    </TouchableOpacity>
                                }
                            />
                            : null
                    }
                </View>
            </Modal>
        </>
    );
}