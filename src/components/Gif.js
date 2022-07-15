import React from "react";
import "./Gif.css";

export default function Gif( {id, title, url }) {
    return (
        <a href={`#${id}`} className="gif" key={id}>
            <h4>{title}</h4>
            <img alt={url} src={url} />
        </a>
    )
}