import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BuyMeACoffee = () => {
  return (
    <Link href="https://www.buymeacoffee.com/jayakrishnanm" target="_blank">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        height={36}
        width={140}
        objectFit="cover"
        style={{
          height: "36px !important",
          width: "140px !important",
        }}
      />
    </Link>
  );
};
