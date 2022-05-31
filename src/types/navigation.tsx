import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import {Player} from './player';
import {Team} from './team';

export type RootStackParamList = {
  TeamList: undefined;
  PlayerList: {team: Team};
  PlayerDetail: {player: Player; team: Team};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type ScreenProps = StackNavigationProp<RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
