import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService{


    async getAll(query = {}) {
        const res = await api.get('api/posts', { params: query })
        logger.log('post data', res.data)
        AppState.posts = res.data.posts
    }

}

export const postsService = new PostsService()