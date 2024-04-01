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
          <Pressable onPress={() => router.push("/App/Root/")}>
            <BackButton />
          </Pressable>
        </View>
        <View style={[tStyles.ticket]}>
          <TicketBackground />
        </View>
          <View style={[tStyles.sMissionName]}>
            <Text style={{color:"#f4ddb5", fontSize: 12, fontWeight: "bold"}}>Mission Name</Text>
            <Text style={{color:"#f4ddb5", fontSize: 22}}>{missionName}</Text>
          </View>

          <View style={[tStyles.sRocketName]}>
            <Text style={{color:"#f4ddb5", fontSize: 12, fontWeight: "bold"}}>Rocket Name</Text>
            <Text style={{color:"#f4ddb5", fontSize: 12}}>{missionRocketName}</Text>
          </View>

          <View style={[tStyles.sRocketType]}>
            <Text style={{color:"#f4ddb5", fontSize: 12, fontWeight: "bold"}}>Rocket Type</Text>
            <Text style={{color:"#f4ddb5", fontSize: 12}}>{missionRocketType}</Text>
          </View>

          <View style={[tStyles.sLaunchYear]}>
            <Text style={{color:"#193247", fontSize: 12, fontWeight: "bold"}}>Launch Year</Text>
            <Text style={{color:"#193247", fontSize: 12}}>{missionLaunchYear}</Text>
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
