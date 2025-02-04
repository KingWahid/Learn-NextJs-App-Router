import React from 'react'

type PageType = {
    params: {
        searchTerm: string;
    }
}

type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ];
};

async function search(searchTerm: string){
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );

    throw new Error("Whoops smothing broke");
    const data: SearchResult = await res.json();
    return data;
}

 async function SearchResults({params : {searchTerm}}: PageType) {
    const searchResults = await search(searchTerm)
  return (
    <div>
        <p className='text-gray-500 text-sm'>You search for: {searchTerm}</p>

            <ol className='space-y-5 p-5'>
                {searchResults.organic_results.map((result) => (
                    <li key={result.position} className="list-decimal">
                        <p className='font-bold'>{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
    </div>
    
  )
}

export default SearchResults;