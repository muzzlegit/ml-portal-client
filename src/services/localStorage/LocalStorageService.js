export default class LocalStorageService {
  static setItem = (key, value) => {
    try {
      // const clone = deepCopy(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Ошибка записи в локальное хранилище", error);
    }
  };

  static getItem(key) {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return [];
      // const clone = deepCopy(item);
      return JSON.parse(item);
    } catch (error) {
      console.log("Ошибка чтения локального хранилица", error);
    }
  }

  // const removeItem = () => {
  //   try {
  //     window.localStorage.removeItem(key);
  //   } catch (error) {
  //     console.log("Ошибка удаления из локального хранилища", error);
  //   }
  // };
}
