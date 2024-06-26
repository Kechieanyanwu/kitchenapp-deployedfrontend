import { Form } from "react-bootstrap";

export function CheckedButton(handleCheck: any) {
  //will add onClick, run the function 
  // onCheck, I want it to send to the backend that it has been purchased
  return (
    <td align="center"><Form.Check aria-label='option 1' onChange={handleCheck} /></td>
  );
}
