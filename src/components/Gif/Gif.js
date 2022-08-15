import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export default function Gif( {id, title, url }) {
    return (
        <Link href={`/gif/${id}`} className="gif" key={id}>
            <h4>{title}</h4>
            <img alt={url} src={url} />
        </Link>
    )
}