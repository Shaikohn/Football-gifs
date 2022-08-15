import React, { useContext } from "react"
import Gif from "components/Gif/Gif"
import GifsContext from "context/GifsContext"

export default function Details ( {params} ) {

    const {gifs} = useContext(GifsContext)
    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return (
        <Gif {...gif} />
    )
}