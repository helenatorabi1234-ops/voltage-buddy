import { Product, electricityPrice } from '@/data/products';
import { Zap, Activity, Gauge, Trash2, TrendingUp, Clock, Coins, BarChart3 } from 'lucide-react';

interface CalculationResultProps {
  selectedProducts: Product[];
  onRemoveProduct: (productId: number) => void;
  onClearAll: () => void;
}

const CalculationResult = ({ selectedProducts, onRemoveProduct, onClearAll }: CalculationResultProps) => {
  const totalWattage = selectedProducts.reduce((sum, p) => sum + p.wattage, 0);
  const totalAmperage = selectedProducts.reduce((sum, p) => sum + p.amperage, 0);
  const avgPowerFactor = selectedProducts.length > 0 
    ? selectedProducts.reduce((sum, p) => sum + p.powerFactor, 0) / selectedProducts.length 
    : 0;
  
  // محاسبه مصرف روزانه و ماهانه
  const dailyKWh = selectedProducts.reduce((sum, p) => sum + (p.wattage * p.avgUsageHours) / 1000, 0);
  const monthlyKWh = dailyKWh * 30;
  const monthlyCost = monthlyKWh * electricityPrice;
  
  // محاسبه توان ظاهری (VA)
  const apparentPower = avgPowerFactor > 0 ? totalWattage / avgPowerFactor : totalWattage;

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
      <div className="bg-gradient-to-l from-gold/20 via-primary/10 to-electric-cyan/20 p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-gold animate-pulse-gold" />
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

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="stat-card">
          <Activity className="w-7 h-7 text-gold mx-auto mb-2" />
          <div className="text-2xl font-bold text-gold-gradient">{totalWattage.toLocaleString('fa-IR')}</div>
          <div className="text-xs text-muted-foreground">مجموع وات</div>
        </div>
        <div className="stat-card">
          <Gauge className="w-7 h-7 text-electric-cyan mx-auto mb-2" />
          <div className="text-2xl font-bold text-gradient">{totalAmperage.toFixed(2)}</div>
          <div className="text-xs text-muted-foreground">مجموع آمپر</div>
        </div>
      </div>

      {/* Extended Stats */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-4">
        <div className="bg-secondary/30 rounded-lg p-3 text-center">
          <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
          <div className="text-sm font-semibold text-foreground">{avgPowerFactor.toFixed(2)}</div>
          <div className="text-xs text-muted-foreground">ضریب توان</div>
        </div>
        <div className="bg-secondary/30 rounded-lg p-3 text-center">
          <BarChart3 className="w-5 h-5 text-electric-purple mx-auto mb-1" />
          <div className="text-sm font-semibold text-foreground">{apparentPower.toFixed(0)}</div>
          <div className="text-xs text-muted-foreground">VA ظاهری</div>
        </div>
        <div className="bg-secondary/30 rounded-lg p-3 text-center">
          <Clock className="w-5 h-5 text-gold mx-auto mb-1" />
          <div className="text-sm font-semibold text-foreground">{dailyKWh.toFixed(2)}</div>
          <div className="text-xs text-muted-foreground">kWh/روز</div>
        </div>
      </div>

      {/* Cost Estimation */}
      <div className="mx-4 mb-4 bg-gold/5 border border-gold/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Coins className="w-5 h-5 text-gold" />
          <h4 className="font-semibold text-gold">تخمین هزینه ماهانه</h4>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground">مصرف ماهانه:</span>
            <div className="font-bold text-foreground">{monthlyKWh.toFixed(1)} kWh</div>
          </div>
          <div>
            <span className="text-muted-foreground">هزینه تقریبی:</span>
            <div className="font-bold text-gold">{monthlyCost.toLocaleString('fa-IR')} تومان</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">* بر اساس تعرفه متوسط {electricityPrice.toLocaleString('fa-IR')} تومان/kWh</p>
      </div>

      {/* Selected Products */}
      <div className="p-4 border-t border-border">
        <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          محصولات انتخاب‌شده ({selectedProducts.length})
        </h4>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {selectedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-secondary/30 rounded-lg p-3 group animate-scale-in hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{product.icon}</span>
                <div>
                  <div className="font-medium text-foreground text-sm">{product.name}</div>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-gold">{product.wattage}W</span> • {product.amperage}A • {product.avgUsageHours}h/روز
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
      
      {/* Low Power Factor Warning */}
      {avgPowerFactor > 0 && avgPowerFactor < 0.8 && (
        <div className="p-4 bg-gold/10 border-t border-gold/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-medium text-gold">ضریب توان پایین</h4>
              <p className="text-sm text-muted-foreground">
                ضریب توان کمتر از ۰.۸ است. استفاده از خازن اصلاح ضریب توان توصیه می‌شود.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculationResult;
