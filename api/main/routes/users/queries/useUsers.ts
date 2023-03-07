import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { ErrorResponse } from '../../../types/helpers'
import { UsersKeys, usersKeys } from '@/api/main/routes/users/queryKeys'
import { UsersRequestParams } from '@/api/main/routes/users/types/RequestParams'
import { UsersResponse } from '@/api/main/routes/users/types/Responses'

export type UseUsersReturnData = UsersResponse
export type UseUsersOptions<T> = UseQueryOptions<UseUsersReturnData, ErrorResponse, T, UsersKeys['all']['queryKey']>

export function useUsers<T = UseUsersReturnData>(params: UsersRequestParams,options?: UseUsersOptions<T>) {
	return useQuery({
		...usersKeys.all(params),
		...options,
	})
}
