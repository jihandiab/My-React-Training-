import TagBtn from "./TagBtn.js";

export default function SideMenu() {
  const categories = [
    {
      uniqeId: "1",
      title: "آخر المقالات",
      children: (
        <div>
          <span>😄 😏 😸</span>
        </div>
      ),
    },
    {
      uniqeId: "2",
      title: "الأكثر قراءة",
      children: (
        <div>
          <img
            style={{ width: "100px" }}
            src="https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg?w=200&h=200&c=crop"
            alt="tree"
          />
        </div>
      ),
    },
    {
      uniqeId: "3",
      title: "المميزة",
      children: (
        <div>
          <h2>Click Me</h2>
          <span>👍</span>
        </div>
      ),
    },
    { uniqeId: "4", title: "مقالات الأسبوع", children: "" },
  ];
  const categoriesList = categories.map((category) => {
    return (
      <TagBtn key={category.uniqeId} title={category.title}>
        {category.children}
      </TagBtn>
    );
  });
  return (
    <div style={{ margin: "25px", border: "solid teal 5px" }}>
      {categoriesList}
      {/* <TagBtn title={"آخر المقالات"}>
        <div>
          <span>😄 😏 😸</span>
        </div>
      </TagBtn>
      <TagBtn title={"الأكثر قراءة"}>
        <div>
          <img
            style={{ width: "100px" }}
            src="https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg?w=200&h=200&c=crop"
            alt="tree"
          />
        </div>
      </TagBtn>
      <TagBtn title={"المميزة"}>
        <h2>Click Me</h2>
        <span>👍</span>
      </TagBtn>
      <TagBtn title={"مقالات الأسبوع"} />
  <TagBtn title="" /> */}
    </div>
  );
}
