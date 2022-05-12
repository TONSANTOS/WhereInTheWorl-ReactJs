import React from 'react'

export default function SelectFilter({ setFilterParam }) {
    return (
        <div className="select">
            <select
                className="custom-select"
                aria-label="Filtrar países por região"
                style={{ cursor: "pointer" }}
                onChange={(e) => {
                    setFilterParam(e.target.value)
                }}
            >
                <option value="All">Filtrar países por região</option>
                <option value="Africa">África</option>
                <option value="Americas">América</option>
                <option value="Asia">Ásia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceânia</option>
            </select>
            <span className="focus"></span>
        </div>
    )
}
