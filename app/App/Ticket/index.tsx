import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BackButton,
  TicketBackground,
  TicketPageBackground,
} from "../../../assets/vector";
import { tStyles } from "./TicketStylesSheet";

export default function Ticket() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const {
    missionName,
    missionRocketName,
    missionRocketType,
    missionLaunchYear,
  } = params;

  return (
    <SafeAreaView style={[tStyles.ticketPage]}>
      <View >
        <View style={[tStyles.backButton]}>
          <Pressable onPress={() => router.back()}>
            <BackButton />
          </Pressable>
        </View>
        <View style={[tStyles.ticket]}>
          <TicketBackground />

          <View style={[tStyles.sMissionName]}>
            <Text>Mission Name</Text>
            <Text>{missionName}</Text>
          </View>

          <View style={[tStyles.sRocketName]}>
            <Text>Mission Name</Text>
            <Text>{missionName}</Text>
          </View>

          <View style={[tStyles.sRocketType]}>
            <Text>Mission Name</Text>
            <Text>{missionName}</Text>
          </View>

          <View style={[tStyles.sLaunchYear]}>
            <Text>Mission Name</Text>
            <Text>{missionName}</Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

{
  /* <Pressable onPress={()=>goToTicket(data?.item.mission_name, data?.item.rocket.rocket_name, data?.item.rocket.rocket_type, data?.item.launch_year)}>
<Text style={[styles.listItem]}>{data?.item.mission_name}</Text>
</Pressable> */
}
