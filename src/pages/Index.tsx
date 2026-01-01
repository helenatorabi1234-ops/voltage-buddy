import { useState, useMemo } from 'react';
import { Zap, Search, Filter, LayoutGrid, List, Info } from 'lucide-react';
import { products, categories, Product, efficiencyLabels } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import VoltageFilter from '@/components/VoltageFilter';
import CalculationResult from '@/components/CalculationResult';

const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVoltage, setSelectedVoltage] = useState<{ min: number; max: number } | null>(null);
  const [selectedEfficiency, setSelectedEfficiency] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesVoltage = !selectedVoltage || 
        (product.voltage >= selectedVoltage.min && product.voltage <= selectedVoltage.max);
      const matchesEfficiency = !selectedEfficiency || product.efficiency === selectedEfficiency;
      const matchesSearch = !searchQuery || 
        product.name.includes(searchQuery) || 
        product.description?.includes(searchQuery);
      return matchesCategory && matchesVoltage && matchesEfficiency && matchesSearch;
    });
  }, [selectedCategory, selectedVoltage, selectedEfficiency, searchQuery]);

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

  const efficiencyOptions = Object.entries(efficiencyLabels);

  return (
    <div className="min-h-screen bg-background">
      {/* Glow effect background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-electric-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-10 animate-slide-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-gold animate-pulse-gold" />
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gold-gradient">
              محاسبه‌گر ولتاژ برق
            </h1>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            محصولات خود را انتخاب کنید تا مجموع مصرف برق، هزینه ماهانه و جزئیات فنی را محاسبه کنیم
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <div className="info-badge">
              <span>📦</span>
              {products.length} محصول
            </div>
            <div className="info-badge">
              <span>📂</span>
              {categories.length} دسته‌بندی
            </div>
            <div className="info-badge">
              <span>⚡</span>
              محاسبه آنی
            </div>
          </div>
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
            {/* Search & View Toggle */}
            <div className="flex gap-3 animate-fade-in">
              <div className="relative flex-1">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="جستجوی محصول..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border rounded-xl py-3 pr-12 pl-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
              </div>
              <div className="flex bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-gold/20 text-gold' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-gold/20 text-gold' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
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
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-foreground">دسته‌بندی محصولات</h3>
                </div>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>
            </div>

            {/* Efficiency Filter */}
            <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-foreground">رده مصرف انرژی</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedEfficiency(null)}
                    className={`
                      px-3 py-1.5 rounded-lg text-sm transition-all duration-300
                      ${selectedEfficiency === null
                        ? 'bg-gold text-gold-dark font-semibold'
                        : 'bg-secondary text-secondary-foreground hover:bg-gold/10 hover:text-gold'
                      }
                    `}
                  >
                    همه
                  </button>
                  {efficiencyOptions.map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedEfficiency(key)}
                      className={`
                        px-3 py-1.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-1.5
                        ${selectedEfficiency === key
                          ? 'bg-gold text-gold-dark font-semibold'
                          : 'bg-secondary text-secondary-foreground hover:bg-gold/10'
                        }
                      `}
                    >
                      <span className={selectedEfficiency === key ? '' : value.color}>{key}</span>
                      <span className="text-xs opacity-70">{value.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  محصولات ({filteredProducts.length})
                </h3>
                {selectedProducts.length > 0 && (
                  <span className="text-sm text-gold">
                    {selectedProducts.length} انتخاب شده
                  </span>
                )}
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="bg-card rounded-xl p-8 border border-border text-center">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-muted-foreground">محصولی یافت نشد</p>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid sm:grid-cols-2 gap-3' : 'space-y-3'}>
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 0.03}s` }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-border/50">
            <Zap className="w-4 h-4 text-gold" />
            <p>ساخته شده برای محاسبه مصرف برق خانگی و صنعتی</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
