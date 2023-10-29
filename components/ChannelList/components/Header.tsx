function Header() {
  return (
    <div className="flex h-11 items-center gap-4 bg-additional px-4 py-3">
      <p className="flex h-5 shrink grow basis-0 items-center text-sm font-semibold leading-tight text-text-primary">
        Name
      </p>
      <p className="flex h-5 items-center text-sm font-semibold leading-tight text-text-primary">
        Visibility
      </p>
    </div>
  );
}

export default Header;
