import Image from "next/image";
import Link from "next/link";

const Logo = ({ href = "/overview" }: { href?: string }) => {
  return (
    <Link href={href}>
      <Image
        src="/assets/images/Logo.svg"
        alt="Company Logo"
        width={150}
        height={50}
        priority
        className="object-contain w-auto h-auto  max-sm:w-28"
      />
    </Link>
  );
};

export default Logo;
