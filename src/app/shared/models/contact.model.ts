interface Position {
  lat: string;
  lng: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  cellphone: string;
  position: Position;
}
