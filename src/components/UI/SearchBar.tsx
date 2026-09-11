interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
  <div className="flex items-center shadow-md rounded-md w-full max-w-[735px] mx-auto mb-10 overflow-hidden bg-white">
    <input 
      type="text" 
      placeholder="search something..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="flex-1 py-3 px-4 font-poppins text-sm text-black outline-none placeholder:text-light-grey"
    />
    <button className="cursor-pointer flex py-3 px-8 justify-center items-center bg-primary transition-colors hover:bg-orange-500">
      <p className="text-white font-poppins text-sm font-medium">Search</p>
    </button>
  </div>
);
