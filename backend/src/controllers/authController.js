import * as authService from '../services/authService.js';

export const login = async (request, reply) => {
    const {username, password} = request.body;
    
    try{
        const user = await authService.verifyCred(username, password);

        const token = request.server.jwt.sign({
            id: user.id, 
            username: user.username
        },{
            expiresIn: '10h'
        }); 
        return reply.code(200).send({ user, token });
    }catch (error) {
        if (error.message === 'invalid credentials') {
            return reply.code(401).send({ 
                message: 'Invalid email or password' 
            });
        }
        request.log.error(error);
        return reply.code(500).send({ message: 'Internal Server Error' });
    }
}