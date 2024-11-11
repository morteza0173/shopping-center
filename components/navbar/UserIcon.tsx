function UserIcon({ image }: { image: string }) {
  return (
    <div>
      {image ? (
        <img src={image} className="h-6 w-6 rounded-full object-cover mr-6" />
      ) : null}
    </div>
  );
}
export default UserIcon;
