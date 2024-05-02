export interface ChecklistObject {
    id: number;
    item_name: string;
    quantity: number;
    purchased: boolean;
    category_id: number;
    user_id: number;
  }

export interface InventoryObject {
    id: number;
    item_name: string;
    quantity: number;
    category_id: number;
    user_id: number;
}

export interface TableHeaderProps {
  title: string;
  subtitle: string;
}

export interface ItemCardProps {
  itemName: string;
  subtitle: string;
  itemNumber: number;
}
