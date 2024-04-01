import { StyleSheet } from "react-native";
export const tStyles = StyleSheet.create({
  ticketPage: {
    backgroundColor: "#193247",
    height: "100%",
  },
  ticket: {
    position: "absolute",
    top: 410,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "90deg" }],
    zIndex: -1,
  },
  sMissionName: {
    position: "relative",
  },
  sRocketName: {
    position: "relative",
  },
  sRocketType: {
    position: "relative",
  },
  sLaunchYear: {
    position: "relative",
  },
  backButton: {
    marginLeft: 15,
  },
});
