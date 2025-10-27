import { useState } from "react";
import { Search } from "lucide-react";
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

  const handleAnalyze = () => {
    if (!profileUrl.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a LinkedIn profile URL to analyze.",
        variant: "destructive",
      });
      return;
    }

    if (!profileUrl.includes("linkedin.com")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid LinkedIn profile URL.",
        variant: "destructive",
      });
      return;
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
      handleAnalyze();
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {!isLoading && !showProfile && (
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              LinkedIn Analyzer Tool
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get quick insights about any LinkedIn profile instantly. Simply paste a profile URL
              and let AI do the analysis.
            </p>
          </div>
        )}

        {!showProfile && !isLoading && (
          <div className="max-w-2xl mx-auto animate-scale-in">
            <div className="profile-card">
              <label htmlFor="profile-url" className="block text-sm font-medium text-foreground mb-2">
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
                  className="flex-1 h-12 text-base"
                />
                <Button
                  onClick={handleAnalyze}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-12 px-8"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Analyze
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                💡 Tip: Make sure the profile is public or you have access to view it
              </p>
            </div>

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-foreground mb-2">Instant Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Get comprehensive insights in seconds
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-foreground mb-2">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms analyze profile data
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-foreground mb-2">Detailed Metrics</h3>
                <p className="text-sm text-muted-foreground">
                  Skills, experience, and profile strength
                </p>
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
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>
          Made with ❤️ by{" "}
          <span className="font-semibold text-primary">Saurabh Tiwari</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
