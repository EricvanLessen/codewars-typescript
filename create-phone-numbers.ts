function createPhoneNumber(n: number[]): string {
  const areaCode: string = n.slice(0, 3).join('');
  const firstPart: string = n.slice(3, 6).join('');
  const secondPart: string = n.slice(6).join('');

  const formattedNumber: string = `(${areaCode}) ${firstPart}-${secondPart}`;
  return formattedNumber;
}
