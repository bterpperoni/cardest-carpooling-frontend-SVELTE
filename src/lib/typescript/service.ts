
export function parseISODate(dateString: string): Date | number {
    const dateParts = dateString.split('- || /');
    const dateToIso = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
    const dateToUnix = dateToIso.getTime();
    return dateToUnix;
  }