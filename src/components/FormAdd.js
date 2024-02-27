import { useState } from "react";
import Button from "../ui/Button";

export default function FormAdd({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=");

  const onSetName = e => setName(e.target.value);
  const onSetImage = e => setImage(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    const id = image.slice().split("=").reverse().at(0);
    if (!name.trim() || !id) return;

    const newFriend = { name, image, id, balance: 0 };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=");
  };

  return (
    <form className="form-add-friend" onSubmit={onSubmit}>
      <label htmlFor="name">🧑‍🤝‍🧑 Friend name</label>
      <input type="text" id="name" value={name} onChange={onSetName} />

      <label htmlFor="image">🖼️ Image URL</label>
      <input type="text" id="image" value={image} onChange={onSetImage} />

      <Button>Add friend</Button>
    </form>
  );
}
