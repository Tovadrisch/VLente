import { StyleSheet, View } from "react-native";
import Button, { ButtonTypes, TitleTypes } from "../components/Button";
import Colors from "../constants/Colors";

export default function AuthorizationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Войти"
                buttonType={ButtonTypes.default}
                titleType={TitleTypes.default}
                pressHandler={() =>{}}
            />
            <Button
                title="Зарегистрироваться"
                buttonType={ButtonTypes.secondary}
                titleType={TitleTypes.secondary}
                pressHandler={() => navigation.navigate("RegistrationScreen")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
});
