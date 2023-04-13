import { writable} from "svelte/store";

export const showModal = writable(false);
export const layout = writable('top');

export const carousel = writable(false);
export const hero = writable(false);
export const message = writable('');

export const primaryColor = writable('#242424');
export const secondaryColor = writable('#FFFFFF');
export const textColor = writable('#FFFFFF');

export const authToken = writable(undefined);