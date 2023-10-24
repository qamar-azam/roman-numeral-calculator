function getRomanValue(value: number): string {
  const integerArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArray = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];

  // send Nula if value is 0
  if (value === 0) {
    return 'Nulla';
  }

  let roman: string = '';
  for (let i = 0; i < integerArray.length; i++) {
    while (integerArray[i] <= value) {
      roman += romanArray[i];
      value -= integerArray[i];
    }
  }
  return roman;
}

export { getRomanValue };
