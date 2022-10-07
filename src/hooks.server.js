export async function handle({ event, resolve }) {
  event.request.headers.set('authorization', `Bearer 1234`);
	return resolve(event);
}
