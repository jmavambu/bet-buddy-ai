
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Award, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient py-16 sm:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-white sm:text-6xl">
              AI-Powered{" "}
              <span className="text-sport-gold">Sports Predictions</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Let our advanced AI find the best player performance picks across NBA, NFL, and soccer. Make smarter decisions with data-driven insights.
            </p>
            <div className="mt-10">
              <Button className="bg-sport-green hover:bg-sport-green/90 text-white px-6 py-6 text-lg">
                Get Predictions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-sport-blue/50 backdrop-blur-sm p-6 rounded-lg border border-sport-blue/30">
                <div className="h-12 w-12 rounded-md bg-sport-gold/20 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-sport-gold" />
                </div>
                <h3 className="text-lg font-bold text-white">AI Predictions</h3>
                <p className="mt-2 text-gray-300">
                  Our AI analyzes millions of data points to predict player performance with high accuracy.
                </p>
              </div>
              
              <div className="bg-sport-blue/50 backdrop-blur-sm p-6 rounded-lg border border-sport-blue/30">
                <div className="h-12 w-12 rounded-md bg-sport-green/20 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-sport-green" />
                </div>
                <h3 className="text-lg font-bold text-white">Multiple Sports</h3>
                <p className="mt-2 text-gray-300">
                  Get predictions for NBA, NFL, and soccer all in one platform.
                </p>
              </div>
              
              <div className="bg-sport-blue/50 backdrop-blur-sm p-6 rounded-lg border border-sport-blue/30">
                <div className="h-12 w-12 rounded-md bg-sport-gold/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-sport-gold" />
                </div>
                <h3 className="text-lg font-bold text-white">Smart Insights</h3>
                <p className="mt-2 text-gray-300">
                  Get clear recommendations with confidence scores to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
