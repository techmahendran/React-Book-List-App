import { useState } from "react";

const Form = ({ addBookList }) => {
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [isbnInput, setIsbnInput] = useState("");

  const [titleIsTouched, setTitleIsTouched] = useState(false);
  const [authorIsTouched, setAuthorIsTouched] = useState(false);
  const [isbnIsTouched, setIsbnIsTouched] = useState(false);

  const handleTitle = (e) => {
    setTitleInput(e.target.value);

    setTitleIsTouched(true);
  };

  const handleAuthor = (e) => {
    setAuthorInput(e.target.value);

    setAuthorIsTouched(true);
  };

  const handleIsbn = (e) => {
    setIsbnInput(e.target.value);

    setIsbnIsTouched(true);
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    addBookList({ titleInput, authorInput, isbnInput });

    setTitleInput("");
    setAuthorInput("");
    setIsbnInput("");

    setTitleIsTouched(false);
    setAuthorIsTouched(false);
    setIsbnIsTouched(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* titleInput */}
        <label>Title</label>
        <input
          type="text"
          id="titleInput"
          value={titleInput}
          onChange={handleTitle}
          autoComplete="off"
        />

        {titleInput === "" && titleIsTouched ? (
          <div className="error">
            <span>Please Enter the Title Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>
        ) : (
          ""
        )}

        {/* authorInput */}
        <label>Author</label>
        <input
          type="text"
          id="authorInput"
          value={authorInput}
          onChange={handleAuthor}
          autoComplete="off"
        />

        {authorInput === "" && authorIsTouched && (
          <div className="error">
            <span>Please Enter the Author Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>
        )}

        {/* isbnInput */}
        <label>ISBN #</label>
        <input
          type="text"
          id="isbnInput"
          value={isbnInput}
          onChange={handleIsbn}
          autoComplete="off"
        />

        {isbnInput === "" && isbnIsTouched && (
          <div className="error p15">
            <span>Please Enter the ISBN # Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>
        )}

        {/* btn  */}
        <button
          id="btn"
          disabled={titleInput === "" || authorInput === "" || isbnInput === ""}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
