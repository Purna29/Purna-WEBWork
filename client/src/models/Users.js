/* B"H
*/
const Users = [
    { Name: 'Purna', Password: '2222', Email: 'purna@newpaltz.edu' },
    { Name: 'anila', Password: '1111', Email: 'anila@newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}