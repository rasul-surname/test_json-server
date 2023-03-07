export interface ErrorResponse {
	error: boolean
	reason: string
	status: number
}

export interface PageResponse<T> {
	success: boolean
	data: PageResponseData<T>
}
