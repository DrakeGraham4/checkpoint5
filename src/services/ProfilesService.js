import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfilesService{
    async getProfile(id) {
        const res = await api.get('api/profiles/' + id)
        logger.log('[get profile info]', res.data)
        AppState.profile = res.data
    }

    async getMyProfile() {
        const res = await api.get('api/profiles/622e705dd16b766ab3deada2')
        logger.log(res.data)
        AppState.profile = res.data
    }

}

export const profilesService = new ProfilesService()

