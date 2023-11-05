import { createStore as _createStore } from 'vuex';

export function createStore() {
  return _createStore({
    state: {
      books: [
        {
          title: "Leviathan Wakes",
          author: "James S.A. Corey",
          read: false,
          isbn: "9781841499888",
          numPages: 592,
          moreInfoLink: "https://www.goodreads.com/book/show/8855321-leviathan-wakes"
        }
      ],
      popularBooks: [
        {
          title: "Leviathan Wakes",
          author: "James S.A. Corey",
          sciFi: true,
          fantasy: false,
          isbn: "9781841499888",
          numPages: 592,
          moreInfoLink: "https://www.goodreads.com/book/show/8855321-leviathan-wakes"
        },
        {
          title: "Wool",
          author: "Hugh Howey",
          sciFi: true,
          fantasy: false,
          isbn: "9781476733951",
          numPages: 511,
          moreInfoLink: "https://www.goodreads.com/book/show/17164655-wool"
        },
        {
          title: "Project Hail Mary",
          author: "Andy Weir",
          sciFi: true,
          fantasy: false,
          isbn: "9780593135204",
          numPages: 476,
          moreInfoLink: "https://www.goodreads.com/book/show/54493401-project-hail-mary"
        },
        {
          title: "A Memory Called Empire",
          author: "Arkady Martine",
          sciFi: true,
          fantasy: false,
          isbn: "9781529001587",
          numPages: 462,
          moreInfoLink: "https://www.goodreads.com/book/show/37794149-a-memory-called-empire"
        },
        {
          title: "Gideon the Ninth",
          author: "Tamsyn Muir",
          sciFi: false,
          fantasy: true,
          isbn: "9781250313195",
          numPages: 448,
          moreInfoLink: "https://www.goodreads.com/book/show/42036538-gideon-the-ninth"
        },
        {
          title: "The Dragon's Path",
          author: "Daniel Abraham",
          sciFi: false,
          fantasy: true,
          isbn: "9780316080682",
          numPages: 592,
          moreInfoLink: "https://www.goodreads.com/book/show/9435497-the-dragon-s-path"

        },
        {
          title: "Uprooted",
          author: "Naomi Novik",
          sciFi: false,
          fantasy: true,
          isbn: "9780804179058",
          numPages: 464,
          moreInfoLink: "https://www.goodreads.com/book/show/26117888-uprooted"
        },
        {
          title: "American Gods",
          author: "Neil Gaiman",
          sciFi: false,
          fantasy: true,
          isbn: "9780380973651",
          numPages: 465,
          moreInfoLink: "https://www.goodreads.com/book/show/30165203-american-gods"
        },
      ]
    },
    mutations: {
      SET_READ_STATUS(state, payload) {
        payload.book.read = payload.value;
      },
      SAVE_BOOK(state, book) {
        state.books.push(book);
      }
    },
    actions: {},
    modules: {},
    // Strict should not be used in production code. It is used here as a
    // learning aid to warn you if state is modified without using a mutation.
    strict: true
  });
}
