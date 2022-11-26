export const countriesValidate = (code) => {
  const countries = [
    { name: 'Alemania', code: 'GER' },
    { name: 'Arabia Saudita', code: 'KSA' },
    { name: 'Argentina', code: 'ARG' },
    { name: 'Australia', code: 'AUS' },
    { name: 'Bélgica', code: 'BEL' },
    { name: 'Brasil', code: 'BRA' },
    { name: 'Camerún', code: 'CMR' },
    { name: 'Canadá', code: 'CAN' },
    { name: 'Corea del Sur', code: 'KOR' },
    { name: 'Costa Rica', code: 'CRC' },
    { name: 'Croacia', code: 'CRO' },
    { name: 'Dinamarca', code: 'DEN' },
    { name: 'Ecuador', code: 'ECU' },
    { name: 'España', code: 'ESP' },
    { name: 'Estados Unidos', code: 'USA' },
    { name: 'Francia', code: 'FRA' },
    { name: 'Gales', code: 'WAL' },
    { name: 'Ghana', code: 'GHA' },
    { name: 'Inglaterra', code: 'ENG' },
    { name: 'Irán', code: 'IRN' },
    { name: 'Japón', code: 'JPN' },
    { name: 'Marruecos', code: 'MAR' },
    { name: 'México', code: 'MEX' },
    { name: 'Países Bajos', code: 'NED' },
    { name: 'Polonia', code: 'POL' },
    { name: 'Portugal', code: 'POR' },
    { name: 'Qatar', code: 'QAT' },
    { name: 'Senegal', code: 'SEN' },
    { name: 'Serbia', code: 'SRB' },
    { name: 'Suiza', code: 'SUI' },
    { name: 'Túnez', code: 'TUN' },
    { name: 'Uruguay', code: 'URU' },
  ];
  const countryCode = countries.find((country) => country.code === code);
  if (countryCode === undefined) return 'A definir';
  return countryCode.name;
};
