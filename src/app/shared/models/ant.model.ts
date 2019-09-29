import { Contact } from './contact.model';

export interface Ant extends Contact {
  bio: string;
  pic: string;
  hasSmartphone?: boolean;
}
