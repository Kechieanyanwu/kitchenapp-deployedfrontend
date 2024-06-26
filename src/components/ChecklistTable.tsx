import { useState } from "react";
import { ChecklistObject } from "../utils/interfaces";
import { CheckSquare } from "react-bootstrap-icons";
import { CheckedButton } from "./CheckedButton";

export function ChecklistTable() {
  //will run function to get checklist items, then will set the state
  const checklistItems: Array<ChecklistObject> = [
    { id: 1, item_name: "Dishwashing tabs", quantity: 10, purchased: false, category_id: 3, user_id: 1 },
    { id: 2, item_name: "Water bottle", quantity: 13, purchased: false, category_id: 3, user_id: 1 },
    { id: 3, item_name: "Ipad", quantity: 1, purchased: false, category_id: 3, user_id: 1 },
    { id: 4, item_name: "Deloitte", quantity: 3, purchased: false, category_id: 3, user_id: 1 },
    { id: 5, item_name: "Detergent", quantity: 30, purchased: false, category_id: 3, user_id: 1 }
  ];

  const [items, setItems] = useState<Array<ChecklistObject>>(checklistItems);

  const checkItem = () => {
    //checks off an item in the backend
    // then will call setItems with the updated checklist 
    // do I want to just send to the backend, and just remove the item from the array on the frontend? 
    // like just delete it from the array, instead of waiting for data from the backend 
  };

  const tableItems = items.map((item) => {
    return (
      <tr className="checklist-item" key={item.id}>
        <td>{item.item_name}</td>
        <td>{item.quantity}</td>
        <td>{item.category_id}</td>
        <CheckedButton handleCheck={checkItem} />
        {/* could either do checkItem or just pass a setter */}
      </tr>
    );
  });

  return (
    <table className="checklistTable">
      <thead>
        <tr>
          <th className="itemNameCol">Item</th>
          <th>Quantity</th>
          <th>Category</th>
          <th className="checkedCol"><CheckSquare></CheckSquare></th>
        </tr>
      </thead>
      <tbody>
        {tableItems}
      </tbody>
    </table>
  );
}
