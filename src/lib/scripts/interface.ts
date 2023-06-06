
export type User = {
    id: number | null,
    username: string | undefined,
    firstName: string | undefined,
    familyName: string | undefined,
    email: string | undefined,
    birthDate: Date | undefined | number,
    address: string,
    locality: string,
    zip: string,
    isNew: boolean | null
}

export type Destination = {
    id: number,
    name: string,
    address: string,
    locality: string,
    zip: string,
    latitude: number,
    longitude: number
}