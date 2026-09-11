import CityBg from '../../assets/Citypng1.png';
import BikeImg from '../../assets/Image2.png';
import ConfettiImg from '../../assets/Kisspngpaperconfettiribboncelebrationribbon5aa75a379471822.png';
import DecorImg from '../../assets/Image1.png';

export const Hero = () => {
  return (
    <section className="relative bg-primary w-full max-w-[1117px] min-h-[300px] rounded-[20px] mx-auto overflow-hidden flex flex-col justify-center items-start px-12 py-16 shadow-md mt-6">
      
      {/* Background shape */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 627 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 object-cover w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <path d="M0 0H537.126L627 240H0V0Z" fill="#FFA53C" />
      </svg>
      <img
        src={CityBg}
        className="absolute -left-[7px] -bottom-[50px] w-[500px] h-auto max-w-none opacity-20 pointer-events-none mix-blend-overlay"
        alt="city background"
      />
      <img
        src={BikeImg}
        className="absolute right-[50px] top-1/2 -translate-y-1/2 w-[302px] h-auto max-w-none z-10 pointer-events-none object-contain"
        alt="bicycle and balls"
      />
      <img
        src={ConfettiImg}
        className="absolute right-[120px] top-0 w-[266px] h-[266px] max-w-none pointer-events-none object-contain"
        alt="confetti ribbon"
      />
      <img
        src={ConfettiImg}
        className="absolute left-0 right-0 top-[150px] w-[266px] h-[266px] max-w-none pointer-events-none object-contain"
        alt="confetti ribbon"
      />
       <img
        src={ConfettiImg}
        className="absolute right-[400px] top-[-80px] w-[266px] h-[266px] max-w-none pointer-events-none object-contain"
        alt="confetti ribbon"
      />
      <img
        src={DecorImg}
        className="absolute right-[10px] bottom-[20px] w-[167px] h-[73px] max-w-none z-20 pointer-events-none object-contain"
        alt="hero decorative"
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-start gap-4 max-w-[600px]">
        <div className="inline-flex py-1.5 px-4 bg-secondary rounded-sm">
          <p className="text-primary font-poppins text-lg md:text-xl font-medium">
            Special Offers
          </p>
        </div>
        <h1 className="text-white font-poppins text-4xl md:text-5xl font-semibold leading-tight">
          Sport Day Super Amazing Discount
        </h1>
      </div>

      {/* Arrows */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-30 pointer-events-none">
        <div className="pointer-events-auto cursor-pointer p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
          <ArrowLeft />
        </div>
        <div className="pointer-events-auto cursor-pointer p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
          <ArrowRight />
        </div>
      </div>
    </section>
  );
};

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0V0ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H10.7006L14.7262 19.9613C14.8134 20.0484 14.8826 20.1519 14.9297 20.2658C14.9769 20.3797 15.0012 20.5017 15.0012 20.625C15.0012 20.7483 14.9769 20.8703 14.9297 20.9842C14.8826 21.0981 14.8134 21.2016 14.7262 21.2887C14.6391 21.3759 14.5356 21.4451 14.4217 21.4922C14.3078 21.5394 14.1858 21.5637 14.0625 21.5637C13.9392 21.5637 13.8172 21.5394 13.7033 21.4922C13.5894 21.4451 13.4859 21.3759 13.3988 21.2887L7.77375 15.6637C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49832 15.1233 7.49832 15C7.49832 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3363L13.3988 8.71125C13.5748 8.53521 13.8135 8.43632 14.0625 8.43632C14.3115 8.43632 14.5502 8.53521 14.7262 8.71125C14.9023 8.88729 15.0012 9.12605 15.0012 9.375C15.0012 9.62395 14.9023 9.86271 14.7262 10.0387L10.7006 14.0625H21.5625Z" fill="white" fillOpacity="0.8"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9783 30 15C30 11.0218 28.4196 7.20645 25.6066 4.3934C22.7936 1.58035 18.9783 1.65913e-06 15 1.31134e-06C11.0218 9.63552e-07 7.20645 1.58035 4.3934 4.3934C1.58035 7.20644 1.65913e-06 11.0218 1.31134e-06 15C9.63552e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30V30ZM8.4375 15.9375C8.18886 15.9375 7.9504 15.8387 7.77459 15.6629C7.59877 15.4871 7.5 15.2486 7.5 15C7.5 14.7514 7.59877 14.5129 7.77459 14.3371C7.9504 14.1613 8.18886 14.0625 8.4375 14.0625L19.2994 14.0625L15.2738 10.0388C15.1866 9.95159 15.1174 9.84811 15.0703 9.73422C15.0231 9.62033 14.9988 9.49827 14.9988 9.375C14.9988 9.25173 15.0231 9.12967 15.0703 9.01578C15.1174 8.90189 15.1866 8.79842 15.2738 8.71125C15.3609 8.62409 15.4644 8.55494 15.5783 8.50777C15.6922 8.4606 15.8142 8.43632 15.9375 8.43632C16.0608 8.43632 16.1828 8.4606 16.2967 8.50777C16.4106 8.55494 16.5141 8.62409 16.6013 8.71125L22.2263 14.3363C22.3136 14.4233 22.3828 14.5268 22.4301 14.6407C22.4773 14.7546 22.5017 14.8767 22.5017 15C22.5017 15.1233 22.4773 15.2454 22.4301 15.3593C22.3828 15.4732 22.3136 15.5767 22.2263 15.6638L16.6013 21.2888C16.4252 21.4648 16.1865 21.5637 15.9375 21.5637C15.6885 21.5637 15.4498 21.4648 15.2738 21.2888C15.0977 21.1127 14.9988 20.874 14.9988 20.625C14.9988 20.376 15.0977 20.1373 15.2738 19.9613L19.2994 15.9375L8.4375 15.9375Z" fill="white" fillOpacity="0.8"/>
  </svg>
);