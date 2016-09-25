import fs from 'fs';
import path from 'path';

export const getDirectories = (base) => (
  fs.readdirSync(base).filter((file) => (
    fs.statSync(path.join(base, file)).isDirectory()
  ))
);
