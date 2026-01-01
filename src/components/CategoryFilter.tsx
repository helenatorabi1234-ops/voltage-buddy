import { Category } from '@/data/products';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${selectedCategory === null
            ? 'bg-primary text-primary-foreground electric-glow'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }
        `}
      >
        همه
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
            ${selectedCategory === category.id
              ? 'bg-primary text-primary-foreground electric-glow'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }
          `}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
