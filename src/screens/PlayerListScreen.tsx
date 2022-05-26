import React from 'react';
import {FlatList} from 'react-native';
import PlayerItem from '../components/PlayerItem';
import useGetPlayers from '../hooks/useGetPlayer';
import {RootStackScreenProps} from '../types/navigation';

const PlayerListScreen = ({route}: RootStackScreenProps<'PlayerList'>) => {
  const {data: playerList} = useGetPlayers(route.params.teamId.toString());

  return (
    <FlatList
      data={playerList}
      renderItem={player => <PlayerItem {...player.item} />}
      keyExtractor={player => `player-${player.PlayerID}`}
    />
  );
};

export default PlayerListScreen;
