'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { FormEvent, useState } from "react";


export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();


    const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    };


  return (
    <form onSubmit={handleSearch}>
        <input 
            type="text"
            value={search}
            placeholder="Enter the Search term"
            onChange={(event) => setSearch(event.target.value)}
        />
        <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
            Search
        </button>
    </form>
  )
}
