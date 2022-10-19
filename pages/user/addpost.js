import { useState } from "react";

export default function AddPost() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!name || !avatar) return setError("All fields are required");

    let post = {
      name,
      avatar,
    };
    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    let data = await response.json();

    if (data.success) {
      setName("");
      setAvatar("");
      return setMessage(data.message);
    } else {
      return setError(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        {error ? (
          <div>
            <h3>{error}</h3>
          </div>
        ) : null}
        {message ? (
          <div>
            <h3 className={styles.message}>{message}</h3>
          </div>
        ) : null}
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="name"
          />
        </div>
        <div>
          <label>avatar</label>
          <textarea
            name="avatar"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
            placeholder="Post avatar"
          />
        </div>
        <div>
          <button type="submit">Add post</button>
        </div>
      </form>
    </div>
  );
}
