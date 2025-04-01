
import { useState } from "react";
import { Basketball as BasketballIcon, Football as FootballIcon, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sport } from "@/types";

// Custom Basketball icon since it's not available in lucide-react
const Basketball = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M4.93 4.93 19.07 19.07" />
    <path d="M12 2a10 10 0 0 0-8.48 4.69" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M12 22a10 10 0 0 0 8.48-4.69" />
  </svg>
);

// Custom Football icon since it's not available in lucide-react
const Football = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m7.48 7.48 9.04 9.04" />
    <path d="m7.48 16.52 9.04-9.04" />
    <path d="M3 12h3" />
    <path d="M12 3v3" />
    <path d="M18 12h3" />
    <path d="M12 18v3" />
  </svg>
);

interface SportSelectorProps {
  onSelectSport: (sport: Sport) => void;
  selectedSport: Sport;
}

const SportSelector = ({ onSelectSport, selectedSport }: SportSelectorProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">Select a Sport</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => onSelectSport("nba")}
          className={cn(
            "p-6 rounded-lg border transition-all duration-300 flex items-center",
            selectedSport === "nba"
              ? "bg-sport-blue border-sport-gold shadow-md shadow-sport-gold/20"
              : "bg-sport-darkGray/50 border-sport-darkGray/50 hover:bg-sport-darkGray/70"
          )}
        >
          <div
            className={cn(
              "h-12 w-12 rounded-full flex items-center justify-center mr-4",
              selectedSport === "nba" 
                ? "bg-sport-gold/20" 
                : "bg-gray-700"
            )}
          >
            <Basketball
              className={cn(
                "h-6 w-6",
                selectedSport === "nba" ? "text-sport-gold" : "text-gray-400"
              )}
            />
          </div>
          <div className="text-left">
            <h3 className={cn(
              "text-lg font-bold",
              selectedSport === "nba" ? "text-white" : "text-gray-300"
            )}>
              NBA Basketball
            </h3>
            <p className={cn(
              "text-sm",
              selectedSport === "nba" ? "text-gray-300" : "text-gray-500"
            )}>
              Points, rebounds, assists & more
            </p>
          </div>
        </button>

        <button
          onClick={() => onSelectSport("nfl")}
          className={cn(
            "p-6 rounded-lg border transition-all duration-300 flex items-center",
            selectedSport === "nfl"
              ? "bg-sport-blue border-sport-gold shadow-md shadow-sport-gold/20"
              : "bg-sport-darkGray/50 border-sport-darkGray/50 hover:bg-sport-darkGray/70"
          )}
        >
          <div
            className={cn(
              "h-12 w-12 rounded-full flex items-center justify-center mr-4",
              selectedSport === "nfl" 
                ? "bg-sport-gold/20" 
                : "bg-gray-700"
            )}
          >
            <Football
              className={cn(
                "h-6 w-6",
                selectedSport === "nfl" ? "text-sport-gold" : "text-gray-400"
              )}
            />
          </div>
          <div className="text-left">
            <h3 className={cn(
              "text-lg font-bold",
              selectedSport === "nfl" ? "text-white" : "text-gray-300"
            )}>
              NFL Football
            </h3>
            <p className={cn(
              "text-sm",
              selectedSport === "nfl" ? "text-gray-300" : "text-gray-500"
            )}>
              Passing, rushing, receiving stats
            </p>
          </div>
        </button>

        <button
          onClick={() => onSelectSport("soccer")}
          className={cn(
            "p-6 rounded-lg border transition-all duration-300 flex items-center",
            selectedSport === "soccer"
              ? "bg-sport-blue border-sport-gold shadow-md shadow-sport-gold/20"
              : "bg-sport-darkGray/50 border-sport-darkGray/50 hover:bg-sport-darkGray/70"
          )}
        >
          <div
            className={cn(
              "h-12 w-12 rounded-full flex items-center justify-center mr-4",
              selectedSport === "soccer" 
                ? "bg-sport-gold/20" 
                : "bg-gray-700"
            )}
          >
            <Trophy
              className={cn(
                "h-6 w-6",
                selectedSport === "soccer" ? "text-sport-gold" : "text-gray-400"
              )}
            />
          </div>
          <div className="text-left">
            <h3 className={cn(
              "text-lg font-bold",
              selectedSport === "soccer" ? "text-white" : "text-gray-300"
            )}>
              Soccer
            </h3>
            <p className={cn(
              "text-sm",
              selectedSport === "soccer" ? "text-gray-300" : "text-gray-500"
            )}>
              Goals, assists, shots & more
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SportSelector;
