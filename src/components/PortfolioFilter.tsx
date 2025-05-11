
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const PortfolioFilter = ({ 
  categories, 
  activeCategory, 
  onChange 
}: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onChange("all")}
        className={cn(
          "transition-all",
          activeCategory === "all" 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-primary/10"
        )}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onChange(category)}
          className={cn(
            "transition-all",
            activeCategory === category 
              ? "bg-primary text-primary-foreground" 
              : "hover:bg-primary/10"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
