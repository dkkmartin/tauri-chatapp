import { json, error, redirect } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

export async function GET({ locals }: RequestEvent) {
	const session = await locals.getSession()
	if (!session?.user) {
		throw redirect(302, '/login')
	}

	return redirect(302, '/chat')
}
