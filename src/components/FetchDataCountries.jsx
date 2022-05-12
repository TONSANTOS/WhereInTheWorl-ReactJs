import React, { useEffect, useState } from 'react';

import SearchCountries from './SearchCountries';
import SelectFilter from './SelectFilter';

export default function FetchDataCountries() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["capital", "name"]);
    const [filterParam, setFilterParam] = useState(["All"])

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    // Essa função recebe os itens que buscamos no fetch e 
    // retorna todos os itens que correspondem a qualquer coisa 
    // em nosso array searchParam se o indexOF() for > -1.
    function search(items) {
        return items.filter((item) => {
            if (item.region == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]?.
                            toString()?.
                            toLowerCase()?.
                            indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]?.
                            toString()?.
                            toLowerCase()?.
                            indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="wrapper">
                <div className="search-wrapper">
                    <SearchCountries q={q} setQ={setQ} />
                    <SelectFilter setFilterParam={setFilterParam} />
                </div>
                <ul className="card-grid">
                    {search(items).map((item) => (
                        <li>
                            <article className="card" key={item.callingCodes}>
                                <div className="card-image">
                                    <img src={item.flag} alt={item.name} />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{item.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                            População: {" "}
                                            <span>{item.population}</span>
                                        </li>
                                        <li>
                                            Região <span>{item.region}</span>
                                        </li>
                                        <li>
                                            Capital: <span>{item.capital}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
