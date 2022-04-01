import { Team } from './team';

export class Match {
  constructor(
    private readonly homeTeam: Team,
    private readonly awayTeam: Team,
    private readonly homeTeamGoals: number,
    private readonly awayTeamGoals: number,
  ) {}

  getHomeTeam(): Team {
    return this.homeTeam;
  }

  getAwayTeam(): Team {
    return this.awayTeam;
  }

  getHomeTeamGoals(): number {
    return this.homeTeamGoals;
  }

  getAwayTeamGoals(): number {
    return this.awayTeamGoals;
  }
}
