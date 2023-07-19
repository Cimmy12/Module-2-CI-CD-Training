
const books ={
    booksArray:[{
            title:'Learning JS level 1', 
            description:'Learning JS at beginner level', 
            numberOfPages:50, 
            author:'Simi Adanri', 
            reading: true,
            },
        
            {
            title:'Learn JS Intermediate level ', 
            description:'Learning JS at intermediate level', 
            numberOfPages:40, 
            author:'Simi Adanri', 
            reading: true,
            },
        {
            title:'Advanced JS', 
            description:'Learning JS at Advanced level', 
            numberOfPages:30, 
            author:'Simi Adanri', 
            reading: false,
        }
        ],
        
        }
        for (let i=0; i < books.length;i++){
            console.log(books[i]);
        if (books[i].reading===true){
            break;
        }
    }    
        console.log(books.booksArray[0,1])

//
