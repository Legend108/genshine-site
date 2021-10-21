import fs from 'fs';

export default class Utils {
  constructor() { }

  file(res: any, fileName: string) {
    const value = fs.readFileSync(`${process.cwd()}/src/public/${fileName}`, 'utf-8');
    res.send(value);
  }
}
