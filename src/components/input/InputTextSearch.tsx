/** @format */
"use client";

import React, { ChangeEvent, FC } from "react";
import { BsX } from "react-icons/bs";

type Props = {
  placeholder?: string;
  addClass?: string;
  onChange: (e: string) => void;
  setSearch: (e: string) => void;
  search: string | number;
};

const InputTextSearch: FC<Props> = ({
  placeholder,
  addClass,
  onChange,
  setSearch,
  search,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value); // Teruskan nilai input ke fungsi onChange yang diberikan sebagai prop
  };
  const cleanSearch = () => {
    setSearch("");
  };
  return (
    <div className={`relative ${addClass}`}>
      <input
        className="w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={search}
      />
      {search && (
        <BsX
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
          onClick={cleanSearch}
        />
      )}
    </div>
  );
};

export default InputTextSearch;
