import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts/1"

// The following series of logic gets data from an API endpoint
axios.get(url)
    .then(res => {
        const post = res.data

        const id=post.userId
        const header=post.title
        const content=post.body

        console.log(`
            User Id is ${id}
            Title of post: ${header}
            The content inside the post is ${content}
        `)
    })