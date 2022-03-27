var library = [{
        author : 'Bill Gates',
        title : 'The Road Ahead',
        readingStatus : true
    },
    {
        author : 'Steve Jobs',
        title : 'Walter Isaacson',
        readingStatus : true
    },
    {
        author : 'Suzanne Collins',
        title : 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus : false
    }
];

for (var i = 0; i < library.length; i++) {

    var book_name = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";

    if (library[i].readingStatus) {
        console.log("Already read the book name " + book_name);
    }
    else {
        console.log("You still need to read " + book_name);
    }
}
