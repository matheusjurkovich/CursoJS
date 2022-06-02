const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milinária',
        author: 'T. Harb Eker',
      },
      {
        title: 'O homem mais rico da babilônia',
        author: 'George S. Clason',
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter',
      }
    ],
  },
  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'Você é Insubistiuvel',
        author: 'Augusto Cury',
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury',
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey',
      },
    ]
  }
  
]

const totalCategories = booksByCategory.length
console.log(`Total de categorias: ${totalCategories}`)
for(let category of booksByCategory){
  console.log(`${category.category} - ${category.books.length} livros`)
}

function countAuthors() {
  let authors = [];
  for(let category of booksByCategory){
    for(let book of category.books){
      if(authors.indexOf(book.author) == -1){
      authors.push(book.author)
      }
    }
  }
  console.log(`Total de autores: ${authors.length}`)
}

countAuthors()

function booksOfAuthor(author) {
  let books = [];
  for(let category of booksByCategory){
    for(let book of category.books){
      if(book.author == author){
        books.push(book.title)
      }
    }
  }
  console.log(`Livros de ${author}: ${books.join(', ')}`)
}

booksOfAuthor('George S. Clason')