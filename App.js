import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddNewTodoScreen from "./src/Screens/AddNewTodoScreen/AddNewTodoScreen";

export default function App() {
  return (
      <AddNewTodoScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
