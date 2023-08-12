import Header from "./components/Header";
import Form from "./components/Form";
import TableData from "./components/TableData";

import { useState, useEffect } from "react";

const getbookList = () => {
  const getItems = localStorage.getItem("bookList");
  if (getItems === null) {
    return [];
  }

  return JSON.parse(getItems);
};

const getSuccessMsg = () => {
  const getSuccessMsg = localStorage.getItem("successMsg");
  if (getSuccessMsg === null) {
    return "";
  }
  return JSON.parse(getSuccessMsg);
};

const getErrorMsg = () => {
  const getErrorMsg = localStorage.getItem("errorMsg");
  if (getErrorMsg === null) {
    return "";
  }
  return JSON.parse(getErrorMsg);
};

function App() {
  const [bookList, setBookList] = useState(getbookList());
  const [successMsg, setSuccessMsg] = useState(getSuccessMsg());
  const [errorMsg, setErrorMsg] = useState(getErrorMsg());

  const addBook = (index) => {
    try {
      setBookList([...bookList, index]);
    } catch (e) {
      console.log(e.message);
    }

    setSuccessMsg("Book Added");
  };

  const closeBookData = (index) => {
    setBookList(bookList.filter((book) => book !== index));

    setErrorMsg("Book Removed");
  };

  useEffect(() => {
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }, [bookList]);

  useEffect(() => {
    localStorage.setItem("successMsg", JSON.stringify(successMsg));
  }, [successMsg]);

  useEffect(() => {
    localStorage.setItem("errorMsg", JSON.stringify(errorMsg));
  }, [errorMsg]);

  return (
    <>
      <div className="book_list">
        {/* header  */}
        <Header
          successMsg={successMsg}
          setSuccessMsg={setSuccessMsg}
          showErrorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
        />

        {/* form page  */}
        <Form addBookList={addBook} />

        {/* table  */}
        <TableData
          bookList={bookList}
          closeBookData={closeBookData}
          setErrorMsg={setErrorMsg}
        />
      </div>
    </>
  );
}

export default App;
