import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Matches } from "../types/match";
import { Team } from "../types/team";
import useGetTeams from "../hooks/useGetTeams";

const MatchItem = (match: Matches) => {
  
  const {data,loading,error} = useGetTeams();
  const navigation = useNavigation();
  let home = data?.filter(team => team.TeamID == match.HomeTeamID);
  let away = data?.filter(team => team.TeamID == match.AwayTeamID);
  let hora = ((match.DateTimeUTC.toLocaleString().split('T'))[1]).split(':')
  let mmostrar = ((parseInt(hora[0]) - 3 < 0 ? parseInt(hora[0])+24-3 : parseInt(hora[0]) -3) +':'+ hora[1])

  
  return <Text style={styles.title}>*{home?.map(a => a.Name)}* vs *{away?.map(a => a.Name)}* {mmostrar} hs</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 23,
  },
});
export default MatchItem;