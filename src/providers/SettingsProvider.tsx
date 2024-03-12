'use client';

import { Config, initialConfig } from 'config';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { ACTIONTYPE, SET_CONFIG, settingsReducer } from 'reducers/SettingsReducer';
import { useBreakpoints } from './BreakpointsProvider';

interface SettingsContextInterFace {
  config: Config;
  configDispatch: Dispatch<ACTIONTYPE>;
  setConfig: (payload: Partial<Config>) => void;
  handleDrawerToggle: () => void;
  toggleNavbarCollapse: () => void;
}

export const SettingsContext = createContext({} as SettingsContextInterFace);

const SettingsProvider = ({ children }: PropsWithChildren) => {
  const { currentBreakpoint } = useBreakpoints();

  const configState: Config = {
    ...initialConfig
  };
  const [config, configDispatch] = useReducer(settingsReducer, configState);

  const setConfig = (payload: Partial<Config>) => {
    configDispatch({
      type: SET_CONFIG,
      payload
    });
  };

  const handleDrawerToggle = () => {
    setConfig({
      openNavbarDrawer: !config.openNavbarDrawer
    });
  };

  const toggleNavbarCollapse = () => {
    if (config.navbarVerticalCollapsed) {
      setConfig({
        navbarVerticalCollapsed: false,
        drawerWidth: 300
      });
    } else {
      setConfig({
        navbarVerticalCollapsed: true,
        drawerWidth: 136
      });
    }
  };

  useEffect(() => {
    if (currentBreakpoint === 'md') {
      setConfig({
        navbarVerticalCollapsed: true,
        drawerWidth: 136
      });
    } else {
      setConfig({
        navbarVerticalCollapsed: false,
        drawerWidth: 300
      });
    }
    if (currentBreakpoint === config.minimizedLayoutBreakpoint) {
      setConfig({
        openNavbarDrawer: false
      });
    }
  }, [currentBreakpoint]);

  return (
    <SettingsContext.Provider
      value={{
        config,
        configDispatch,
        setConfig,
        handleDrawerToggle,
        toggleNavbarCollapse
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);

export default SettingsProvider;
