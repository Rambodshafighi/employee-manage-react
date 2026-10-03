import Navigation from "./navigation";

function Header() {
  return (
    <div className="z-10 p-2 relative bg-white flex items-center justify-start shadow lg:justify-center">
      <Navigation />
    </div>
  );
}

export default Header;
