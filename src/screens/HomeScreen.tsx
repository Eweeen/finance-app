import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

interface DateObject {
  dateString: string;
  day: number;
  month: number;
  year: number;
}

interface DayComponentProps {
  date: DateObject;
  state?: "disabled" | "today" | "selected" | "selectedStart" | "selectedEnd" | "selectedMiddle";
}

const API_KEY: string = "DvnnB6P5wIlyr7qQymMH4lEzvL3b1JdBUJlBqLPTV/E=";

export default function HomeScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const markedDates: Record<string, Array<any>> = {
    "2024-10-10": [
      {
        image: "https://cdn.brandfetch.io/idoHq_yK72/w/500/h/500/theme/dark/icon.png?k=idA6NlStwe"
      }
    ],
    "2024-10-25": [
      {
        image: "https://cdn.brandfetch.io/ideQwN5lBE/w/400/h/400/theme/dark/icon.jpeg?k=idA6NlStwe"
      },
      {
        image: "https://cdn.brandfetch.io/idfZHnvXO9/w/200/h/200/theme/dark/icon.jpeg?k=idA6NlStwe"
      }
    ],
    "2024-10-22": [
      {
        image:
          "https://cdn.brandfetch.io/id20mQyGeY/w/800/h/800/theme/dark/symbol.webp?k=idA6NlStwe"
      }
    ]
  };

  function fetchData() {}

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <Calendar
          firstDay={1}
          displayLoadingIndicator={false}
          enableSwipeMonths={true}
          onMonthChange={fetchData}
          style={{ borderRadius: 8 }}
          dayComponent={({ date, state }: DayComponentProps) => {
            return (
              <View
                style={[
                  styles.day,
                  state === "disabled" ? styles.disabled : undefined,
                  state === "today" ? styles.today : undefined
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    state === "disabled" ? styles.disabledText : undefined,
                    state === "today" ? styles.todayText : undefined
                  ]}
                >
                  {date.day}

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: 4,
                      position: "absolute",
                      transform: [{ translateX: -8 }, { translateY: 6 }]
                    }}
                  >
                    {markedDates[date.dateString]?.length > 0 && (
                      <Image
                        source={{ uri: markedDates[date.dateString][0].image }}
                        style={styles.image}
                      />
                    )}

                    {markedDates[date.dateString]?.length > 1 && (
                      <View style={styles.moreImage}>
                        <Text style={{ color: "white", fontSize: 10 }}>
                          +{markedDates[date.dateString].length - 1}
                        </Text>
                      </View>
                    )}
                  </View>
                </Text>
              </View>
            );
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Add" as never)}
        style={{
          position: "absolute",
          bottom: insets.bottom,
          left: "50%",
          transform: [{ translateX: -12 }],
          backgroundColor: "white",
          padding: 16,
          borderRadius: 999
        }}
      >
        <FontAwesomeIcon icon={faPlus} style={{ width: 48, height: 48 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 12,
    backgroundColor: "#f1f1f1"
  },
  day: {
    position: "relative",
    borderRadius: 999,
    backgroundColor: "#e5e5e5",
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center"
  },
  dayText: {
    color: "black",
    textAlign: "center",
    fontSize: 16
  },
  today: {
    backgroundColor: "#dbeafe"
  },
  todayText: {
    color: "#1d4ed8"
  },
  disabled: {
    // display: "none",
    backgroundColor: "transparent"
  },
  disabledText: {
    color: "#d4d4d4"
  },
  image: {
    width: 16,
    height: 16,
    borderRadius: 999
  },
  moreImage: {
    width: 16,
    height: 16,
    borderRadius: 999,
    backgroundColor: "#737373",
    justifyContent: "center",
    alignItems: "center"
  }
});
