import { useQuery } from '@tanstack/react-query'
import { DolarApiFetcher } from '~/config/adapters/dolarApi.adapter'
import * as UseCases from '~/core/use-cases'

export const useQuotations = () => {
    const allQuotes = useQuery({
        queryKey: ['Get quotations'],
        queryFn: () => UseCases.getAllDollarQuotations(DolarApiFetcher())
    })

    return allQuotes
}
