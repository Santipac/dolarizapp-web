import { AxiosAdapter } from "./http/axios.adapter";


export const DolarApiFetcher = (params?: Record<string, unknown>) => new AxiosAdapter({
    baseUrl: "https://dolarapi.com",
    ...params,
})
