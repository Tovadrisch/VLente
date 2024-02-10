import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen name={"NewsFeedScreen"} component={NewsFeedScreen} />
        <BottomTab.Screen name={"ProfileScreen"} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};
