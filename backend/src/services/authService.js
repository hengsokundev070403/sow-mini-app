import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const verifyCred = async (username, password) => {
    const user = await User.scope('withPassword').findOne({ where: { username } });
    if(!user)
    {
        throw new Error('invalid credentials');
    }

    const matched = await bcrypt.compare(password, user.password);

    if(!matched)
    {
        throw new Error('invalid credentials');
    }

    return {
    id: user.id,
    username: user.username
  };
}