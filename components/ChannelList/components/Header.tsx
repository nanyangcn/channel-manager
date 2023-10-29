function Header() {
  return (
    <div className="flex h-11 items-center gap-4 bg-additional px-4 py-3 dark:bg-accent-dark">
      <p
        className="flex h-5 shrink grow basis-0 items-center text-sm font-semibold
        leading-tight text-text-primary dark:text-text-primary-dark"
      >
        Name
      </p>
      <p
        className="flex h-5 items-center text-sm font-semibold
        leading-tight text-text-primary dark:text-text-primary-dark"
      >
        Visibility
      </p>
    </div>
  );
}

export default Header;
