export interface MenuItem {
  name: string;
  price: string;
  image: string;
}

export interface BulkItem extends MenuItem {
  qty: number;
}

export interface LiveOrder {
  id: number;
  name: string | undefined;
  time: string;
  closing: boolean;
}
