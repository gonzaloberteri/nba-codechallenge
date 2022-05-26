import React from 'react';
import {FlatList} from 'react-native';
import TeamIteam from '../components/Team';
import useGetTeams from '../hooks/useGetTeams';

const PlayerListScreen = () => {
  const {data} = useGetTeams();

  return (
    <FlatList
      data={data}
      renderItem={team => <TeamIteam {...team.item} />}
      keyExtractor={team => `team-${team.TeamID}`}
    />
  );
};

export default PlayerListScreen;
