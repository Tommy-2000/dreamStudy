import { onlineManager as reactQueryOnlineManager } from '@tanstack/react-query';
import {
    addNetworkStateListener,
    getNetworkStateAsync,
    NetworkState
} from 'expo-network';

export async function getNetworkStatus() {
  return await getNetworkStateAsync();
}

export const setNetworkListener = async (): Promise<NetworkState> => {
  let networkInitialised = false;

  reactQueryOnlineManager.setEventListener(setOnline => {
    addNetworkStateListener(networkState => {
      networkInitialised = true;
      setOnline(!!networkState.isConnected);
    });

    getNetworkStatus();
  });
  return getNetworkStatus();
};
