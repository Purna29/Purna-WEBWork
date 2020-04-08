/* B"H
*/
const Users = [
    { Name: 'purna', Password: '2222', Email: 'purna@newpaltz.edu', userId: 0 },
    { Name: 'anila', Password: '1111', Email: 'anila@newpaltz.edu', userId: 1},
    
];

module.exports = {
    Login(email, password) {
    
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
    },
    Get(userId) {
        return Users[userId]
    }
}