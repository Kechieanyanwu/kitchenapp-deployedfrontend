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
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface NewUser {
  username: string;
  email: string;
}