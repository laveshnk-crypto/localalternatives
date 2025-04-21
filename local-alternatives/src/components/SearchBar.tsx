'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query == '')
            return;
        router.push(`/search/${query}`);
    } // Change this later to core functionality

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                className={"flex items-center bg-rose-300 rounded-full shadow-md px-4 py-2 w-80 lg:w-200 lg:mt-10 max-w-md"}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} // update the text
                    placeholder="Search..."
                    className="outline-none focus:outline-none font-baskerville max-w-md flex-grow"> 
                </input>
                <button 
                    type="submit" 
                    className="p-0 m-0 border-none bg-transparent">
                    <Image 
                        alt="search" 
                        src={"/svgs/searchAnimateSVG.svg"} 
                        width={30} 
                        height={30} 
                        className="transform scale-x-[-1]" // Flip the image horizontally
                    />
                </button>
            </form>
        </div>
    )
}
