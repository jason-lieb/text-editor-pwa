import { openDB } from 'idb'

const initdb = async () =>
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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const todosDb = await openDB('jate', 1)
  // console.log(todosDb)
  const tx = todosDb.transaction('jate')
  // console.log(tx)
  const store = tx.objectStore('jate')
  // console.log(store)
  const request = store.put(content)
  // console.log(request)
  const result = await request
  console.log(result)
  return result
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const todosDb = await openDB('jate', 1)
  // console.log(todosDb)
  const tx = todosDb.transaction('jate', 'readonly')
  // console.log(tx)
  const store = tx.objectStore('jate')
  // console.log(store)
  const request = store.getAll()
  // console.log(request)
  const result = await request
  console.log(result)
  return result
}

initdb()
