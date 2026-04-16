const BASE = './', EXTENSION = '.js', FILES = [
    'buffer', 'init', 'service'
].map(FILE_NAME => BASE + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
