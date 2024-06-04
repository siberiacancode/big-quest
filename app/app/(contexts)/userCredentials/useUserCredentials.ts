import React from 'react';

import { UserCredentialsContext } from './UserCredentialsContext';

export const useUserCredentials = () => React.useContext(UserCredentialsContext);
