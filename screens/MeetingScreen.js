import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { useState } from "react";
import Colors from "../constants/Colors";
import Button, { ButtonTypes, TitleTypes } from "../components/ButtonCustom";
import TextInput from "../components/TextInputCustom";
import Model from "../models/Model";

export default function MeetingScreen({ navigation, route }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const login = route.params.login;

    const onNextButtonPress = async () => {
        let user = Model.findUserByKeyValue("login", login);

        user.name = name;
        user.age = age;
        user.location = location;

        await Model.editUserInfo(user);

        navigation.replace("GreetingScreen", { user });
    };

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.edgeBox}>
                    <Text style={styles.title}>ДАВАЙТЕ ПОЗНАКОМИМСЯ</Text>
                </View>
                <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.centerBox}>
                    <TextInput
                        title={"Как вас называть?"}
                        placeholder={"Ваше имя"}
                        value={name}
                        onChange={(event) => setName(event.nativeEvent.text)}
                        returnKeyType={"next"}
                    />
                    <TextInput
                        title={"Сколько дадите себе лет?"}
                        placeholder={"Ваш возраст"}
                        value={age}
                        onChange={(event) => setAge(event.nativeEvent.text)}
                        returnKeyType={"next"}
                    />
                    <TextInput
                        title={"Где живёте, если не секрет?"}
                        placeholder={"Ваше местоположение"}
                        value={location}
                        onChange={(event) => setLocation(event.nativeEvent.text)}
                        returnKeyType={"done"}
                        onSubmitEditing={onNextButtonPress}
                    />
                    <Button
                        title={"Далее"}
                        buttonType={ButtonTypes.default}
                        titleType={TitleTypes.default}
                        pressHandler={onNextButtonPress}
                    />
                </KeyboardAvoidingView>
                <View style={styles.edgeBox} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.white
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.default
    },
    edgeBox: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.2
    },
    centerBox: {
        width: "80%",
        justifyContent: "center",
        gap: 10,
        flex: 0.6
    }
});

