function BookList({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <p>
            <b>{book.title}</b> - {book.author} - ${book.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BookList;