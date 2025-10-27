import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-primary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
      <p className="mt-4 text-lg font-medium text-foreground animate-pulse-glow">
        Analyzing profile...
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        This will only take a moment
      </p>
    </div>
  );
};

export default Loader;
