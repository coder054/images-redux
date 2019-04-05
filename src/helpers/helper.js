import moment from "moment"

export const getdateAndTimeFromDateString = dateString => {
	// let diffInHour = moment().diff(dateString, "hour")
	// let result
	// if (diffInHour >= 24) {
	//  result = moment(dateString).format("D MMMM YYYY [at] H:mm")
	// } else {
	//  result = moment(dateString).fromNow()
	// }
	// return result
	return moment(dateString * 1000).fromNow()
}
