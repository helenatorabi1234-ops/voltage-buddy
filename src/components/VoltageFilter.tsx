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
        <Zap className="w-5 h-5 text-gold animate-pulse-gold" />
        <h3 className="font-semibold text-foreground">فیلتر بر اساس ولتاژ</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectVoltage(null)}
          className={`
            px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2
            ${selectedVoltage === null
              ? 'bg-gold text-gold-dark font-semibold gold-glow'
              : 'bg-secondary text-secondary-foreground hover:bg-gold/10 hover:text-gold hover:border-gold/30 border border-transparent'
            }
          `}
        >
          <span>🔋</span>
          همه ولتاژها
        </button>
        {voltageRanges.map((range, index) => (
          <button
            key={index}
            onClick={() => onSelectVoltage({ min: range.min, max: range.max })}
            className={`
              px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2
              ${selectedVoltage?.min === range.min && selectedVoltage?.max === range.max
                ? 'bg-gold text-gold-dark font-semibold gold-glow'
                : 'bg-secondary text-secondary-foreground hover:bg-gold/10 hover:text-gold hover:border-gold/30 border border-transparent'
              }
            `}
          >
            <span>{range.icon}</span>
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VoltageFilter;
