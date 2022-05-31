import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PlayerItem from '../components/PlayerItem';
import SearchBox from '../components/SearchBox';
import useGetPlayers from '../hooks/useGetPlayer';
import {RootStackScreenProps} from '../types/navigation';
import {Player} from '../types/player';

const PlayerListScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'PlayerList'>) => {
  const {team} = route.params;
  const {data: playerList, loading} = useGetPlayers(team.Key.toString());

  const [players, setPlayers] = useState<Player[] | undefined>(playerList);

  const onClear = () => setPlayers(playerList);

  const onChangeText = (text: string) => {
    setPlayers(
      text
        ? playerList?.filter(p => {
            const name = p.FirstName + ' ' + p.LastName;
            return name.toLowerCase().includes(text.toLowerCase());
          })
        : playerList,
    );
  };

  useEffect(() => {
    if (!loading) {
      setPlayers(playerList);

      navigation.setOptions({
        title: team.Name,
      });
    }
  }, [loading]);

  const searchBox: Player = {PlayerID: -1} as Player;

  return (
    <>
      {players && (
        <FlatList
          data={[searchBox, ...players]}
          renderItem={({item, index}) => {
            return index === 0 ? (
              <SearchBox onClear={onClear} onChangeText={onChangeText} />
            ) : (
              <PlayerItem player={item} team={team} />
            );
          }}
          keyExtractor={player => `player-${player.PlayerID}`}
        />
      )}
    </>
  );
};

export default PlayerListScreen;
