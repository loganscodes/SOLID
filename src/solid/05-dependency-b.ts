import { LocalDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private PostProvider: PostProvider ) {}

    async getPosts() {
        this.posts = await this.PostProvider.getPosts();

        return this.posts;
    }
}