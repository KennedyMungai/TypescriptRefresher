import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts/1"

axios.get(url)
    .then(res => {
        const post = res.data

        const id=post.userID
        const header=post.header
        const content=post.content

        console.log(`
            User Id is ${id}
            Title of post: ${header}
            The content inside the post is ${content}
        `)
    })