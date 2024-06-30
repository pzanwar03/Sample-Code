const baseUrl = `${process.env.REACT_APP_BASE_URL}/api`;

export const auth_api = {
  register: `${baseUrl}/users/create-user`,
  login: `${baseUrl}/users/login`,
}

export const doge_api = {
  saveProfile: `${baseUrl}/users`,
  saveAvatar: `${baseUrl}/users/avatar-upload`,

  getDogeInfo: `${baseUrl}/doges`,
  getPuppyInfo: `${baseUrl}/puppies`,

  breedService: `${baseUrl}/breed/breedingServices`,
  breedRequest: `${baseUrl}/breed/breedingRequests`,
  breedRequestPrivate: `${baseUrl}/breed/breedingRequests/private`,
}

export const rank_api = {
  getRank: 'https://pws.ovr.ai/collectible/ranks?collectible_id=b900e8be-1a30-11ec-b4a4-95e100f927f0'
}