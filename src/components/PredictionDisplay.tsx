
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Player, Prediction, PlayerGameHistory } from "@/types";
import { getStatDisplayName } from "@/utils/mockData";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, ArrowRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  
  if (!player) return null;

  const toggleHistory = (statCategory: string) => {
    if (selectedPrediction === statCategory) {
      setSelectedPrediction(null);
    } else {
      setSelectedPrediction(statCategory);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sport-darkBlue border-sport-darkGray/50 text-white max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center">
            <span className="text-sport-gold font-bold mr-2">AI</span> Predictions for {player.name}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Our AI analyzes historical data, recent form, matchups, and trends to make predictions.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-180px)] pr-4">
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

                {prediction.vsTeam && (
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400">Vs Team:</span>
                    <span className="text-white">{prediction.vsTeam}</span>
                  </div>
                )}

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
                  className={`h-2 bg-sport-darkGray ${
                    prediction.confidence > 80 
                      ? "bg-green-500" 
                      : prediction.confidence > 65 
                        ? "bg-amber-500" 
                        : "bg-red-500"
                  }`}
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

                {prediction.pastPerformances && prediction.pastPerformances.length > 0 && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-sport-gold border-sport-gold/30"
                      onClick={() => toggleHistory(prediction.statCategory)}
                    >
                      <History className="h-4 w-4 mr-2" />
                      {selectedPrediction === prediction.statCategory ? 'Hide History' : 'Show Past Performances'}
                    </Button>
                    
                    {selectedPrediction === prediction.statCategory && (
                      <div className="mt-3 bg-sport-darkGray/20 rounded-md p-2">
                        <Table>
                          <TableHeader>
                            <TableRow className="border-b border-sport-darkGray/40">
                              <TableHead className="text-sport-gold">Date</TableHead>
                              <TableHead className="text-sport-gold">Opponent</TableHead>
                              <TableHead className="text-sport-gold text-right">{getStatDisplayName(prediction.statCategory)}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {prediction.pastPerformances.map((game) => (
                              <TableRow key={game.id} className="border-b border-sport-darkGray/30">
                                <TableCell className="text-gray-300">{new Date(game.date).toLocaleDateString()}</TableCell>
                                <TableCell className="text-gray-300">vs {game.opponent}</TableCell>
                                <TableCell className="text-right font-medium text-white">
                                  {game.stats[prediction.statCategory]?.toFixed(1) || 'N/A'}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 pb-4">
              <Button variant="outline" className="border-sport-darkGray text-gray-300" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-sport-green hover:bg-sport-green/90">
                Save Picks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PredictionDisplay;
