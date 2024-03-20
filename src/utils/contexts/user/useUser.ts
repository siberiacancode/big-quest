import React from 'react';

import { UserContext } from './UserContext';

export const useUser = () => React.useContext(UserContext);
