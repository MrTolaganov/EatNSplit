import { useState } from "react";
import Button from "../ui/Button";
import FormAdd from "./FormAdd";
import FormSplit from "./FormSplit";
import Friends from "./Friends";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const onShowForm = () => setShowForm(showForm => !showForm);

  const onAddFriend = friend => {
    setFriends(friends => [...friends, friend]);
    setShowForm(false);
  };

  const onSelectedFriend = friend => {
    setSelectedFriend(selectedFriend =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setShowForm(false);
  };

  const onSplitBill = value => {
    setFriends(friends =>
      friends.map(friend =>
        selectedFriend?.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
        />

        {showForm && <FormAdd onAddFriend={onAddFriend} />}
        <Button onClick={onShowForm}>{showForm ? "Close" : "Add"}</Button>
      </div>

      {selectedFriend && (
        <FormSplit selectedFriend={selectedFriend} onSplitBill={onSplitBill} />
      )}
    </div>
  );
}

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
