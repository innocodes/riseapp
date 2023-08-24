import {Platform} from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  DMSans: Platform.select({
    ios: 'DM Sans', // The font family name
    android: 'DM-Sans', // The file name
  }),
  SpaceGrotesk: Platform.select({
    ios: 'Space Grotesk', // The font family name
    android: 'Space-Grotesk', // The file name
  }),
};
