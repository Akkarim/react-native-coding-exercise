import {
  Text,
  FlatList,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useLocalSearchParams } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import { styles } from "./AppStylessheet";
import { useState } from "react";
import {
  AppLogo,
  Banner,
  RocketIcon,
  PlanetIcon,
  FilterIcon,
  SortIcon
} from "../../../assets/vector";
import { MissionInfo } from "../../../types";

const GET_LAUNCHES_PAST = gql`
  query LaunchesPast($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      launch_year
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Root() {

  const [pageLimit, setPageLimit] = useState<number>(5);
  const [sort, setSort] = useState<string>("launch_year");
  const [order, setOrder] = useState<string>("asc");
  
  const loadMore = () => {
    setPageLimit(pageLimit + 5);
  };

  // The GraphQL should provide the Data ordered, sorted and with the search function
  // It is not working properly from the Backend so, I weren't able to do the Sorting and Search
  const { loading, error, data } = useQuery<{
    launchesPast: {
      id: string;
      mission_id: string;
      mission_name: string;
      launch_year: string;
      rocket: {
        rocket_name: string;
        rocket_type: string;
    }
    }[];
  }>(GET_LAUNCHES_PAST, {
    variables: {
      limit: pageLimit,
      offset: 0,
      order: order,
      sort: sort
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
          <Text style={[styles.buttonText]}>Search</Text>
        </Pressable>
      </View>
      <View style={[styles.filterSection]}>
        <Pressable onPress={()=>console.log("Filter")}>
          <FilterIcon />
        </Pressable>
        <Text>Mission Name</Text>
        <Pressable onPress={()=>order==="asc"?setOrder("desc"):setOrder("asc")}>
          <SortIcon />
        </Pressable>

      </View>
      <View style={[styles.list]}>
        <FlatList
          data={data?.launchesPast}
          renderItem={(data) => (
            <Link style={[styles.listItem]} 
            href={{
              pathname: "/App/Ticket/",
              params: {
                missionName: data?.item.mission_name, 
                missionRocketName: data?.item.rocket.rocket_name, 
                missionRocketType: data?.item.rocket.rocket_type, 
                missionLaunchYear: data?.item.launch_year
              },
            }}>
              <Text >{data?.item.mission_name}</Text>
            </Link>

          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={[styles.listFooter]}>
        <Text>{pageLimit} of 45</Text>
        <Pressable style={[styles.buttons]} onPress={loadMore}>
          <Text style={[styles.buttonText]}>Load More</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
