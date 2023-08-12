const TableData = ({ bookList, closeBookData }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN #</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book.titleInput}</td>
                <td>{book.authorInput}</td>
                <td>{book.isbnInput}</td>
                <td onClick={() => closeBookData(book)}>
                  <i className="fa fa-close"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {bookList.length === 0 && <p className="empty_list">No Book Lists</p>}
    </>
  );
};

export default TableData;
