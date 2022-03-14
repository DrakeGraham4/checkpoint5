import { AppState } from "../AppState"
import { Billboards } from "../Model/Billboards"
import { api } from "./AxiosService"

class BillboardsService{

    async getBillboards() {
        const res = await api.get('api/ads')
        AppState.billboards = res.data.map(b => Billboards(b))
    }

}

export const billboardsService = new BillboardsService()