//import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Post from "./Post.js";
import SideMenu from "./SideMenu.js";

const showCategoies = true;
function App() {
  const posts = [
    { id: "1", postName: "Post Title", postBody: "Post body asdfghzxcvbnmtyu" },
    { id: "2", postName: "Post Title", postBody: "Post body asdfghzxcvbnmtyu" },
    { id: "3", postName: "Post Title", postBody: "Post body asdfghzxcvbnmtyu" },
    { id: "4", postName: "Post Title", postBody: "Post body asdfghzxcvbnmtyu" },
    { id: "5", postName: "Post Title", postBody: "Post body asdfghzxcvbnmtyu" },
  ];
  const postsList = posts.map((post) => {
    return (
      <Post key={post.id} postName={post.postName} postBody={post.postBody} />
    );
  });
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* POSTS & SIDE MENU  CONTAINER */}
        <div style={{ display: "flex", width: "75%" }}>
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>{postsList}</div>
          {/* ==== POSTS CONTAINER==== */}
          {/* SIDMENU CONTAINER */}
          <div style={{ width: "30%" }}>
            <AppSideMenu />
          </div>
          {/* ====SIDMENU CONTAINER==== */}
        </div>
        {/*==== POSTS & SIDE MENU  CONTAINER ====*/}
      </div>
    </div>
  );
}

function AppSideMenu() {
  if (showCategoies) {
    return <SideMenu />;
  } else {
    return <div></div>;
  }
}

export default App;
