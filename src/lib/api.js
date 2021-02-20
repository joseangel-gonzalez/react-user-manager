export const loginApi = (email, password) =>
    new Promise((resolve, reject) =>
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                charset: 'UTF-8',
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (response.ok) {
                    return response
                        .json()
                        .then(body => resolve({ token: body.token }))
                        .catch(err => reject(err));
                }

                return response
                    .json()
                    .then(body => reject(new Error(`Request failed: ${body.error}`)))
                    .catch(err => reject(err));
            })
            .catch(err => reject(err))
    );

export const fetchApi = (route, token, opts) =>
    new Promise((resolve, reject) => {
        const url = new URL(`https://reqres.in/api/${route}`);
        opts.headers = opts.headers || {};
        opts.headers.Authorization = `Bearer ${token}`;

        if (opts.params) {
            if (opts.params instanceof Object || opts.params instanceof Array) {
                url.search = new URLSearchParams(opts.params);
            } else {
                url.search = new URLSearchParams(Object.assign({}, opts.params));
            }
        }

        return fetch(url, opts)
            .then(response => {
                if (response.ok) {
                    const content_type = response.headers.get('content-type');
                    if (content_type && content_type.indexOf('application/json' !== -1)) {
                        return response
                            .json()
                            .then(body => resolve(body))
                            .catch(err => reject(err));
                    }

                    // If the response is not a JSON we consider it an emtpy response
                    return resolve();
                }

                return response
                    .json()
                    .then(body => {
                        const error = new Error(`Request failed: ${body.error}`);
                        error.code = response.status;
                        reject(error);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });

export const logoutApi = (email, token) =>
    fetchApi('logout', token, {
        method: 'POST',
        headers: {
            charset: 'UTF-8',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email })
    });
