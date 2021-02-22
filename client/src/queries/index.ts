enum FetchType {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

class Query {
	private queryType: FetchType;
	constructor(queryType: FetchType) {
		this.queryType = queryType;
	}

	getOptions(body: BodyInit): RequestInit {
		if (this.queryType === FetchType.GET) {
			return {
				method: 'GET',
				mode: 'cors',
				credentials: 'include',
			};
		}
		if (this.queryType === FetchType.POST) {
			return {
				method: 'POST',
				body: body,
				credentials: 'include',
			};
		}
		if (this.queryType === FetchType.PATCH) {
			return {
				method: 'PATCH',
				body: body,
				credentials: 'include',
			};
		}
		if (this.queryType === FetchType.DELETE) {
			return {
				method: 'DELETE',
				credentials: 'include',
			};
		}
		return {};
	}

	async executeQuery(url: string, body?: any) {
		try {
			const SERVER_URL = process.env.REACT_APP_SERVER_URL;
			const response: any = await fetch(
				`${SERVER_URL}${url}`,
				this.getOptions(body)
			);
			return response;
		} catch (err) {
			console.error(err);
			return err;
		}
	}
}

const getQuery = new Query(FetchType.GET);
const postQuery = new Query(FetchType.POST);
const patchQuery = new Query(FetchType.PATCH);
const deleteQuery = new Query(FetchType.DELETE);

export { getQuery, postQuery, patchQuery, deleteQuery };
