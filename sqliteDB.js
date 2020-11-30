import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

let db;

const openDatabase = async (pathToDatabaseFile, databaseName = 'database') => {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite'))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + 'SQLite'
    );
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(pathToDatabaseFile).uri,
    FileSystem.documentDirectory + 'SQLite/' + databaseName + '.db'
  );
  db = SQLite.openDatabase(databaseName + '.db');
};

const executeSql = async (sql, params = []) => {
  return new Promise((resolve, reject) =>
    db.transaction((tx) => {
      tx.executeSql(
        sql,
        params,
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    })
  );
};

export default {
  openDatabase,
  executeSql,
};