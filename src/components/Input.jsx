import { forwardRef } from "react";

const Input = forwardRef(function ({ label, textarea, ...props }, ref) {
  const inputClasses =
    "h-10 rounded border-b-2 border-b-stone-400 bg-stone-300 px-2 py-1 text-lg outline-none focus:border-b-stone-800";

  return (
    <div className="mb-6 flex flex-col gap-1">
      <label
        htmlFor={label}
        className="text-lg font-bold uppercase text-stone-600"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          id={label}
          className={`h-24${inputClasses}`}
        ></textarea>
      ) : (
        <input ref={ref} id={label} className={inputClasses} {...props} />
      )}
    </div>
  );
});

export default Input;
