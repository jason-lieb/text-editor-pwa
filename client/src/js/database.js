import { openDB } from 'idb'

const initdb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists')
        return
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true })
      console.log('jate database created')
    },
  })
}

export const putDb = async (content) => {
  const todosDb = await openDB('jate', 1)
  const tx = todosDb.transaction('jate', 'readwrite')
  const store = tx.objectStore('jate')
  const request = store.put({ id: 1, content: content })
  const result = await request
  return result
}

export const getDb = async () => {
  const todosDb = await openDB('jate', 1)
  const tx = todosDb.transaction('jate', 'readonly')
  const store = tx.objectStore('jate')
  const request = store.get(1)
  const result = await request
  return result
}

initdb()
