type KeyValueObject = { [key: string]: number };

const sortObjectByValue = (obj: KeyValueObject, order: 'asc' | 'desc' = 'asc'): KeyValueObject =>  {
  const entries = Object.entries(obj);

  entries.sort((a, b) => {
    const valueA = a[1];
    const valueB = b[1];

    if (order === 'asc') {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  return Object.fromEntries(entries);
};

export default sortObjectByValue;
