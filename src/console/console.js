const BASE = './', PREFIX = 'console.', EXTENSION = '.js', FILES = [
    'clear', 'debug', 'group', 'log', 'notice', 'report', 'warn'
].map(FILE_NAME => BASE + PREFIX + FILE_NAME + EXTENSION);

for (const FILE of FILES) {
    await import(FILE);
}
