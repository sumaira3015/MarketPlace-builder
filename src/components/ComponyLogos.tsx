import { FC } from "react";
import Image from "next/image";

const LogoSection: FC = () => {
  return (
    <div className="w-full bg-[#ffffff] flex justify-center py-6">
      <div className="w-full max-w-[1321px] h-auto flex flex-wrap justify-center md:justify-between items-center gap-4">
        <Image
          src="/images/zapier-logo.png" 
          alt="Zapier Logo"
          width={107}
          height={109}
          className="object-contain"
        />
        <Image
          src="/images/pipedrive-logo.png"
          alt="PipeDrive Logo"
          width={107}
          height={109}
          className="object-contain"
        />
        <Image
          src="/images/cibbank-logo.png" 
          alt="CIA Bank Logo"
          width={107}
          height={109}
          className="object-contain"
        />
        <Image
          src="/images/z-logo.png" 
          alt="Z Bank Logo"
          width={107}
          height={109}
          className="object-contain"
        />
        <Image
          src="/images/burn-logo.png" 
          alt="Burn Toast Logo"
          width={107}
          height={109}
          className="object-contain"
        />
        <Image
          src="/images/panadoc-logo.png"
          alt="PanaDoc Logo"
          width={107}
          height={109}
          className="object-contain"
        />
        <Image
          src="/images/moz-logo.png" 
          alt="Moz Logo"
          width={107}
          height={109}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LogoSection;
