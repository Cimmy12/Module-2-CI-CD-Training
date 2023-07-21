const books = {
    title:'Learning JS level 1', 
    description:'Learning JS at beginner level', 
    numberOfPages:50, 
    author:'Simi Adanri', 
    reading: true,
    checkReadingStatus: function(){
        if(this.reading===true) {
            this.reading = 'true'
        }else{
            this.reading.reading ='false'
        }
        }
    }

    books.checkReadingStatus();
    console.log(books)