import { StyleSheet, Text, View } from "react-native";

const API_KEY: string = "DvnnB6P5wIlyr7qQymMH4lEzvL3b1JdBUJlBqLPTV/E=";

export default function AddOperation() {
  return (
    <View style={[styles.container]}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 12,
    backgroundColor: "#f1f1f1"
  }
});
