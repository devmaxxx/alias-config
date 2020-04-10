export const mockAliasConfig = {
  dirname: '.',
  baseUrl: './src',
  paths: {
    '@api/*': ['api/*'],
    '@assets': ['assets'],
    '@assets/*': ['assets/*'],
    '@images': ['assets/images'],
    '@images/*': ['assets/images/*'],
    '@pages': ['pages'],
    '@pages/*': ['pages/*'],
    '@types': ['types'],
    '@types/*': ['types/*'],
    '@components': ['components'],
    '@components/*': ['components/*'],
    '@features/*': ['features/*'],
    '@lib/*': ['lib/*'],
    '@root/*': ['./*'],
  },
};

export const mockWebpackAliases = {
  '@api': '/src/api',
  '@assets': '/src/assets',
  '@images': '/src/assets/images',
  '@pages': '/src/pages',
  '@types': '/src/types',
  '@components': '/src/components',
  '@features': '/src/features',
  '@lib': '/src/lib',
  '@root': '/src',
};

export const mockJestAliases = {
  '^@api/(.*)': '<rootDir>/src/api/$1',
  '^@assets': '<rootDir>/src/assets',
  '^@assets/(.*)': '<rootDir>/src/assets/$1',
  '^@images': '<rootDir>/src/assets/images',
  '^@images/(.*)': '<rootDir>/src/assets/images/$1',
  '^@pages': '<rootDir>/src/pages',
  '^@pages/(.*)': '<rootDir>/src/pages/$1',
  '^@types': '<rootDir>/src/types',
  '^@types/(.*)': '<rootDir>/src/types/$1',
  '^@components': '<rootDir>/src/components',
  '^@components/(.*)': '<rootDir>/src/components/$1',
  '^@features/(.*)': '<rootDir>/src/features/$1',
  '^@lib/(.*)': '<rootDir>/src/lib/$1',
  '^@root/(.*)': '<rootDir>/src/$1',
};
