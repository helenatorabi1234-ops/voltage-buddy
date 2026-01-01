import { Product } from '@/data/products';
import { Zap, Activity, Gauge } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: (product: Product) => void;
}

const ProductCard = ({ product, isSelected, onToggle }: ProductCardProps) => {
  return (
    <button
      onClick={() => onToggle(product)}
      className={`
        relative w-full p-4 rounded-xl border transition-all duration-300
        ${isSelected 
          ? 'bg-primary/10 border-primary electric-glow' 
          : 'bg-card border-border hover:border-primary/50 hover:bg-card/80'
        }
        group glow-effect
      `}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{product.icon}</span>
        <div className="flex-1 text-right">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>{product.voltage} ولت</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-accent" />
              <span>{product.wattage} وات</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-electric-cyan" />
              <span>{product.amperage} آمپر</span>
            </div>
          </div>
        </div>
        <div className={`
          w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center
          ${isSelected 
            ? 'border-primary bg-primary' 
            : 'border-muted-foreground'
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
