import { Id } from '@/api/main/types/Id'

export interface User extends Id {
	name: string
	description: string
	src: string
}
