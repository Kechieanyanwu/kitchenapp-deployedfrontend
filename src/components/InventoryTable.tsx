import { useEffect, useState } from "react";
import { InventoryObject } from "../utils/interfaces";

export default function InventoryTable() {
  //will run function to get checklist items, then will set the state
  // const inventoryItems: Array<InventoryObject> = [
  //   { id: 1, item_name: "Dishwashing tabs", quantity: 10, category_id: 3, user_id: 1 },
  //   { id: 2, item_name: "Water bottle", quantity: 13, category_id: 3, user_id: 1 },
  //   { id: 3, item_name: "Ipad", quantity: 1, category_id: 3, user_id: 1 },
  //   { id: 4, item_name: "Deloitte", quantity: 3, category_id: 3, user_id: 1 },
  //   { id: 5, item_name: "Detergent", quantity: 30, category_id: 3, user_id: 1 }
  // ];

  // const [items, setItems] = useState(inventoryItems);
  const [items, setItems] = useState<Array<InventoryObject>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { //code duplication. Could refactor into a helper function
    const fetchInventoryItems = async () => {
      try {
        const authToken = localStorage.getItem('auth_token');
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/inventory`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${authToken}`
          },
          credentials: 'include' // Set to 'same-origin' or 'include' as needed
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error:any) { //is this right?
        setError(error.message);
      } finally {
        setLoading(false); //might be able to use this for making the effect remain the same, e.g. if setloading is true / false. Hmm
      }
    };

    fetchInventoryItems();
  }, []);


  const checkItem = () => {
    //checks off an item in the backend
    // then will call setItems with the updated checklist 
    // do I want to just send to the backend, and just remove the item from the array on the frontend? 
    // like just delete it from the array, instead of waiting for data from the backend 
  };

  const tableItems = items.map((item) => {
    return (
      <tr className="inventory-item" key={item.id}>
        <td>{item.item_name}</td>
        <td>{item.quantity}</td>
        <td>{item.category_id}</td>
      </tr>
    );
  });

  return (
    <table className="inventoryTable">
      <thead>
        <tr>
          <th className="itemNameCol">Item</th>
          <th>Quantity</th>
          <th className="categoryCol">Category</th>
        </tr>
      </thead>
      <tbody>
        {tableItems}
      </tbody>
    </table>
  );
}
