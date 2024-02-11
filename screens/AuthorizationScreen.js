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
import ModalMessage from "../components/ModalMessage";
import Model from "../models/Model";

export default function AuthorizationScreen({ navigation }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [wrongLoginModalVisible, setWrongLoginModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorButtonTitle, setErrorButtonTitle] = useState("");

    const onSignInButtonPress = async () => {
        if (login === "" && password === "") {
            setErrorMessage("Синий трактор едет к нам");
            setErrorButtonTitle("По полям!");
            setErrorModalVisible(true);
            return;
        }
        if (password !== "" && login === "") {
            setErrorMessage("Вы серьёзно заполнили пароль, но не заполнили логин?");
            setErrorButtonTitle("Серьёзно");
            setErrorModalVisible(true);
            return;
        }
        if (login !== "" && password === "") {
            setErrorMessage("Пароль, пожалуйста");
            setErrorButtonTitle("Спасибо");
            setErrorModalVisible(true);
            return;
        }
        let auth = await Model.auth(login, password);
        if (auth === "wrongLogin") {
            setWrongLoginModalVisible(true);
            return;
        }
        if (auth === "wrongPassword") {
            setErrorMessage("Неверный пароль :)");
            setErrorButtonTitle("Понял");
            setErrorModalVisible(true);
            return;
        }
        navigation.replace("BottomTabNavigator");
    };

    const onRegisterButtonPress = () => {
        navigation.navigate("RegistrationScreen");
    };

    const onWantToRegisterButtonPress = () => {
        setWrongLoginModalVisible(false);
        navigation.navigate("RegistrationScreen", { login, password });
    };

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.edgeBox}>
                    <Text style={styles.title}>АВТОРИЗАЦИЯ</Text>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.centerBox}>
                    <TextInput
                        title={"Логин"}
                        placeholder={"Введите сюда свой логин"}
                        value={login}
                        onChange={(event) => setLogin(event.nativeEvent.text)}
                        returnKeyType={"next"}
                    />
                    <TextInput
                        title={"Пароль"}
                        placeholder={"А сюда пароль, пожалуйста"}
                        value={password}
                        onChange={(event) => setPassword(event.nativeEvent.text)}
                        secureTextEntry={true}
                        returnKeyType={"done"}
                        onSubmitEditing={onSignInButtonPress}
                    />
                    <Button
                        title={"Войти"}
                        buttonType={ButtonTypes.default}
                        titleType={TitleTypes.default}
                        pressHandler={onSignInButtonPress}
                    />
                </KeyboardAvoidingView>
                <View style={styles.edgeBox}>
                    <Button
                        title={"Я хочу зарегистрироваться"}
                        buttonType={ButtonTypes.secondary}
                        titleType={TitleTypes.secondary}
                        pressHandler={onRegisterButtonPress}
                    />
                </View>
                <ModalMessage
                    visible={wrongLoginModalVisible}
                    text={"Пользователя с таким логином не существует :(\n\nХотите зарегистрироваться?"}
                    buttons={
                        <View style={{ gap: 10 }}>
                            <Button
                                title={"Хочу"}
                                titleType={TitleTypes.default}
                                buttonType={ButtonTypes.default}
                                pressHandler={onWantToRegisterButtonPress}
                            />
                            <Button
                                title={"Не хочу"}
                                titleType={TitleTypes.secondary}
                                buttonType={ButtonTypes.secondary}
                                pressHandler={() => setWrongLoginModalVisible(false)}
                            />
                        </View>
                    }
                />
                <ModalMessage
                    visible={errorModalVisible}
                    text={errorMessage}
                    buttons={
                        <Button
                            title={errorButtonTitle}
                            titleType={TitleTypes.default}
                            buttonType={ButtonTypes.default}
                            pressHandler={() => setErrorModalVisible(false)}
                        />
                    }
                />
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
        flex: 0.6,
        gap: 10
    }
});
