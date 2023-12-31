interface Location {
  latitude: number;
  longitude: number;
}

interface ImageDetails {
  url: string;
  width: number;
  height: number;
  isFavorite: boolean;
  hidden: boolean;
  orientation: 'up' | 'down' | 'left' | 'right'; // Add more as needed
}

interface iOSPhoto {
  localIdentifier: string;
  creationDate: string;
  modificationDate: string;
  assetType: 'image' | 'video';
  duration: number;
  burstIdentifier?: string;
  sourceType: 'camera' | 'screenshot' | 'screen recording'; // Add more as needed
  mediaSubtypes: string[]; // Array of subtypes
  isHidden: boolean;
  isCloudShared: boolean;
  location: Location;
  image: ImageDetails;
}
