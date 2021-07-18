/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AdminDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAdminDispatch = () => useDispatch<AdminDispatch>();
export const useAdminSelector: TypedUseSelectorHook<RootState> = useSelector;
