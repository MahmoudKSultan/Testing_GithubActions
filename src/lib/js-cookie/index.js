import Cookies from "js-cookie";

export const setCookie = (
  name,
  value,
  options
) => {
  return Cookies.set(name, JSON.stringify(value), options);
};

export const getCookie = (name) =>
  JSON.parse(Cookies.get(name) || '""');

export const removeCookie = (
  name,
  options
) => {
  Cookies.remove(name, options);
};
