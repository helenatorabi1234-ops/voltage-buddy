import { Product, efficiencyLabels } from '@/data/products';
import { Zap, Activity, Gauge, Clock, TrendingUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: (product: Product) => void;
}

const ProductCard = ({ product, isSelected, onToggle }: ProductCardProps) => {
  const efficiency = efficiencyLabels[product.efficiency];
  
  return (
    <button
      onClick={() => onToggle(product)}
      className={`
        relative w-full p-4 rounded-xl border transition-all duration-300
        ${isSelected 
          ? 'bg-primary/10 border-primary electric-glow' 
          : 'bg-card border-border hover:border-gold/50 hover:bg-card/80'
        }
        group gold-glow-effect
      `}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{product.icon}</span>
        <div className="flex-1 text-right">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-secondary ${efficiency.color}`}>
              {product.efficiency}
            </span>
          </div>
          
          {product.description && (
            <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{product.description}</p>
          )}
          
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>{product.voltage} ولت</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-gold" />
              <span>{product.wattage} وات</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-electric-cyan" />
              <span>{product.amperage} آمپر</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{product.avgUsageHours} ساعت/روز</span>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-gold" />
              <span>PF: {product.powerFactor}</span>
            </div>
            <span className={efficiency.color}>{efficiency.label}</span>
          </div>
        </div>
        <div className={`
          w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center mt-1
          ${isSelected 
            ? 'border-primary bg-primary' 
            : 'border-muted-foreground group-hover:border-gold'
          }
        `}>
          {isSelected && (
            <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
