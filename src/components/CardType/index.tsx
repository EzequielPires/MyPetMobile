import { Text, TouchableOpacity, View } from "react-native";
import DogSvg from "../../assets/cao-svg.svg";
import CatSvg from "../../assets/gato-svg.svg";
import RodentSvg from "../../assets/coelho-svg.svg";
import ExoticSvg from "../../assets/camaleao-svg.svg";
import AllSvg from "../../assets/all-svg.svg";
import { styles } from "./styles";

export function CardType({ type, index, active, onPress }: any) {
    return (
        <TouchableOpacity onPress={() => onPress(index)} style={[styles.card, { marginLeft: index === 0 ? 20 : 0, backgroundColor: active === index ? '#EB4A69' : '#fff' }]}>
            {type.name === 'All' && <AllSvg width={36} height={36} fill={active === index ? '#fff' : '#555'} />}
            {type.name === 'Dogs' && <DogSvg width={36} height={36} fill={active === index ? '#fff' : '#555'} />}
            {type.name === 'Cats' && <CatSvg width={36} height={36} fill={active === index ? '#fff' : '#555'} />}
            {type.name === 'Rodents' && <RodentSvg width={36} height={36} fill={active === index ? '#fff' : '#555'} />}
            {type.name === 'Exotic' && <ExoticSvg width={36} height={36} fill={active === index ? '#fff' : '#555'} />}
            <Text style={[styles.name, { color: active === index ? '#fff' : '#555' }]}>{type.name}</Text>
        </TouchableOpacity>
    )
}