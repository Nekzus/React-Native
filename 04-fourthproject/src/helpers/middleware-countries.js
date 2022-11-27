import { countries } from '../db/countries';

export const countriesValidate = (code) => {
  const countryCode = countries.find((country) => country.code === code);
  if (countryCode === undefined) return '';
  const { name, flag } = countryCode;
  const country = { name, flag };
  return country;
};
