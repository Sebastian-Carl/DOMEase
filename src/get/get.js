const BASE = './', PREFIX = 'get.', EXTENSION = '.js', FILES = [
    'constructor', 'typeOf'
].map(FILE_NAME => BASE + PREFIX + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
