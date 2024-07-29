import { PostService } from './05-dependency-b';
import { JsonDataBaseService, JsonPostAPI, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const provider = new JsonPostAPI()

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();