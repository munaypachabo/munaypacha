interface Position {
  lat: string;
  lng: string;
}

export interface Contact {
  id: string;
  pic?: string;
  name: string;
  phone: string;
  cellphone: string;
  position: Position;
  data?: string;
}
