export function syncLocalStorage(store) {
    console.log("sync localstorage called");
    localStorage.removeItem("users");
    const users = store.getState().users;
    localStorage.setItem("users", JSON.stringify(users));
}
