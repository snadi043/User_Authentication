import axios from 'axios';

const API_KEY = 'AIzaSyCYoCUYO3TGavCfKzmD61nCtj_MX84tfwQ';

async function authenticateUser(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

   // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    
    const response = await axios.post(url, 
    {
        email: email,
        password: password,
        returnSecureToken: true,
    });
    const token = response.data.idToken;
    // console.log(token);
    return token;
}

export function createUser(email, password){
   return authenticateUser('signUp', email, password);
}

export function loginUser(email, password){
    return authenticateUser('signInWithPassword', email, password);
}


// Refer to this firebase document on how to create the above functions, necessary changes in the url and HTTP API methods.

// https://firebase.google.com/docs/reference/rest/auth?_gl=1*1o3d91c*_up*MQ..*_ga*NjIyMzY3MDUyLjE3MzU4MzU3Mzg.*_ga_CW55HF8NVT*MTczNTgzNTczNy4xLjAuMTczNTgzNTczNy4wLjAuMA..