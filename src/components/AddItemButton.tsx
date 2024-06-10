export default function AddItemButton() {
    return (
        <div className="addItemButton" onClick={()=> window.alert("do something")}> {/*add class of addItemButton for styling*/}
        <h5> + Add Item</h5>
        </div>
    )
}