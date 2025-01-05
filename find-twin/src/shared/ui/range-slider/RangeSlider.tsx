import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

export function RangeSlider({ label, ...inputProps }: Props) {
  return (
    <div className="flex items-center">
      <label
        htmlFor="steps-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex gap-2 items-center">
        <input
          id="steps-range"
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          {...inputProps}
        />
        <span>{inputProps.value}</span>
      </div>
    </div>
  );
}
