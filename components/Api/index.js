const Request = async(data,
                    method = 'POST',
                    url = 'https://hotels-bergen.herokuapp.com') =>
                    
{
    const headers = {'Content-Type': 'application/json'};
    let init = {
        method: method,
        headers: headers
    }
    if (method === 'POST') {
        init = {
            ...init,
            body: JSON.stringify(data),
        }
    }
    return await fetch(`${url}`, init);
};

export default Request;