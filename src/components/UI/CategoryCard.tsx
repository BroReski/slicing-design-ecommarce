import { categories } from '../../data/dummyData';

interface CategoryCardProps {
  imageSrc: string;
  label: string;
}

export const CategoryCard = ({ imageSrc, label }: CategoryCardProps) => {
  return (
    <div className="shadow-lg w-[166px] h-[166px] flex flex-col items-center justify-between bg-white overflow-hidden transition-transform hover:-translate-y-1 rounded-md">
      <div className="flex-1 w-full flex items-center justify-center pt-4">
        <img
          src={imageSrc}
          className="w-[100px] h-[100px] rounded-full object-cover shadow-sm"
          alt={label}
        />
      </div>
      <button className="cursor-pointer flex py-2 px-2.5 justify-center items-center bg-secondary w-full transition-colors hover:bg-orange-100 mt-2">
        <p className="text-primary font-poppins text-base font-medium text-center w-full truncate">
          {label}
        </p>
      </button>
    </div>
  );
};

export const CategorySection = () => {
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="inline-flex py-2 px-6 items-center bg-primary w-fit shadow-sm rounded-sm">
        <h2 className="text-white font-poppins text-base font-medium">
          Product Category
        </h2>
      </div>

      <div className="flex flex-wrap justify-between gap-x-[15px] gap-y-6">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
    </section>
  );
};