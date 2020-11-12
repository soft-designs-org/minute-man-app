export function PostData(type, userData) {
    //Replace BaseUrl with supplied api link
    let BaseUrl = "https://reqres.in/api/";

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                resolve(responseJSON);
            })
            .catch((error) => {
                console.log(error)
            })
    })
}