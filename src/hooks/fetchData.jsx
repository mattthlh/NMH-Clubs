import clubData from '../assets/example-clubs.json'

const activeClubData = clubData.filter((item) => {
	return item.isActive
})
const getAllClubData = () => {
	return activeClubData
}

const getClubById = (index) => {
	return clubData
}

export { getAllClubData, getClubById }
