import Friend from "./Friend";

export default function Friends({ friends, selectedFriend, onSelectedFriend }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
        />
      ))}
    </ul>
  );
}
