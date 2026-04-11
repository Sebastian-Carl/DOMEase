const BASE = './error/', PREFIX = 'error.', EXTENSION = '.js', FILES = [
    'argument', 'custom', 'duplicate_entry', 'empty_data', 'invalid_node', 'missing_argument',
    'no_such_key', 'unknown_option'
].map(FILE_NAME => BASE + PREFIX + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
