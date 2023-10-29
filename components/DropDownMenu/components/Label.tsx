function Label({ label, isRequired = false }: { label: string; isRequired?: boolean }) {
  return (
    <div className="inline-flex h-5 w-9 items-center gap-0.5">
      <p
        className="flex items-center text-sm font-semibold leading-tight
      text-text-primary dark:text-text-primary-dark"
      >
        {label}
      </p>
      {isRequired && (
        <span className="text-error dark:text-error-dark">*</span>
      )}
    </div>
  );
}

export default Label;
