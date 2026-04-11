const BASE = './guard/', PREFIX = 'guard.', EXTENSION = '.js', FILES = [
    'array', 'bool', 'error', 'function', 'isNil', 'node', 'number', 'object',
    'policy', 'string', 'undefined'
].map(FILE_NAME => BASE + PREFIX + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
