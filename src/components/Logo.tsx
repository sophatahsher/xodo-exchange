import Image from "next/image";
import webLogo from "../../public/xodo-logo.png";

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={webLogo}
        alt="Logo"
        className="w-10"
        width={24}
        height={24}
      />
    </>
  );
};

export default Logo;
