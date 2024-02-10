import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";


export const ButtonTypes = {
    "default": "defaultButton",
    "secondary": "secondaryButton"
};

export const TitleTypes = {
    "default": "defaultText",
    "secondary": "secondaryText"
};

export default function Button({ buttonType, titleType, title, pressHandler }) {

    return (
        <TouchableOpacity activeOpacity={0.6} style={styles[buttonType]} onPress={pressHandler}>
            <Text style={styles[titleType]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    defaultButton: {
        width: "100%",
        padding: 12,
        borderRadius: 999,
        backgroundColor: Colors.default
    },
    secondaryButton: {
        width: "100%",
        padding: 12
    },
    defaultText: {
        textAlign: "center",
        fontSize: 18,
        color: Colors.white
    },
    secondaryText: {
        textAlign: "center",
        fontSize: 18,
        color: Colors.default
    }
})
