'use client';

import React from 'react';

import { ThemeContext } from '../ThemeContext';

export const useThemeContext = () => React.useContext(ThemeContext);
