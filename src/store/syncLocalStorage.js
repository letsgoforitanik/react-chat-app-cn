// This function subscribes to store update.
// Whenever state is updated, this function is invoked
// and it synchronizes the application state with localstorage
// so that changes are persistent.
export function syncLocalStorage(store) {
    const users = store.getState().users;
    console.log("users to be stored in localstorage -> ", users);
    localStorage.setItem("users", JSON.stringify(users));
}
