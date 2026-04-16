const BASE = './util/', EXTENSION = '.js', FILES = [
    'constructorOf', 'getTypeOf'
].map(FILE_NAME => BASE + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
