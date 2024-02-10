import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import AuthorizationScreen from "../screens/AuthorizationScreen";
import GreetingScreen from "../screens/GreetingScreen";
import BottomTabNavigator from "./BottomTabNavigator";

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
};

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Group>
                <Stack.Screen name={"AuthorizationScreen"} component={AuthorizationScreen} />
                <Stack.Screen name={"RegistrationScreen"} component={RegistrationScreen} />
                <Stack.Screen name={"GreetingScreen"} component={GreetingScreen} />
            </Stack.Group>
            <Stack.Screen name={"BottomTabNavigator"} component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};
