import type {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  TeamList: undefined;
  PlayerList: {teamId: string};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type TeamListScreenProps = StackNavigationProp<RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
