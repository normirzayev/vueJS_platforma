export const getToken = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.log("token olishda muammo");
    return null;
  }
};

export const setToken = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    console.log("token qo'yishda muammo bor");
    return null;
  }
};

export const removeToken = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.log("token oshirishda muammo bor");
    return null;
  }
};
