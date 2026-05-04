import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <div>
      <button onClick={() => setLike(!like)}>
        {like ? "Like-RedHeart" : "Like-WhiteHeart"}
      </button>
    </div>
  );
}

export default LikeButton;