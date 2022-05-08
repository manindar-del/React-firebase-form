import React from 'react';

interface InputData {
  placeholder: string;
  type: string;
  register: any;
}
export default function TextInputField({ placeholder, type, register }: InputData) {
  return (
    <div>
      <input
      {...register}
      type={type}
      placeholder={placeholder}
      className="appearance-none rounded-none relative block w-full 
      px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
      rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
      focus:z-10 sm:text-sm"
    />
    </div>
  );
}