import Link from "next/link";

function Header() {
  return (
    <div className="wrapper-header">
      <img src="/logo.svg" alt="logo" />
      <Link href={"/Dang-Nhap"}>Đăng nhập</Link>
    </div>
  );
}

export default Header;
