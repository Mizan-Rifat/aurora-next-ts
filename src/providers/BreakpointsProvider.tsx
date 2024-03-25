'use client';

import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Breakpoint, Theme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

interface BreakpointContextInterface {
  currentBreakpoint: Breakpoint;
  useUp: (key: Breakpoint | number) => boolean;
  useDown: (key: Breakpoint | number) => boolean;
  useOnly: (key: Breakpoint | number) => boolean;
  useBetween: (start: Breakpoint | number, end: Breakpoint | number) => boolean;
}

export const BreakpointContext = createContext({} as BreakpointContextInterface);

const BreakpointsProvider = ({ children }: PropsWithChildren) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs');
  const useUp = (key: Breakpoint | number) =>
    useMediaQuery<Theme>((theme) => theme.breakpoints.up(key));

  const useDown = (key: Breakpoint | number) =>
    useMediaQuery<Theme>((theme) => theme.breakpoints.down(key));

  const useOnly = (key: Breakpoint | number) =>
    useMediaQuery<Theme>((theme) => theme.breakpoints.only(key as Breakpoint));

  const useBetween = (start: Breakpoint | number, end: Breakpoint | number) =>
    useMediaQuery<Theme>((theme) => theme.breakpoints.between(start, end));

  const isXs = useBetween('xs', 'sm');
  const isSm = useBetween('sm', 'md');
  const isMd = useBetween('md', 'lg');
  const isLg = useBetween('lg', 'xl');
  const isXl = useUp('xl');

  useEffect(() => {
    if (isXs) {
      setCurrentBreakpoint('xs');
    }
    if (isSm) {
      setCurrentBreakpoint('sm');
    }
    if (isMd) {
      setCurrentBreakpoint('md');
    }
    if (isLg) {
      setCurrentBreakpoint('lg');
    }
    if (isXl) {
      setCurrentBreakpoint('xl');
    }
  }, [isXs, isSm, isMd, isLg, isXl]);

  return (
    <BreakpointContext.Provider value={{ currentBreakpoint, useUp, useDown, useOnly, useBetween }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoints = () => useContext(BreakpointContext);

export default BreakpointsProvider;
