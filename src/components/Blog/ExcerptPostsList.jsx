import React from 'react';
import { NavLink } from 'react-router-dom';

import './Blog.css';

export default function ExcerptPostsList() {

    const postsExcerpt = [
        {
            title: "Installing Postgres",
            excerpt: "",
            path: "/installing-postgres-part-I"
        }
    ]

    return (
        <div className="ExcerptPost-container">
            <ul>
                {postsExcerpt.map(post => (
                    <li key={post.title}>
                        <h3>{post.title}</h3>
                        <article>post excerpt here</article>
                        <NavLink to={`/blog${post.path}`}>Full Post</NavLink>
                    </li>
                ))}

            </ul>

        </div>
    )
}


