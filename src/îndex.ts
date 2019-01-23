import { existsSync, readFileSync } from 'fs';
import * as ts from 'typescript';

// tslint:disable-next-line:no-magic-numbers
const fileName: string = 'F:\\Projekte\\ts-source-to-ast-converter\\src\\îndex.ts';

if (!fileName || !existsSync(fileName)) {
  process.exit(1);
}

const sourceFile = ts.createSourceFile(fileName, readFileSync(fileName).toString(), ts.ScriptTarget.ES2015, true);

// tslint:disable-next-line:no-console
console.log(JSON.stringify(sourceFile, (key, value) => {
  if ( key === 'parent') {
    return'__[CIRCULAR]__';
  } else {
    return value;
  }
}));

process.exit(0);
