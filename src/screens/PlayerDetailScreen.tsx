import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackScreenProps} from '../types/navigation';

const PlayerDetailScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'PlayerDetail'>) => {
  const {player, team} = route.params;

  useEffect(() => {
    navigation.setOptions({title: `${player.FirstName} ${player.LastName}`});
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: `#${team.SecondaryColor}`},
      ]}>
      <Image source={{uri: player.PhotoUrl}} style={styles.headshot} />
      <Text style={styles.name}>
        {player.FirstName} {player.LastName}
      </Text>
      <Text style={styles.salary}>${player.Salary}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  headshot: {
    height: 80,
    width: 80,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 300,
    marginTop: 36,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 36,
    color: 'black',
  },
  salary: {
    fontSize: 48,
    color: 'black',
    flex: 1,
    textAlignVertical: 'center'
  }
});

export default PlayerDetailScreen;
