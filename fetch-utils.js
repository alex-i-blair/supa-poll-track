const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4Mjc1NywiZXhwIjoxOTU1MjU4NzU3fQ.zbluL6jh1IcvD22261sa-mOS3jOgUIe4vSYczNJ3Tnc';
const SUPABASE_URL = 'https://khtymwsyesxbjqayhmej.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function redirectToPolls() {
    if (await getUser()) {
        location.replace('../polls');
    }
}
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}
export async function loginUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function getUser() {
    return client.auth.session();
}