type TQr = {
  id: number,
  value: string
}

export type TServices = {
  title: string,
  description: string
}

export interface IShippingField {
  name: string,
  email: string,
  question: string
}

export interface IService {
  title: string,
  subtitle: string,
  services: string[],
  price: number,
  image: string
}

export type TCemetery = {
  id: number,
  title: string,
  images: string,
  data: TInfo[],
  info: TInfo[],
  description: string
};

export type TData = {
  title: string,
  value: string | number
}

export type TInfo = {
  title: string,
  value: string
}

export interface IHuman {
  id: number,
  title: string,
  images: string,
  data: TData[],
  cemetary: string,
};

export type TLink = {
  url: string,
  description: string
}

export interface IDetailHuman {
  id: number,
  name: string,
  image: string,
  data: TData[],
  info: TInfo[],
  awards?: TAward[],
  quote?: string,
  photos: string[],
  quoteFamily: TQuotesFamily[],
  address: TInfo[],
  links: TLink[],
  biography: string,
  test1?: {
    text: string,
    photos: TLink[],
  },
  test2?: {
    text: string,
    photo: TLink
  },
  test3?: {
    text: string,
    photo: TLink
  }
}

export type TQuotesFamily = {
  name: string,
  quote: string
}

export type TAward = {
  image?: string,
  title: string
}

export interface IInfo {
  qr: TQr[],
  services: TServices[]
}

export type TContact = {
  type: string,
  value: string
}

export type TSocial = {
  type: string,
  href: string
}

export interface INews {
  data: string,
  title: string,
  description: string,
  category: string
}

 export type TUser = {
  id: number;
  name: string;
  email: number;
 }
