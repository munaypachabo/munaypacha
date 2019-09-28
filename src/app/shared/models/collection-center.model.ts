import { Geolocation } from './geolocation.model';

export interface CollectionCenter extends Geolocation {
  id: string;
  name: string;
  phone: string;
  cellphone: string;
}
