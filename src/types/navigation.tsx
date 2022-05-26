import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  TeamList: undefined;
  PlayerList: {teamId: number};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

type TeamListScreenParams = undefined;

export type TeamListScreenProps = StackNavigationProp<TeamListScreenParams>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
