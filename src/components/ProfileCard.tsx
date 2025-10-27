import { MapPin, Briefcase, Award, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

interface ProfileData {
  name: string;
  headline: string;
  location: string;
  experience: string;
  skills: string[];
  profileStrength: string;
  summary: string;
  imageUrl?: string;
}

interface ProfileCardProps {
  data: ProfileData;
  onReset: () => void;
}

const ProfileCard = ({ data, onReset }: ProfileCardProps) => {
  const strengthValue = parseFloat(data.profileStrength.split("/")[0]);
  const strengthPercentage = (strengthValue / 10) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="profile-card">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-shrink-0">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              {data.name.charAt(0)}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-2">{data.name}</h2>
            <p className="text-lg text-muted-foreground mb-3">{data.headline}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                <span>{data.experience}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Strength */}
        <div className="mb-6 p-4 bg-secondary rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Profile Strength</span>
            </div>
            <span className="text-2xl font-bold text-primary">{data.profileStrength}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${strengthPercentage}%` }}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Top Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI Summary */}
        <div className="mb-6 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <span className="text-xl">🤖</span>
            AI-Generated Summary
          </h3>
          <p className="text-muted-foreground leading-relaxed">{data.summary}</p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button
            onClick={onReset}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Analyze Another Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
