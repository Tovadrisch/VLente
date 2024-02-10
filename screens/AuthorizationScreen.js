import {Button, StyleSheet, Text, View} from "react-native";

export default function AuthorizationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="RegistrationScreen" onPress={() => navigation.navigate("RegistrationScreen")}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
