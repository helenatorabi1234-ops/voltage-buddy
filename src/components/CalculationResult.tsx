import { Product } from '@/data/products';
import { Zap, Activity, Gauge, Trash2 } from 'lucide-react';

interface CalculationResultProps {
  selectedProducts: Product[];
  onRemoveProduct: (productId: number) => void;
  onClearAll: () => void;
}

const CalculationResult = ({ selectedProducts, onRemoveProduct, onClearAll }: CalculationResultProps) => {
  const totalWattage = selectedProducts.reduce((sum, p) => sum + p.wattage, 0);
  const totalAmperage = selectedProducts.reduce((sum, p) => sum + p.amperage, 0);

  if (selectedProducts.length === 0) {
    return (
      <div className="bg-card rounded-2xl p-6 border border-border text-center">
        <div className="text-6xl mb-4 animate-float">⚡</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          محصولی انتخاب نشده
        </h3>
        <p className="text-muted-foreground text-sm">
          از لیست زیر محصولات مورد نظر را انتخاب کنید
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-l from-primary/20 to-electric-cyan/20 p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            نتیجه محاسبه
          </h3>
          <button
            onClick={onClearAll}
            className="text-destructive hover:text-destructive/80 transition-colors text-sm flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            پاک کردن همه
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-secondary/50 rounded-xl p-4 text-center">
          <Activity className="w-8 h-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-gradient">{totalWattage.toLocaleString('fa-IR')}</div>
          <div className="text-sm text-muted-foreground">مجموع وات</div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 text-center">
          <Gauge className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
          <div className="text-2xl font-bold text-gradient">{totalAmperage.toFixed(2)}</div>
          <div className="text-sm text-muted-foreground">مجموع آمپر</div>
        </div>
      </div>

      {/* Selected Products */}
      <div className="p-4 border-t border-border">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">
          محصولات انتخاب‌شده ({selectedProducts.length})
        </h4>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {selectedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-secondary/30 rounded-lg p-3 group animate-scale-in"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{product.icon}</span>
                <div>
                  <div className="font-medium text-foreground text-sm">{product.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {product.wattage} وات • {product.amperage} آمپر
                  </div>
                </div>
              </div>
              <button
                onClick={() => onRemoveProduct(product.id)}
                className="opacity-0 group-hover:opacity-100 text-destructive hover:text-destructive/80 transition-all p-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Warning */}
      {totalAmperage > 16 && (
        <div className="p-4 bg-accent/10 border-t border-accent/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-medium text-accent">هشدار مصرف بالا</h4>
              <p className="text-sm text-muted-foreground">
                مجموع آمپراژ از ۱۶ آمپر بیشتر است. از فیوز و سیم‌کشی مناسب اطمینان حاصل کنید.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculationResult;
