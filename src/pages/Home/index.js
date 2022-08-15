import React, { useState } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import Loading from "components/Loading/Loading"
import useGifs from "hooks/useGifs"
import LazyTrending from "components/Trending/Trending"

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs();

    function handleSubmit(e) {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    function handleChange(e) {
        setKeyword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} placeholder="Search a GIF here" type='text' value={keyword} />
                <input type="submit" value="Submit" />
            </form>
            {
            loading
            ? <Loading />
            :   <div>
                    <h3>Last Search</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
            }
            <LazyTrending />
        </div>
    )
}