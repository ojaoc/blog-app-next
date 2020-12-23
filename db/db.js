import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

// Write Todos as default
db.defaults({ posts: [] }).write();

export default db;
