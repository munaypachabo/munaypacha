import { Contact } from './contact.model';
import { Geolocation } from './geolocation.model';

export interface Ant extends Contact, Geolocation {
    bio: string;
    pic: string;
}
