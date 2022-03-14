import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService{


    async getAll(query = {}) {
        try {
            const res = await api.get('api/posts', { params: query })
            logger.log('post data', res.data)
            AppState.posts = res.data.posts
            AppState.newPage = res.data.newer
            AppState.olderPage = res.data.older
            
        } catch (error) {
            logger.log(error)
        }
    }

    

    async createPost(postData) {
        const res = await api.post('api/posts', postData)
        logger.log('post data', res.data)
        AppState.posts.unshift(res.data)
    }

    async likePost(id) {
        await api.post(`api/posts/${id}/like`)
        this.getAll()
    }

     async remove(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
    }
    
    async changePage(page) {
        const res = await api.get(page)
        logger.log(res.data, 'RES')
        AppState.posts = res.data.posts
        AppState.newPage = res.data.newer
        AppState.olderPage = res.data.older
    }


}

export const postsService = new PostsService()