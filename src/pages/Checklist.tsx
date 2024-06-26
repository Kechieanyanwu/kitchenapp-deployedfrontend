import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import AddItemButton from "../components/AddItemButton";
import { ChecklistTable } from "../components/ChecklistTable";

function Checklist() {
    return <div>
        <PageHeader title={"Checklist"} subtitle={"Create a Checklist so you don't miss a thing!"} />
          <div className="curved-section">
            <ChecklistTable/> 
            <AddItemButton />
        </div>
        <div className="footer-buttons">
            <NavBar />
        </div>
    </div>
}

export default Checklist;