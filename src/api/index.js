import { request, request1, request3 } from './utils';
import { auth_api, doge_api, rank_api } from './constant';

export function register(address, sign, deadline) {
    const option = {
        method: 'POST',
        body: JSON.stringify({
            address,
            sign,
            deadline
        })
    }
    return request(auth_api.register, option);
}

export function login(address, sign, deadline) {
    const option = {
        method: 'POST',
        body: JSON.stringify({
            address,
            sign,
            deadline
        })
    }
    return request(auth_api.login, option);
}

export function saveProfile(email, twitter, username, discord, description) {
    const option = {
        method: 'PUT',
        body: JSON.stringify({
            email,
            twitter,
            discord,
            username,
            description
        })
    }
    return request(doge_api.saveProfile, option);
}

export function saveAvatar(avatar) {
    let form = new FormData();
    form.append('avatar', avatar);
    const option = {
        method: 'POST',
        body: form
    }
    return request1(doge_api.saveAvatar, option);
}

export function getDogeInfo(ids, limit) {
    const option = {
        method: 'GET'
    }
    return request(`${doge_api.getDogeInfo}?ids=${ids}&limit=${limit}`, option);
}

export function getDoges(offset, limit, Background, Earring, Eyewear, Hats, Clothing, Mouth, Eyes, Fur, Gender, Puppy) {
    let minted = undefined;
    if (Puppy === 'Minted') {
        minted = true;
    } else if (Puppy === "Not Minted") {
        minted = false;
    }

    const option = {
        method: 'GET'
    }

    if (minted === undefined)
        return request(`${doge_api.getDogeInfo}?offset=${offset}&limit=${limit}&Background=${Background}&Earring=${Earring}&Eyewear=${Eyewear}&Hats=${Hats}&Clothing=${Clothing}&Mouth=${Mouth}&Eyes=${Eyes}&Fur=${Fur}&gender=${Gender}`, option);
    else
        return request(`${doge_api.getDogeInfo}?offset=${offset}&limit=${limit}&Background=${Background}&Earring=${Earring}&Eyewear=${Eyewear}&Hats=${Hats}&Clothing=${Clothing}&Mouth=${Mouth}&Eyes=${Eyes}&Fur=${Fur}&gender=${Gender}&minted=${minted}`, option);
}

export function getPuppyInfo(ids, limit) {
    const option = {
        method: 'GET'
    }
    return request(`${doge_api.getPuppyInfo}?ids=${ids}&limit=${limit}`, option);
}

export function getOpenedPuppyInfo(offset, limit, Background, Tail, Eyewear, Hats, Clothing, Mouth, Eyes, Fur) {
    const option = {
        method: 'GET'
    }

    return request(`${doge_api.getPuppyInfo}?offset=${offset}&limit=${limit}&minted=${true}&Background=${Background}&Tail=${Tail}&Eyewear=${Eyewear}&Hats=${Hats}&Clothing=${Clothing}&Mouth=${Mouth}&Eyes=${Eyes}&Fur=${Fur}`, option);
}

export function setPuppyInfo(ids) {
    const option = {
        method: 'PUT',
        body: JSON.stringify({
            ids,
        })
    }
    return request(`${doge_api.getPuppyInfo}`, option);
}

export function getPuppies(offset, limit, minted) {
    const option = {
        method: 'GET'
    }
    return request(`${doge_api.getPuppyInfo}?offset=${offset}&limit=${limit}&minted=${minted}`, option);
}

export function getBreedingList() {
    const option = {
        method: 'GET'
    }
    return request(`${doge_api.breedService}`, option);
}

export function createBreedService(sign, dogeId, price, endDate) {
    const option = {
        method: 'POST',
        body: JSON.stringify({
            sign,
            dogeId,
            price,
            endDate
        })
    }
    return request(`${doge_api.breedService}`, option);
}

export function updateBreedService(sign, id, price, endDate, cancel = false) {
    const option = {
        method: 'PUT',
        body: JSON.stringify({
            sign,
            id,
            price,
            endDate,
            cancel
        })
    }

    return request(`${doge_api.breedService}`, option);
}

export function createBreedRequest(sign, doggoId, serviceId) {
    const option = {
        method: 'POST',
        body: JSON.stringify({
            sign,
            doggoId,
            serviceId
        })
    }
    return request(`${doge_api.breedRequest}`, option);
}

export function createBreedRequestPrivate(sign, dogeId, doggoId) {
    const option = {
        method: 'POST',
        body: JSON.stringify({
            sign,
            dogeId,
            doggoId
        })
    }
    return request(`${doge_api.breedRequestPrivate}`, option);
}

export function getRank() {
    const option = {
        method: 'GET'
    }
    return request3(`${rank_api.getRank}`, option);
}