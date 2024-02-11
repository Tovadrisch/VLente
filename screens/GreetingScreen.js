import { StyleSheet, Text, View } from "react-native";
import Button, { ButtonTypes, TitleTypes } from "../components/ButtonCustom";
import Colors from "../constants/Colors";

export default function GreetingScreen({ navigation, route }) {
    const user = route.params.user;

    const onStartButtonPress = () => {
        navigation.replace( "BottomTabNavigator");
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <Text style={styles.title}>{"Приветствуем, " + user.name + "!"}</Text>
                <Text style={styles.title}>{"Теперь вы"}</Text>
                <Text style={styles.appName}>{"ВЛенте"}</Text>
            </View>
            <View style={styles.bottomBox}>
                <Button
                    title="Начать"
                    buttonType={ButtonTypes.default}
                    titleType={TitleTypes.default}
                    pressHandler={onStartButtonPress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.default
    },
    appName: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.default
    },
    topBox: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        flex: 0.6
    },
    bottomBox: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.4
    }
});
