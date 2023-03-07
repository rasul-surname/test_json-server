import { PageResponse } from '@api/main/types/helpers'
import { User } from '@/api/main/types/User'

export type UsersResponse = PageResponse<User[]>
