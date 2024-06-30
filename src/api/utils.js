export const request = (url, option) => {
  let token = localStorage.getItem('access_token');
  let option1 = {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    ...option,
    // credentials: "include"
  }

  return fetch(url, option1)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      if (response.status === 400) {
        return response.json();
      }
      if (response.status === 401) {
        localStorage.removeItem('access_token');
        window.open('/', '_self');
      }
    })
}

export const request1 = (url, option) => {
  let token = localStorage.getItem('access_token');
  let option1 = {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
    ...option,
    // credentials: "include"
  }

  return fetch(url, option1)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      if (response.status === 400) {
        return response.json();
      }
      if (response.status === 401) {
        localStorage.removeItem('access_token');
        window.open('/', '_self');
      }
    })
}

export const request3 = (url, option) => {
  let option1 = {
    "Content-Type": "application/json",
    Origin: "https://thedogepoundnft.com",
    "Access-Control-Request-Method": "GET",
    ...option,
  }

  return fetch(url, option1)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      if (response.status === 400) {
        return response.json();
      }
    })
}