import { voltageRanges } from '@/data/products';
import { Zap } from 'lucide-react';

interface VoltageFilterProps {
  selectedVoltage: { min: number; max: number } | null;
  onSelectVoltage: (voltage: { min: number; max: number } | null) => void;
}

const VoltageFilter = ({ selectedVoltage, onSelectVoltage }: VoltageFilterProps) => {
  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-primary animate-pulse-glow" />
        <h3 className="font-semibold text-foreground">فیلتر بر اساس ولتاژ</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectVoltage(null)}
          className={`
            px-3 py-1.5 rounded-lg text-sm transition-all duration-300
            ${selectedVoltage === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }
          `}
        >
          همه ولتاژها
        </button>
        {voltageRanges.map((range, index) => (
          <button
            key={index}
            onClick={() => onSelectVoltage({ min: range.min, max: range.max })}
            className={`
              px-3 py-1.5 rounded-lg text-sm transition-all duration-300
              ${selectedVoltage?.min === range.min && selectedVoltage?.max === range.max
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }
            `}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VoltageFilter;
