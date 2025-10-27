import { Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Linkedin className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LinkedIn Analyzer</h1>
              <p className="text-xs text-muted-foreground">Profile Insights Tool</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Powered by AI</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
