import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native"
import Navigation from "./navigation/Navigation";
import Colors from "./constants/Colors";

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}
