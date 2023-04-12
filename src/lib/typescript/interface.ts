
export type User = {
    id: null | number,
    username: string | undefined,
    firstName: string | undefined,
    familyName: string | undefined,
    email: string | undefined,
    birthDate: Date | undefined | number,
    address: string,
    locality: string,
    zip: string
}