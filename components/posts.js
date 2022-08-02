import { faker } from "@faker-js/faker";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./post";
import fakePost from "./fakepost";
import FakePost from "./fakepost";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [fakePosts, setFakePosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  useEffect(() => {
    const notRealPosts = [];

    function createRandomPost() {
      return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        userImg: faker.image.avatar(),
        img: faker.image.imageUrl(640, 480, "random", true),
        caption: faker.random.words(),
      };
    }

    Array.from({ length: 10 }).forEach(() => {
      notRealPosts.push(createRandomPost());
    });

    setFakePosts(notRealPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
      {fakePosts.map((post) => (
        <FakePost
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
