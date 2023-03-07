import { mainAPI } from '@/api/main'
import { UsersRequestParams } from '@/api/main/routes/users/types/RequestParams'

const usersUrl = '/users'

export async function getAllUsers(params: UsersRequestParams) {
	const { data } = await mainAPI.get(usersUrl, params)

	return data
}
