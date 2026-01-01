import { useState, useMemo } from 'react';
import { Zap, Search } from 'lucide-react';
import { products, categories, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import VoltageFilter from '@/components/VoltageFilter';
import CalculationResult from '@/components/CalculationResult';

const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVoltage, setSelectedVoltage] = useState<{ min: number; max: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesVoltage = !selectedVoltage || 
        (product.voltage >= selectedVoltage.min && product.voltage <= selectedVoltage.max);
      const matchesSearch = !searchQuery || 
        product.name.includes(searchQuery);
      return matchesCategory && matchesVoltage && matchesSearch;
    });
  }, [selectedCategory, selectedVoltage, searchQuery]);

  const handleToggleProduct = (product: Product) => {
    setSelectedProducts((prev) => {
      const isSelected = prev.some((p) => p.id === product.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearAll = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Glow effect background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-10 animate-slide-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary animate-pulse-glow" />
            <h1 className="text-3xl md:text-5xl font-bold text-gradient">
              محاسبه‌گر ولتاژ برق
            </h1>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            محصولات خود را انتخاب کنید تا مجموع مصرف برق را محاسبه کنیم
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar - Results */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="lg:sticky lg:top-8 space-y-4">
              <CalculationResult
                selectedProducts={selectedProducts}
                onRemoveProduct={handleRemoveProduct}
                onClearAll={handleClearAll}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search */}
            <div className="relative animate-fade-in">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="جستجوی محصول..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border rounded-xl py-3 pr-12 pl-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Voltage Filter */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <VoltageFilter
                selectedVoltage={selectedVoltage}
                onSelectVoltage={setSelectedVoltage}
              />
            </div>

            {/* Category Filter */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h3 className="font-semibold text-foreground mb-4">دسته‌بندی محصولات</h3>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">
                  محصولات ({filteredProducts.length})
                </h3>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="bg-card rounded-xl p-8 border border-border text-center">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-muted-foreground">محصولی یافت نشد</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard
                        product={product}
                        isSelected={selectedProducts.some((p) => p.id === product.id)}
                        onToggle={handleToggleProduct}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground text-sm">
          <p>
            ساخته شده با ⚡ برای محاسبه مصرف برق خانگی و صنعتی
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
