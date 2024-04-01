import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    app: {
      backgroundColor: "#f4ddb5",
      height: "100%",
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
    },
    listItem: {
      height:70,
      width: 246,
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
    buttonText: {
      color: "#fff"
    },
    filterSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 20,
    }
  });
