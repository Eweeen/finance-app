import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  function fetchData() {}

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <Text>Home</Text>

        <Calendar
          firstDay={1}
          markedDates={[]}
          displayLoadingIndicator={false}
          enableSwipeMonths={true}
          onMonthChange={fetchData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 12
  }
});
