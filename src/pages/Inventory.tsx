import PageHeader from "../components/PageHeader";
import AddItemButton from "../components/AddItemButton";
import NavBar from "../components/NavBar";
import InventoryTable from "../components/InventoryTable";

export default function Inventory() {
    return <div>
        <PageHeader title={"Inventory"} subtitle={"Manage your inventory!"} />
          <div className="curved-section">
            <InventoryTable/> 
            <AddItemButton />
        </div>
        <div className="footer-buttons">
            <NavBar />
        </div>
    </div>
}