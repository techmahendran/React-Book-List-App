import BookImage from "../assets/Images/open-book.png";

const Header = ({ successMsg, setSuccessMsg, showErrorMsg, setErrorMsg }) => {
  return (
    <>
      <header>
        <img src={BookImage} alt="open-book" />
        <h1>
          My<span>Book</span>List
        </h1>
      </header>

      {successMsg && (
        <div className="book_status">
          <div className="book_details">
            <p>{successMsg}</p>
            <div className="icon" onClick={() => setSuccessMsg("")}>
              <i className="fa fa-close close_book_icon"></i>
            </div>
          </div>
        </div>
      )}

      {showErrorMsg && (
        <div className="book_status">
          <div className="book_details">
            <p className="remove">{showErrorMsg}</p>
            <div className="icon" onClick={() => setErrorMsg("")}>
              <i className="fa fa-close close_book_icon"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
