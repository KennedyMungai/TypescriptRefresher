import axios from 'axios'

interface Post {
    userId:number
    title:string
    body:string
}

const url = "https://jsonplaceholder.typicode.com/posts/1"

// The following series of logic gets data from an API endpoint

// User Id is 1
// Title of post: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// The content inside the post is: quia et suscipit
//     suscipit recusandae consequuntur expedita et cum
//     reprehenderit molestiae ut ut quas totam
//     nostrum rerum est autem sunt rem eveniet architecto

axios.get(url)
    .then(res => {
        const post = res.data as Post

        const id=post.userId
        const header=post.title
        const content=post.body

        console.log(`
            User Id is ${id}
            Title of post: ${header}
            The content inside the post is: ${content}
        `)
    })