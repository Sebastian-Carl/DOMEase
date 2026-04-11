const BASE = "./", PREFIX = "internal.", EXTENSION = ".js", FILES = [
    'emit', 'global-registry'
].map(FILE_NAME => BASE + PREFIX + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
