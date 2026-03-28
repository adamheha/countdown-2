function BookItem({ book }) {
  return (
    <p>
      <b>{book.title}</b> - {book.author} - ${book.price}
    </p>
  );
}

export default BookItem;