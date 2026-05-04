import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <div>
      <button onClick={() => setLike(!like)}>
        {like ? "Liked-❤️" : "Like-🤍"}
      </button>
    </div>
  );
}

export default LikeButton;