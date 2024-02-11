import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import Button, { ButtonTypes, TitleTypes } from "../components/ButtonCustom";
import TextInput from "../components/TextInputCustom";
import ModalMessage from "../components/ModalMessage";
import Model from "../models/Model";

export default function RegistrationScreen({ navigation, route }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [wrongLoginModalVisible, setWrongLoginModalVisible] = useState(false);
    const [wrongLoginMessage, setWrongLoginMessage] = useState("");
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorButtonTitle, setErrorButtonTitle] = useState("");
    const [loginKeyboardType, setLoginKeyboardType] = useState("default");

    useEffect(() => {
        if (route.params) {
            if (route.params.login) setLogin(route.params.login);
            if (route.params.password) setPassword(route.params.password);
        }
    }, [navigation, route]);

    const onNextButtonPress = async () => {
        if (confirmedPassword !== password) {
            setErrorMessage("Введённые вами пароли не совпадают :(\n\nПопробуете ещё разочек?");
            setErrorButtonTitle("Попробую");
            setErrorModalVisible(true);
            return;
        }
        if (login === "") {
            const randomNum = Math.floor(Math.random() * (100000 - 1) + 1);
            setWrongLoginMessage(
                "Логин можно считать вторым именем. Обычно, людям без имени дают порядковые номера. Так как вы не смогли придумать логин, мы осмелимся сделать это за вас\nКак вам такой?\n\n" + randomNum
            );
            setLoginKeyboardType("numeric");
            setWrongLoginModalVisible(true);
            return;
        }
        let user = await Model.findUserByKeyValue("login", login);
        if (user) {
            setErrorMessage("Пользователь с таким логином уже существует\n\nБудьте оригинальнее");
            setErrorButtonTitle("Буду");
            setErrorModalVisible(true);
            return;
        }
        await Model.createNewUser(login, password);
        navigation.reset({ index: 1, routes: [{ name: "MeetingScreen", params: { login } }] });
    };

    const onBackToRegistryButtonPress = () => {
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View  style={styles.edgeBox}>
                    <Text style={styles.title}>РЕГИСТРАЦИЯ</Text>
                </View>
                <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.centerBox}>
                    <TextInput
                        title={"Логин"}
                        placeholder={"Придумайте логин"}
                        value={login}
                        onChange={(event) => setLogin(event.nativeEvent.text)}
                        returnKeyType={"next"}
                        keyboardType={loginKeyboardType}
                    />
                    <TextInput
                        title={"Пароль"}
                        placeholder={"И пароль"}
                        value={password}
                        onChange={(event) => setPassword(event.nativeEvent.text)}
                        secureTextEntry={true}
                        returnKeyType={"next"}
                    />
                    <TextInput
                        title={"Повторите пароль"}
                        placeholder={"У вас получится"}
                        value={confirmedPassword}
                        onChange={(event) => setConfirmedPassword(event.nativeEvent.text)}
                        secureTextEntry={true}
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
                <View style={styles.edgeBox}>
                    <Button
                        title={"Обратно на авторизацию"}
                        buttonType={ButtonTypes.secondary}
                        titleType={TitleTypes.secondary}
                        pressHandler={onBackToRegistryButtonPress}
                    />
                </View>
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
                <ModalMessage
                    visible={wrongLoginModalVisible}
                    text={wrongLoginMessage}
                    buttons={
                        <View style={{ gap: 10 }}>
                            <Button
                                title={"Я согласен"}
                                titleType={TitleTypes.default}
                                buttonType={ButtonTypes.default}
                                pressHandler={() => {}}
                            />
                            <Button
                                title={"Придумаю сам"}
                                titleType={TitleTypes.secondary}
                                buttonType={ButtonTypes.secondary}
                                pressHandler={() => setWrongLoginModalVisible(false)}
                            />
                        </View>
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
