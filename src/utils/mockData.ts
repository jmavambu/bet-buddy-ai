
import { Game, Player, Prediction, Sport } from "@/types";

// NBA Players
export const nbaMockPlayers: Player[] = [
  {
    id: "nba-1",
    name: "LeBron James",
    team: "Los Angeles Lakers",
    position: "SF",
    imageUrl: "/placeholder.svg",
    sport: "nba",
    stats: {
      ppg: 25.7,
      rpg: 7.3,
      apg: 8.2,
      fg_pct: 53.8,
      ft_pct: 75.6,
    },
  },
  {
    id: "nba-2",
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "PG",
    imageUrl: "/placeholder.svg",
    sport: "nba",
    stats: {
      ppg: 29.4,
      rpg: 6.1,
      apg: 6.8,
      fg_pct: 49.1,
      ft_pct: 91.5,
    },
  },
  {
    id: "nba-3",
    name: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    position: "PF",
    imageUrl: "/placeholder.svg",
    sport: "nba",
    stats: {
      ppg: 30.2,
      rpg: 11.8,
      apg: 5.7,
      fg_pct: 57.6,
      ft_pct: 68.7,
    },
  },
  {
    id: "nba-4",
    name: "Kevin Durant",
    team: "Phoenix Suns",
    position: "SF",
    imageUrl: "/placeholder.svg",
    sport: "nba",
    stats: {
      ppg: 28.5,
      rpg: 7.2,
      apg: 5.1,
      fg_pct: 52.9,
      ft_pct: 89.3,
    },
  },
  {
    id: "nba-5",
    name: "Nikola Jokić",
    team: "Denver Nuggets",
    position: "C",
    imageUrl: "/placeholder.svg",
    sport: "nba",
    stats: {
      ppg: 26.3,
      rpg: 12.4,
      apg: 9.1,
      fg_pct: 58.7,
      ft_pct: 84.2,
    },
  },
];

// NFL Players
export const nflMockPlayers: Player[] = [
  {
    id: "nfl-1",
    name: "Patrick Mahomes",
    team: "Kansas City Chiefs",
    position: "QB",
    imageUrl: "/placeholder.svg",
    sport: "nfl",
    stats: {
      passing_yards: 325.7,
      passing_tds: 2.3,
      interceptions: 0.6,
      completion_pct: 67.8,
      qb_rating: 104.5,
    },
  },
  {
    id: "nfl-2",
    name: "Travis Kelce",
    team: "Kansas City Chiefs",
    position: "TE",
    imageUrl: "/placeholder.svg",
    sport: "nfl",
    stats: {
      receptions: 7.8,
      receiving_yards: 89.5,
      receiving_tds: 0.9,
      yac: 42.3,
      targets: 10.2,
    },
  },
  {
    id: "nfl-3",
    name: "Josh Allen",
    team: "Buffalo Bills",
    position: "QB",
    imageUrl: "/placeholder.svg",
    sport: "nfl",
    stats: {
      passing_yards: 318.6,
      passing_tds: 2.1,
      interceptions: 0.8,
      completion_pct: 66.5,
      qb_rating: 101.3,
    },
  },
  {
    id: "nfl-4",
    name: "Christian McCaffrey",
    team: "San Francisco 49ers",
    position: "RB",
    imageUrl: "/placeholder.svg",
    sport: "nfl",
    stats: {
      rushing_yards: 98.3,
      rushing_tds: 1.1,
      receptions: 4.7,
      receiving_yards: 42.6,
      total_yards: 140.9,
    },
  },
  {
    id: "nfl-5",
    name: "Justin Jefferson",
    team: "Minnesota Vikings",
    position: "WR",
    imageUrl: "/placeholder.svg",
    sport: "nfl",
    stats: {
      receptions: 8.4,
      receiving_yards: 103.7,
      receiving_tds: 0.7,
      yac: 45.2,
      targets: 11.3,
    },
  },
];

// Soccer Players
export const soccerMockPlayers: Player[] = [
  {
    id: "soccer-1",
    name: "Lionel Messi",
    team: "Inter Miami CF",
    position: "FWD",
    imageUrl: "/placeholder.svg",
    sport: "soccer",
    stats: {
      goals: 0.86,
      assists: 0.53,
      shots: 4.3,
      key_passes: 3.1,
      dribbles: 4.8,
    },
  },
  {
    id: "soccer-2",
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    position: "FWD",
    imageUrl: "/placeholder.svg",
    sport: "soccer",
    stats: {
      goals: 0.91,
      assists: 0.23,
      shots: 5.2,
      key_passes: 1.8,
      dribbles: 2.3,
    },
  },
  {
    id: "soccer-3",
    name: "Erling Haaland",
    team: "Manchester City",
    position: "FWD",
    imageUrl: "/placeholder.svg",
    sport: "soccer",
    stats: {
      goals: 1.15,
      assists: 0.24,
      shots: 3.8,
      key_passes: 1.3,
      dribbles: 1.2,
    },
  },
  {
    id: "soccer-4",
    name: "Kylian Mbappé",
    team: "Real Madrid",
    position: "FWD",
    imageUrl: "/placeholder.svg",
    sport: "soccer",
    stats: {
      goals: 0.95,
      assists: 0.41,
      shots: 4.6,
      key_passes: 2.4,
      dribbles: 3.9,
    },
  },
  {
    id: "soccer-5",
    name: "Kevin De Bruyne",
    team: "Manchester City",
    position: "MID",
    imageUrl: "/placeholder.svg",
    sport: "soccer",
    stats: {
      goals: 0.28,
      assists: 0.71,
      shots: 2.3,
      key_passes: 4.2,
      dribbles: 1.6,
    },
  },
];

