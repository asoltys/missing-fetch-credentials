export async function load({ cookies, request }) {
	cookies.set('token', '123', { path: '/' });
	let host = request.headers.get('host');
	let url = `http://${host}/api`;
	let r = await fetch(url, { headers: { test: "best" }});
	return {};
}
