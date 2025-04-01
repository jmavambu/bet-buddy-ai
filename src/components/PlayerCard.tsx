
import { Player, Prediction } from "@/types";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart } from "lucide-react";
import { generateAIPrediction, getStatDisplayName, getUpcomingOpponent } from "@/utils/mockData";
import { useState } from "react";

interface PlayerCardProps {
  player: Player;
  onShowPredictions: (player: Player, predictions: Prediction[]) => void;
}

const PlayerCard = ({ player, onShowPredictions }: PlayerCardProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePredictions = () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Get main stats for the player based on sport
      const mainStats = Object.keys(player.stats).slice(0, 3);
      
      // Generate predictions for each main stat
      const predictions = mainStats.map(stat => 
        generateAIPrediction(player, stat)
      );
      
      onShowPredictions(player, predictions);
      setIsGenerating(false);
    }, 1500);
  };

  // Get upcoming opponent
  const upcomingOpponent = getUpcomingOpponent(player.id);

  return (
    <Card className="overflow-hidden border-sport-darkGray/60 bg-sport-darkBlue/60 backdrop-blur-sm hover:shadow-md hover:shadow-sport-gold/10 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white">{player.name}</CardTitle>
            <CardDescription className="text-gray-400">
              {player.team} • {player.position}
            </CardDescription>
            {upcomingOpponent && (
              <CardDescription className="text-xs mt-1">
                <span className="text-sport-gold">Next: </span>
                <span className="text-gray-400">vs {upcomingOpponent}</span>
              </CardDescription>
            )}
          </div>
          <Badge 
            variant="outline" 
            className={`
              ${player.sport === "nba" 
                ? "text-orange-400 border-orange-400/30" 
                : player.sport === "nfl" 
                  ? "text-blue-400 border-blue-400/30" 
                  : "text-green-400 border-green-400/30"
              }
            `}
          >
            {player.sport.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 my-3">
          {Object.entries(player.stats).slice(0, 3).map(([key, value]) => (
            <div key={key} className="text-center p-2 bg-sport-darkGray/30 rounded">
              <p className="text-gray-400 text-xs mb-1">{getStatDisplayName(key)}</p>
              <p className="text-sport-gold font-bold">{value}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-sport-darkGray/20 pt-3">
        <Button 
          onClick={handleGeneratePredictions}
          className="w-full bg-sport-blue hover:bg-sport-blue/80 text-white"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Analyzing...
            </>
          ) : (
            <>
              <BarChart className="h-4 w-4 mr-2" />
              Get AI Predictions
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
