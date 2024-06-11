import React from 'react';

import { UserCredentialsContext } from './UserCredentialsContext';

export const useUserCredentialsContext = () => React.useContext(UserCredentialsContext);
