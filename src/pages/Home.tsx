import { useState } from "react";
import { Search, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/Loader";
import ProfileCard from "@/components/ProfileCard";
import { toast } from "@/hooks/use-toast";

const mockProfileData = {
  name: "Saurabh Tiwari",
  headline: "Frontend Developer | React | MERN Stack | UI/UX Enthusiast",
  location: "Jaunpur, India",
  experience: "2+ years in Web Development",
  skills: ["React", "Tailwind CSS", "Node.js", "JavaScript", "TypeScript", "UI/UX Design"],
  profileStrength: "8.5 / 10",
  summary:
    "Saurabh is a passionate frontend developer with extensive experience in React.js and modern UI technologies. He has a strong understanding of building responsive, user-friendly web applications and demonstrates expertise in the MERN stack. His dedication to clean code and modern design principles makes him a valuable asset in web development projects.",
};

const Home = () => {
  const [profileUrl, setProfileUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleAnalyze = (isDemoMode = false) => {
    if (!isDemoMode && !profileUrl.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a LinkedIn profile URL to analyze.",
        variant: "destructive",
      });
      return;
    }

    if (!isDemoMode && !profileUrl.includes("linkedin.com")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid LinkedIn profile URL.",
        variant: "destructive",
      });
      return;
    }

    if (isDemoMode) {
      setProfileUrl("https://www.linkedin.com/in/saurabh-tiwari");
    }

    setIsLoading(true);
    setShowProfile(false);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowProfile(true);
      toast({
        title: "Analysis Complete!",
        description: "Profile insights generated successfully.",
      });
    }, 2000);
  };

  const handleReset = () => {
    setProfileUrl("");
    setShowProfile(false);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAnalyze(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 hero-background">
      <div className="container mx-auto max-w-6xl">
        {!isLoading && !showProfile && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-primary">AI-Powered Analysis</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text leading-tight">
              LinkedIn Analyzer Tool
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Get quick insights about any LinkedIn profile instantly. Simply paste a profile URL
              and let AI do the analysis.
            </p>
            <Button
              onClick={() => handleAnalyze(true)}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
            >
              <Zap className="h-4 w-4 mr-2" />
              Try Quick Demo
            </Button>
          </div>
        )}

        {!showProfile && !isLoading && (
          <div className="max-w-2xl mx-auto animate-scale-in">
            <div className="profile-card">
              <label htmlFor="profile-url" className="block text-sm font-semibold text-foreground mb-2">
                LinkedIn Profile URL
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  id="profile-url"
                  type="url"
                  placeholder="https://www.linkedin.com/in/username"
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 h-12 text-base border-border focus:border-primary focus:ring-primary"
                />
                <Button
                  onClick={() => handleAnalyze(false)}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-12 px-8"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Analyze
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground flex items-center gap-1">
                <span>💡</span>
                <span>Tip: Make sure the profile is public or you have access to view it</span>
              </p>
            </div>

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="stat-card text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-foreground mb-2 text-lg">Instant Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Get comprehensive insights in seconds
                </p>
              </div>
              <div className="stat-card text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-bold text-foreground mb-2 text-lg">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms analyze profile data
                </p>
              </div>
              <div className="stat-card text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-foreground mb-2 text-lg">Detailed Metrics</h3>
                <p className="text-sm text-muted-foreground">
                  Skills, experience, and profile strength
                </p>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Profiles Analyzed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">&lt;2s</div>
                  <div className="text-sm text-muted-foreground">Avg. Analysis Time</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isLoading && <Loader />}

        {showProfile && !isLoading && (
          <ProfileCard data={mockProfileData} onReset={handleReset} />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <span className="text-sm text-muted-foreground">Made with</span>
          <span className="text-red-500 text-lg animate-pulse-glow">❤️</span>
          <span className="text-sm text-muted-foreground">by</span>
          <span className="font-bold text-primary">Saurabh Tiwari</span>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          © 2025 LinkedIn Analyzer Tool. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
