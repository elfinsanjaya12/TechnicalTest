export const setDenominator = (num) => {
  let nominal = Math.abs(num);
  const oneToEleven = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
  ];
  let text = '';
  if (nominal < 12) {
    text = ' ' + oneToEleven[nominal];
  } else if (nominal < 20) {
    text = setDenominator(nominal - 10) + ' belas';
  } else if (nominal < 100) {
    text =
      setDenominator(Math.floor(nominal / 10)) +
      ' puluh' +
      setDenominator(nominal % 10);
  } else if (nominal < 200) {
    text = ' seratus' + setDenominator(nominal - 100);
  } else if (nominal < 1000) {
    text =
      setDenominator(Math.floor(nominal / 100)) +
      ' ratus' +
      setDenominator(nominal % 100);
  } else if (nominal < 2000) {
    text = ' seribu' + setDenominator(nominal - 1000);
  } else if (nominal < 1000000) {
    text =
      setDenominator(Math.floor(nominal / 1000)) +
      ' ribu' +
      setDenominator(nominal % 1000);
  } else if (nominal < 1000000000) {
    text =
      setDenominator(Math.floor(nominal / 1000000)) +
      ' juta' +
      setDenominator(nominal % 1000000);
  } else if (nominal < 1000000000000) {
    text =
      setDenominator(Math.floor(nominal / 1000000000)) +
      ' milyar' +
      setDenominator(nominal, 1000000000);
  } else if (nominal < 1000000000000000) {
    text =
      setDenominator(Math.floor(nominal / 1000000000000)) +
      ' trilyun' +
      setDenominator(nominal, 1000000000000);
  }
  return text;
};
