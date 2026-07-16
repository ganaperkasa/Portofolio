declare const require: {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
    keys: () => string[];
    (id: string): unknown;
  };
};

const imageModules = require.context('../public', false, /\.(png|jpe?g|webp|gif|svg)$/);

const imageMap: Record<string, string> = {};

imageModules.keys().forEach((key: string) => {
  const moduleValue = imageModules(key) as { default?: { src?: string }; src?: string } | undefined;
  const src = moduleValue?.default?.src ?? moduleValue?.src ?? '';

  if (src) {
    imageMap[key.replace('./', '')] = src;
  }
});

export function getPublicImage(fileName: string): string {
  return imageMap[fileName] || '';
}

export function getPublicImages(fileNames: string[]): string[] {
  return fileNames.map((fileName) => getPublicImage(fileName));
}
