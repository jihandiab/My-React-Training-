import "./TagBtnStyle.css";
export default function TagBtn({ title, children }) {
  return (
    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button className={"tagBtn"}>
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
// طريقة أخرى لكتابة الكود
/*export default function TagBtn({ title, children }) {
  if (title == null || title === "") {
    return null;
  }
  return (
    <button className={"tagBtn"}>
      {title}
      {children}
    </button>
  );
} */
