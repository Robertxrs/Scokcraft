export interface Scooter {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  imagem: {
    src: string;
    alt: string;
  };
  path: string;
  button: string;
  classCss: string;
  listIcons: {
    icon: string;
    alt: string;
    subtitle: string;
  }[];
  storage:{
    stock:number,
    srcStock:string,
    srcDelivery:string,
    delivery:number
  }
}
