
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SportSelector from "@/components/SportSelector";
import PlayerCard from "@/components/PlayerCard";
import PredictionDisplay from "@/components/PredictionDisplay";
import Footer from "@/components/Footer";
import { Player, Prediction, Sport } from "@/types";
import { 
  getPlayersBySport, 
  nbaMockPlayers, 
  nflMockPlayers, 
  soccerMockPlayers 
} from "@/utils/mockData";
import { Separator } from "@/components/ui/separator";
import { SearchIcon, FilterIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [selectedSport, setSelectedSport] = useState<Sport>("nba");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const { toast } = useToast();

  const handleSportChange = (sport: Sport) => {
    setSelectedSport(sport);
    setSearchQuery("");
    toast({
      title: `Switched to ${sport.toUpperCase()}`,
      description: `Showing ${sport.toUpperCase()} players and predictions`,
    });
  };

  const handleShowPredictions = (player: Player, playerPredictions: Prediction[]) => {
    setSelectedPlayer(player);
    setPredictions(playerPredictions);
    setShowPredictions(true);
  };

  const players = getPlayersBySport(selectedSport);
  
  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-sport-gradient text-white">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <Separator className="bg-sport-darkGray/30" />
        
        <SportSelector 
          onSelectSport={handleSportChange} 
          selectedSport={selectedSport} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
              {selectedSport === "nba" 
                ? "NBA Players" 
                : selectedSport === "nfl" 
                  ? "NFL Players" 
                  : "Soccer Players"}
            </h2>
            
            <div className="flex w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search players or teams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-sport-darkGray/50 border-sport-darkGray/50 text-white placeholder:text-gray-500"
                />
              </div>
              <Button variant="outline" className="ml-2 border-sport-darkGray/50">
                <FilterIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onShowPredictions={handleShowPredictions}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No players found matching "{searchQuery}"</p>
              <Button 
                variant="link" 
                className="text-sport-gold"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
        
        <PredictionDisplay
          player={selectedPlayer}
          predictions={predictions}
          isOpen={showPredictions}
          onClose={() => setShowPredictions(false)}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
