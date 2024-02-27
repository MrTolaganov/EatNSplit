import Button from "../ui/Button";

export default function Friend({ friend, selectedFriend, onSelectedFriend }) {
  const { id, image, name, balance } = friend;
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owned you ${balance}
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owned {name} ${Math.abs(balance)}
        </p>
      )}

      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
