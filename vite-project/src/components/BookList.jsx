import BookItem from "./BookItem";

function BookList({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;