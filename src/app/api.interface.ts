export interface Cinema {
    id: number,
    name: string
    city: string,
    zipcode: number,
    street: string,
    lat: number,
    lon: number,
    slug: string,
    url: string,
    ticketingUrl: string
}

export interface Response {
    // @ts-ignore
    status: string,
    content: Cinema[]
}
