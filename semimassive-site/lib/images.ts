export const imageSizes = {
  hero: { width: 1920, height: 1080 },
  thumbnail: { width: 800, height: 600 },
  figure: { width: 1200, height: 800 },
};

export const aspectRatios = {
  wide: '16/9',
  standard: '4/3',
  square: '1/1',
  portrait: '3/4',
};

export function getImageDimensions(
  type: keyof typeof imageSizes
): { width: number; height: number } {
  return imageSizes[type];
}

export function getAspectRatio(type: keyof typeof aspectRatios): string {
  return aspectRatios[type];
}
