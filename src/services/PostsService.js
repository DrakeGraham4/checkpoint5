import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService{


    async getAll(query = {}) {
        const res = await api.get('api/posts', { params: query })
        logger.log('post data', res.data)
        AppState.posts = res.data.posts
    }

    // async changePage() {
    //     const res = await api.get('api/posts')
    //     AppState.posts = res.data.posts
    //     AppState.olderPages = res.data.older
    //     AppState.newPages = res.data.newer
    // }

}

export const postsService = new PostsService()