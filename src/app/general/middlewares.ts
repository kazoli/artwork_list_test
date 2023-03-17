// ~ 5 mbytes is the maximum size of local storage values
export const storageMaxLengthExceeded = (value: object) => JSON.stringify(value).length > 5000000;

// Set data into localstorage
export const setLocalStorage = (key: string, value: string | object | object[]) => {
  if (typeof value !== 'string') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

// Get data from localstorage
export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  } else {
    return '';
  }
};

// Scroll top
export const scrollTop = (behavior: 'auto' | 'smooth' = 'auto') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
};

// Check an array contains an element
export const arrayIncludes = (
  array: { [key: string]: string | number | boolean }[],
  key: string,
  value: string | number | boolean,
) => array.find((element) => String(element[key]) === String(value));
