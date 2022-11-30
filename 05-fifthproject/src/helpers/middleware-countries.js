import { countries } from '../db/countries';

export const countriesValidate = (code) => {
  const countryCode = countries.find((country) => country.code === code);
  if (countryCode === undefined) return '';
  const { name, flag, shield } = countryCode;
  const country = { name, flag, shield };
  return country;
};
