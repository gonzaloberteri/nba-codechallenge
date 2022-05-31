import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Player} from '../types/player';
import {Team} from '../types/team';

interface PlayerItemProps {
  player: Player;
  team: Team;
}

const PlayerItem = ({player, team}: PlayerItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('PlayerDetail', {player, team})}>
      <Image source={{uri: player.PhotoUrl}} style={styles.headshot} />
      <View style={styles.description}>
        <Text>
          {player.FirstName} {player.LastName}
        </Text>
        <Text>
          {player.BirthState}, {player.BirthCountry}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    marginTop: 6,
    marginHorizontal: 6,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  headshot: {
    flex: 1,
  },
  description: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: 'black',
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
});

export default PlayerItem;
