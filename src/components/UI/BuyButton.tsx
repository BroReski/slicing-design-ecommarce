interface BuyButtonProps {
  onClick?: () => void;
}

export const BuyButton = ({ onClick }: BuyButtonProps) => (
  <button 
    onClick={onClick}
    className="cursor-pointer shrink-0 text-nowrap flex py-1.5 px-3 justify-center items-center gap-2 bg-secondary transition-colors hover:bg-orange-100 rounded-sm"
  >
    <p className="text-primary font-poppins text-xs font-medium">Buy</p>
    <div className="w-3 h-3 relative flex items-center justify-center shrink-0">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-primary overflow-visible"
      >
        <path
          d="M8.33333 2.5H7.5V1.66667C7.5 0.746193 6.75381 0 5.75 0H4.25C3.24619 0 2.5 0.746193 2.5 1.66667V2.5H1.66667C0.746193 2.5 0 3.24619 0 4.16667V8.33333C0 9.25381 0.746193 10 1.66667 10H8.33333C9.25381 10 10 9.25381 10 8.33333V4.16667C10 3.24619 9.25381 2.5 8.33333 2.5ZM3.33333 1.66667C3.33333 1.20643 3.70643 0.833333 4.16667 0.833333H5.83333C6.29357 0.833333 6.66667 1.20643 6.66667 1.66667V2.5H3.33333V1.66667ZM9.16667 8.33333C9.16667 8.79357 8.79357 9.16667 8.33333 9.16667H1.66667C1.20643 9.16667 0.833333 8.79357 0.833333 8.33333V4.16667C0.833333 3.70643 1.20643 3.33333 1.66667 3.33333H8.33333C8.79357 3.33333 9.16667 3.70643 9.16667 4.16667V8.33333Z"
          fill="currentColor"
        />
        <path d="M5.41667 4.58333H4.58333V5.41667H3.75V6.25H4.58333V7.08333H5.41667V6.25H6.25V5.41667H5.41667V4.58333Z" fill="currentColor"/>
      </svg>
    </div>
  </button>
);
