import React from 'react'

export default function SearchCountries({ q, setQ }) {
    return (
        <>
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Procure pelo nome do país ou capital"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <span className="sr-only">Pesquise países aqui</span>
            </label>
        </>
    )
}
