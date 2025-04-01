
export type Sport = 'nba' | 'nfl' | 'soccer';

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  imageUrl: string;
  sport: Sport;
  stats: {
    [key: string]: number;
  };
}

export interface Prediction {
  playerId: string;
  statCategory: string;
  predictedValue: number;
  confidence: number; // 0-100
  recommendation: 'over' | 'under' | 'neutral';
  odds: number;
}

export interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  location: string;
  sport: Sport;
}
