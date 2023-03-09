import { mainAPI } from '@/api/main'
import { UsersRequestParams } from '@/api/main/routes/users/types/RequestParams'
import { UsersResponse } from '@/api/main/routes/users/types/Responses'

const usersUrl = '/users'

export async function getAllUsers(params: UsersRequestParams) {
	const { data } = await mainAPI.get<UsersResponse>(usersUrl, params)

	return data
}
