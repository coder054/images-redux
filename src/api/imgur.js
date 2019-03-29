import qs from "qs"
import axios from "axios"
import {config} from "./../config"

export default {
	login() {
		console.log('loginnnnnnnnnnnnnnn')
		const queryString = {
			client_id: config.clientId,
			response_type: "token",
		}

		window.location = `${config.rootUrl}/oauth2/authorize?${qs.stringify(
			queryString
		)}`
		//  window.location = `${config.rootUrl}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`
	},

	fetchImages(token) {
		return axios.get(`${config.rootUrl}/3/account/me/images`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	uploadImages(images, token) {
		const promises = Array.from(images).map(image => {
			const formData = new FormData()
			formData.append("image", image)
			return axios.post(`${config.rootUrl}/3/image`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		})

		return Promise.all(promises)
	},

	async deleteImage(imageHash, token) {
		return axios.delete(`${config.rootUrl}/3/image/${imageHash}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	async editTitleAndDesc(imageHash, title, description, token) {
		return axios.post(
			`${config.rootUrl}/3/image/${imageHash}`,
			{ title, description },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
	},
}
