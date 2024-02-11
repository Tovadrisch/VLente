import { StyleSheet, View, TextInput, Text } from "react-native";
import Colors from "../constants/Colors";

export default function TextInputCustom({ title, ...props }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={Colors.gray}
                    autoCapitalize={"none"}
                    {...props}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80
    },
    inputBox: {
        top: 30,
        height: 50,
        paddingHorizontal: 12,
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 25,
        borderColor: Colors.default,
        backgroundColor: Colors.white
    },
    titleBox: {
        position: "absolute",
        zIndex: -1,
        width: "100%",
        height: 55,
        alignItems: "center",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Colors.default,
    },
    title: {
        fontSize: 18,
        top: 3,
        color: Colors.white
    },
    input: {
        marginHorizontal: 10,
        fontSize: 16
    }
});
