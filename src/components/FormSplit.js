import { useState } from "react";
import Button from "../ui/Button";

export default function FormSplit({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const name = selectedFriend?.name;
  const paidByFriend = bill ? bill - paidByUser : "";

  const onSetBill = e => setBill(+e.target.value);

  const onSetPaidByUser = e =>
    setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value);

  const onSetWhoIsPaying = e => setWhoIsPaying(e.target.value);

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={onSubmitHandler}>
      <h2>Split a bill with {name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" id="bill" value={bill} onChange={onSetBill} />

      <label htmlFor="bill1">🕴️ Your expense</label>
      <input
        type="text"
        id="bill1"
        value={paidByUser}
        onChange={onSetPaidByUser}
      />

      <label htmlFor="bill2">🧑‍🤝‍🧑 {name}'s expense</label>
      <input type="text" id="bill2" disabled value={paidByFriend} />

      <label htmlFor="opts">🤑 Who is paying the bill?</label>
      <select id="opts" value={whoIsPaying} onChange={onSetWhoIsPaying}>
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