// All Players
export const allMockPlayers: Player[] = [
  ...nbaMockPlayers,
  ...nflMockPlayers,
  ...soccerMockPlayers,
];

// Mock Games
export const mockGames: Game[] = [
  {
    id: "nba-game-1",
    homeTeam: "Los Angeles Lakers",
    awayTeam: "Golden State Warriors",
    date: "2023-10-15",
    time: "7:30 PM",
    location: "Crypto.com Arena",
    sport: "nba",
  },
  {
    id: "nba-game-2",
    homeTeam: "Milwaukee Bucks",
    awayTeam: "Phoenix Suns",
    date: "2023-10-16",
    time: "8:00 PM",
    location: "Fiserv Forum",
    sport: "nba",
  },
  {
    id: "nfl-game-1",
    homeTeam: "Kansas City Chiefs",
    awayTeam: "Buffalo Bills",
    date: "2023-10-17",
    time: "4:25 PM",
    location: "Arrowhead Stadium",
    sport: "nfl",
  },
  {
    id: "soccer-game-1",
    homeTeam: "Manchester City",
    awayTeam: "Real Madrid",
    date: "2023-10-18",
    time: "3:00 PM",
    location: "Etihad Stadium",
    sport: "soccer",
  },
];

// Mock Predictions
export const mockPredictions: Prediction[] = [
  {
    playerId: "nba-1",
    statCategory: "points",
    predictedValue: 28.5,
    confidence: 85,
    recommendation: "over",
    odds: 1.87,
  },
  {
    playerId: "nba-2",
    statCategory: "three_pointers",
    predictedValue: 5.5,
    confidence: 78,
    recommendation: "over",
    odds: 1.92,
  },
  {
    playerId: "nfl-1",
    statCategory: "passing_yards",
    predictedValue: 305.5,
    confidence: 82,
    recommendation: "over",
    odds: 1.85,
  },
  {
    playerId: "soccer-1",
    statCategory: "goals",
    predictedValue: 0.5,
    confidence: 73,
    recommendation: "over",
    odds: 2.10,
  },
];

// Helper function to get predictions for a player
export const getPlayerPredictions = (playerId: string): Prediction[] => {
  return mockPredictions.filter(prediction => prediction.playerId === playerId);
};

// Helper function to get players by sport
export const getPlayersBySport = (sport: Sport): Player[] => {
  return allMockPlayers.filter(player => player.sport === sport);
};

// Helper function to get games by sport
export const getGamesBySport = (sport: Sport): Game[] => {
  return mockGames.filter(game => game.sport === sport);
};

// Helper function to simulate AI generating a prediction
export const generateAIPrediction = (player: Player, statCategory: string): Prediction => {
  const statValue = player.stats[statCategory] || 0;
  const variance = Math.random() * 0.2 - 0.1; // -10% to +10%
  const predictedValue = statValue * (1 + variance);
  const confidence = Math.floor(70 + Math.random() * 30); // 70-99
  
  return {
    playerId: player.id,
    statCategory,
    predictedValue: Number(predictedValue.toFixed(1)),
    confidence,
    recommendation: confidence > 80 ? "over" : confidence < 75 ? "under" : "neutral",
    odds: Number((1.5 + Math.random() * 1).toFixed(2)),
  };
};

// Helper function to get stat categories by sport
export const getStatCategoriesBySport = (sport: Sport): string[] => {
  switch (sport) {
    case "nba":
      return ["points", "rebounds", "assists", "three_pointers", "blocks", "steals"];
    case "nfl":
      return ["passing_yards", "rushing_yards", "receiving_yards", "touchdowns", "receptions"];
    case "soccer":
      return ["goals", "assists", "shots", "passes", "tackles"];
    default:
      return [];
  }
};

// Get a display name for stat categories
export const getStatDisplayName = (statCategory: string): string => {
  const displayNames: Record<string, string> = {
    points: "Points",
    rebounds: "Rebounds",
    assists: "Assists",
    three_pointers: "3-Pointers",
    blocks: "Blocks",
    steals: "Steals",
    passing_yards: "Passing Yards",
    rushing_yards: "Rushing Yards",
    receiving_yards: "Receiving Yards",
    touchdowns: "Touchdowns",
    receptions: "Receptions",
    goals: "Goals",
    assists: "Assists",
    shots: "Shots",
    passes: "Passes",
    tackles: "Tackles",
  };
  
  return displayNames[statCategory] || statCategory;
};
