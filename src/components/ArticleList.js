import React from 'react'
import Article from "./Article"

export default function ArticleList(props) {

    const articles = props.posts.map((posts) => {
        return <Article key = {posts.id} title = {posts.title} date = {posts.date} preview = {posts.preview}/>
    })

    return (
        <div>
            <main>
                {articles}
            </main>
        </div>
    )
}
