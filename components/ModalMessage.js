import { Modal, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import Button, {ButtonTypes, TitleTypes} from "./ButtonCustom";

export default function ModalMessage({ text, buttons, ...props }) {


    return (
        <Modal
            transparent={true}
            animationType={"fade"}
            {...props}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.shadow}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{text}</Text>
                        {buttons}
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    shadow: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.shadow,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        width: "80%",
        borderWidth: 2,
        padding: 20,
        borderRadius: 25,
        borderColor: Colors.default,
        backgroundColor: Colors.white
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 20,
    }
})
