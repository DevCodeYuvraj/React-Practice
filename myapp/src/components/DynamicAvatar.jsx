
export function DynamicAvatar({ image }) {
  return (
    <div className="picture">
      <img
        src={image}
        alt="avatar"
      />
    </div>
  );
}