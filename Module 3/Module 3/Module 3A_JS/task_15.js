const books =[ 
    {
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
},
]

for (let i=0; i < books.length;i++)
if (books.reading===true){
    console.log('Learn JS')
}


//
