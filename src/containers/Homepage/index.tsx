import Link from "next/link";

import * as Meta from "@/common/metaSeo/titleMeta";
import Main from "@/layouts/Main";

const Homepage = (data: any) => {
  return (
    <Main meta={Meta.HomePage}>
      <Link href={"/hello"}>123</Link>
    </Main>
  );
};

export default Homepage;
