export function syncLocalStorage(store) {
    const users = store.getState().users;
    console.log("users to be stored in localstorage -> ", users);
    localStorage.setItem("users", JSON.stringify(users));
}
