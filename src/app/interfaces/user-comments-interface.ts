interface UsersCommentArray {
    comments: UserComments[],
    total: number,
    skip: number,
    limit: number
}

interface UserComments {
    id: number,
    body: string,
    postId: number,
    user: {
        id: number,
        username: string
    }
}

export { UsersCommentArray, UserComments };