import React from 'react';
import {FlatList} from 'react-native';
import TeamIteam from '../components/TeamItem';
import useGetTeams from '../hooks/useGetTeams';
import {RootStackScreenProps} from '../types/navigation';

const TeamListScreen = ({}: RootStackScreenProps<'TeamList'>) => {
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
