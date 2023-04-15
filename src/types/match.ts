export interface Matches {
    GameID:                       number;
    Season:                       number;
    SeasonType:                   number;
    Status:                       string;
    Day:                          Date;
    DateTime:                     Date;
    AwayTeam:                     string;
    HomeTeam:                     string;
    AwayTeamID:                   number;
    HomeTeamID:                   number;
    StadiumID:                    number;
    Channel:                      string;
    Attendance:                   null;
    AwayTeamScore:                null;
    HomeTeamScore:                null;
    Updated:                      Date;
    Quarter:                      null;
    TimeRemainingMinutes:         null;
    TimeRemainingSeconds:         null;
    PointSpread:                  number;
    OverUnder:                    number;
    AwayTeamMoneyLine:            number;
    HomeTeamMoneyLine:            number;
    GlobalGameID:                 number;
    GlobalAwayTeamID:             number;
    GlobalHomeTeamID:             number;
    PointSpreadAwayTeamMoneyLine: number;
    PointSpreadHomeTeamMoneyLine: number;
    LastPlay:                     string;
    IsClosed:                     boolean;
    GameEndDateTime:              null;
    HomeRotationNumber:           number;
    AwayRotationNumber:           number;
    NeutralVenue:                 boolean;
    OverPayout:                   number;
    UnderPayout:                  number;
    CrewChiefID:                  number;
    UmpireID:                     number;
    RefereeID:                    number;
    AlternateID:                  null;
    DateTimeUTC:                  Date;
    SeriesInfo:                   null;
    Quarters:                     any[];
}