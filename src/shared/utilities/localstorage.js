const StoreEntity = {
  Registration: 'registration',
  UserSession: 'user-session',
};

export const createUserEntry = (user) => {
  const allUsers = getAllUsers();

  allUsers.push(user);
  window.localStorage.setItem(StoreEntity.Registration, JSON.stringify(allUsers));
};

export const checkCredentialsMatch = (user) => {
  const allUsers = getAllUsers();

  return allUsers.some((entry) => (
    entry.email === user.email
    && entry.password === user.password
  ));
};

export const checkUserExists = (email) => {
  const allUsers = getAllUsers();

  return allUsers.some((user) => user.email === email);
};

const getAllUsers = () => JSON.parse(window.localStorage.getItem(StoreEntity.Registration)) || [];

export const checkBrowserStorageSupported = () => typeof (Storage) !== "undefined";

export const createUserSession = (email) => {
  window.localStorage.setItem(StoreEntity.UserSession, email);
};

export const getLoggedInUserSession = () => {
  return window.localStorage.getItem(StoreEntity.UserSession);
};

export const removeUserSesion = () => {
  window.localStorage.removeItem(StoreEntity.UserSession);
};
