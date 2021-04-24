import { writable } from 'svelte/store';

// directory that is used internally, an array of indexes
export const _dir = writable([]);

// directory to be displayed to the user, a list of strings of the current directory names in order
export const strPath = writable(['~']);