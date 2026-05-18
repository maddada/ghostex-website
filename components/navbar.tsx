import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full border-b border-border border-dashed relative mx-auto bg-background/90 backdrop-blur-2xl p-2 rounded flex items-center justify-between">
      <PlusIcon className="absolute bottom-0 left-0 translate-y-2 -translate-x-2 rotate-45" />
      <PlusIcon className="absolute bottom-0 right-0 translate-y-2 translate-x-2 rotate-45" />
      <img alt="logo" src={"/icon.png"} className="size-12" />
      <div>
        <Link className="font-sans" href={"https://x.com/maddada"}><XLogoIcon /> @mannada</Link>
      </div>
    </div>
  );
}

export default Navbar;

const PlusIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#222323"
      viewBox="0 0 256 256"
      className={className}
    >
      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
    </svg>
  );
};

const XLogoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#222323"
      viewBox="0 0 256 256"
    >
      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
    </svg>
  );
};
