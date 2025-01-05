import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

export function ColorPicker({ label, ...inputProps }: Props) {
  return (
    <div className="flex items-center">
      <label
        htmlFor="hs-color-input"
        className="block text-sm font-medium mb-2"
      >
        {label}
      </label>
      <input
        type="color"
        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
        id="hs-color-input"
        {...inputProps}
      />
    </div>
  );
}
