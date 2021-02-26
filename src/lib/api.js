/**
 * Function for creating a fetch execution against reqres API with a configured POST object. It manages
 * posible anwswers an return an object for OK responses or an Error object for KO responses
 *
 * @param {string} email
 * @param {string} password
 * @public
 */
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

/**
 * Function for creating a fetch execution against reqres API with any HTTP request object. It supports
 * params by querystring or JSON bodies. It manages posible anwswers an return an object for OK responses or
 * an Error object for KO responses.
 *
 * @param {string} route Route that we want to request in Reqres API. It can contain url parameters
 * @param {string} token JWT token
 * @param {object} opts Must receive an HTTP Request Object compatible with fetch
 * @public
 */
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
