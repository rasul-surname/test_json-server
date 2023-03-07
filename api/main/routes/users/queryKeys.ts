import { createQueryKeys, inferQueryKeys } from '@lukemorales/query-key-factory'
import { getAllUsers } from '@/api/main/routes/users/index'
import { UsersRequestParams } from '@/api/main/routes/users/types/RequestParams'

export const usersKeys = createQueryKeys('users', {
	all: (params: UsersRequestParams) => ({
		queryKey: [params],
		queryFn: () => getAllUsers(params),
	}),
})

export type UsersKeys = inferQueryKeys<typeof usersKeys>
