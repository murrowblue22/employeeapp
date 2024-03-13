export type Tdob = {
    date: string
    age: string
} 

export type Tid = {
    name: string
    value: string
}

export type Tcoordinates = {
    latitude: string 
    longitude: string
}

export type Tstreet = {
    number: number
    name: string
}

export type Ttimezone = {
    offset: string
    description: string
}

export type Tname = {
    title: string
    first: string 
    last: string
}
export type Tlocation = {
    city: string
    coordinates: Tcoordinates
    country: string
    postcode: number
    state: string
    street: Tstreet
    timezone: Ttimezone
}

export type Tpicture = {
    large: string 
    medium: string
    thumbnail: string 
}

export interface IPersonData {
    dob: Tdob
    email: string 
    location: Tlocation
    name: Tname
    phone: string
    picture: Tpicture
}