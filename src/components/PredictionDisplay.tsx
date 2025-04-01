
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Player, Prediction } from "@/types";
import { getStatDisplayName } from "@/utils/mockData";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PredictionDisplayProps {
  player: Player | null;
  predictions: Prediction[];
  isOpen: boolean;
  onClose: () => void;
}

const PredictionDisplay = ({
  player,
  predictions,
  isOpen,
  onClose,
}: PredictionDisplayProps) => {
  if (!player) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sport-darkBlue border-sport-darkGray/50 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center">
            <span className="text-sport-gold font-bold mr-2">AI</span> Predictions for {player.name}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Our AI analyzes historical data, recent form, matchups, and trends to make predictions.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {predictions.map((prediction) => (
            <div 
              key={`${prediction.playerId}-${prediction.statCategory}`}
              className="bg-sport-darkGray/30 rounded-lg p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{getStatDisplayName(prediction.statCategory)}</h3>
                <Badge 
                  className={`
                    ${prediction.recommendation === "over" 
                      ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" 
                      : prediction.recommendation === "under" 
                        ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
                        : "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                    }
                  `}
                >
                  {prediction.recommendation === "over" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : prediction.recommendation === "under" ? (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  ) : (
                    <Minus className="h-3 w-3 mr-1" />
                  )}
                  {prediction.recommendation.toUpperCase()}
                </Badge>
              </div>

              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-400">AI Prediction:</span>
                <span className="text-white font-bold">{prediction.predictedValue}</span>
              </div>

              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-400">Line:</span>
                <span className="text-white">{Math.floor(prediction.predictedValue)}.5</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Confidence:</span>
                <span className="text-white">{prediction.confidence}%</span>
              </div>

              <Progress 
                value={prediction.confidence} 
                className="h-2 bg-sport-darkGray"
                indicatorClassName={`
                  ${prediction.confidence > 80 
                    ? "bg-green-500" 
                    : prediction.confidence > 65 
                      ? "bg-amber-500" 
                      : "bg-red-500"
                  }
                `}
              />

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Recent {getStatDisplayName(prediction.statCategory)}:</span>
                  <span className="text-white">
                    {player.stats[prediction.statCategory] ? player.stats[prediction.statCategory].toFixed(1) : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Odds:</span>
                  <span className="text-white">{prediction.odds}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" className="border-sport-darkGray text-gray-300" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-sport-green hover:bg-sport-green/90">
              Save Picks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PredictionDisplay;
