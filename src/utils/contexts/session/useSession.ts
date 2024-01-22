import React from 'react';

import { SessionContext } from './SessionContext';

export const useThemeContext = () => React.useContext(SessionContext);
