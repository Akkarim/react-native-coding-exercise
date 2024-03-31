import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  AppLogo,
  Banner,
  RocketIcon,
  PlanetIcon,
} from "../../../assets/vector";

const GET_LAUNCHES_PAST = gql`
  query LaunchesPast($limit: Int, $offset: Int, $order: String, $sort: String) {
    launchesPast(limit: $limit, offset: $offset, order: $order, sort: $sort) {
      id
      launch_year
      mission_name
    }
  }
`;

export default function Root() {
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState<number>(5);
  const [pageOffset, setPageOffset] = useState<number>(0);

  const styles = StyleSheet.create({
    app: {
      backgroundColor: "#f4ddb5",
      height: 57,
    },
    appHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#193247",
    },
    searchArea: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
    },
    searchTextBox: {
      backgroundColor: "#193247",
      borderRadius: 16,
      paddingVertical: 10,
      paddingHorizontal: 60,
      color: "#ffffff",
    },
    buttons: {
      backgroundColor: "#d14b39",
      borderRadius: 16,
      paddingVertical: 10,
      paddingHorizontal: 30,
    },
    bannerView: {
      display: "flex",
      justifyContent: "center",
      paddingHorizontal: 55,
      margin: 10,
    },
    list: {
      display: "flex",
      justifyContent: "center",
      paddingVertical: 35,
      paddingHorizontal: 55,
      marginLeft: 50,
    },
    listItem: {
      height:30,
      textAlign: "center",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 25,
      backgroundColor: "#fdf2dd",
    },
    listFooter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingHorizontalVertical: 15,
      alignItems: "center"
    },
  });

  const loadMore = () => {
    //setPageOffset(pageLimit);
    setPageLimit(pageLimit + 5);
  };

  const { loading, error, data } = useQuery<{
    launchesPast: {
      id: string;
      mission_id: string;
      mission_name: string;
      sort: string;
    }[];
  }>(GET_LAUNCHES_PAST, {
    variables: {
      limit: pageLimit,
      offset: pageOffset,
      sort: "launch_year",
      order: "asc",
    },
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <SafeAreaView style={[styles.app]}>
      <View style={[styles.appHeader]}>
        <PlanetIcon style={{ alignSelf: "flex-start" }} />
        <AppLogo />
        <RocketIcon />
      </View>
      <View style={[styles.bannerView]}>
        <Banner />
      </View>
      <View style={[styles.searchArea]}>
        <TextInput
          style={[styles.searchTextBox]}
          placeholder="Search for flights!"
          placeholderTextColor="#fff"
          onChangeText={(newText) => console.log(newText)}
        />
        <Pressable style={[styles.buttons]}>
          <Text>Search</Text>
        </Pressable>
      </View>
      <Button
        title={"Go to Ticket Screen test"}
        onPress={() => router.push("/App/Ticket")}
      />
      <View style={[styles.list]}>
        <FlatList
          data={data?.launchesPast}
          renderItem={(data) => (
            <Text style={[styles.listItem]}>{data.item.mission_name}</Text>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={[styles.listFooter]}>
        <Text>{pageLimit}of 45</Text>
        <Pressable style={[styles.buttons]} onPress={loadMore}>
          <Text>Load More</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
