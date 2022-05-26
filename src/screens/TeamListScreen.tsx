import React from 'react';
import {FlatList} from 'react-native';
import TeamIteam from '../components/Team';
import useGetTeams from '../hooks/useGetTeams';

const TeamListScreen = () => {
  const {data} = useGetTeams();

  return (
    <FlatList
      data={data}
      renderItem={team => <TeamIteam {...team.item} />}
      keyExtractor={team => `team-${team.TeamID}`}
    />
  );
};

export default TeamListScreen;
