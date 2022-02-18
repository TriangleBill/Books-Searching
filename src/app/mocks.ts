

export const fakeBook = {

    error: null,
    volumeInfo: {
        title: 'Title',
        authors: ['Author1', 'Author2'],
        description: 'description',
        categories: ['category1', 'category2'],
        imageLinks: {
            thumbnail: 'link',
            medium: 'link',
        }
    }
}

export const fakeBooksRequest = {
    totalItems: '123',
    items: [fakeBook, fakeBook]
    
}