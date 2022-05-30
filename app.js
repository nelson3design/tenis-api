const express = require('express');
const app = express();

const port= process.env.PORT || 5000
const product = require('./api.json');
const productAll = require('./allProduct.json');



const id1 = require('./api/id1.json');
const id2 = require('./api/id2.json');
const id3 = require('./api/id3.json');
const id4 = require('./api/id4.json');
const id5 = require('./api/id5.json');
const id6 = require('./api/id6.json');
const id7 = require('./api/id7.json');
const id8 = require('./api/id8.json');
const id9 = require('./api/id9.json');
const id10 = require('./api/id10.json');
const id11 = require('./api/id11.json');
const id12 = require('./api/id12.json');
const id13 = require('./api/id13.json');
const id14 = require('./api/id14.json');
const id15 = require('./api/id15.json');
const id16 = require('./api/id16.json');
const id17 = require('./api/id17.json');
const id18 = require('./api/id18.json');
const id19 = require('./api/id19.json');
const id20 = require('./api/id20.json');
const id21 = require('./api/id21.json');
const id22 = require('./api/id22.json');
const id23 = require('./api/id23.json');
const id24 = require('./api/id24.json');
const id25 = require('./api/id25.json');
const id26 = require('./api/id26.json');
const id27 = require('./api/id27.json');
const id28 = require('./api/id28.json');
const id29 = require('./api/id29.json');
const id30 = require('./api/id30.json');
const id31 = require('./api/id31.json');
const id32 = require('./api/id32.json');
const id33 = require('./api/id33.json');
const id34 = require('./api/id34.json');
const id35 = require('./api/id35.json');
const id36 = require('./api/id36.json');
const id37 = require('./api/id37.json');
const id38 = require('./api/id38.json');

const cors=require('cors')

app.use(cors({
    origin:"*"
}))

app.use(express.static('public'))
app.use('/css',express.static(__dirname + '/public/css'))
app.use('/img',express.static(__dirname + '/public/img'))


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {

 res.render('index',{title: "tenis-api"})
});

 app.get('/product', function(req, res) {
    res.json(product)
});
    
app.get('/all-product', function(req, res) {
      res.json(productAll)
  });
      
  
        
app.get('/all-product/1', function(req, res) {
 res.json(id1)
  });

  app.get('/product/nike/femenino/casual/1', function(req, res) {
    res.json(id1)
     });
   



 
app.get('/all-product/2', function(req, res) {
 res.json(id2)
  
});

app.get('/product/nike/femenino/casual/2', function(req, res) {
  res.json(id2)
   });
 
            
app.get('/all-product/3', function(req, res) {
  res.json(id3)
   
 });
 app.get('/product/nike/femenino/casual/3', function(req, res) {
  res.json(id3)
   });
      





 app.get('/all-product/4', function(req, res) {
  res.json(id4)
   
 });
 app.get('/product/nike/femenino/corrida/4', function(req, res) {
  res.json(id4)
   });
      

  
 



 app.get('/all-product/5', function(req, res) {
  res.json(id5)
   
 });


 app.get('/product/nike/femenino/corrida/5', function(req, res) {
  res.json(id5)
   });
      

     
 app.get('/all-product/6', function(req, res) {
  res.json(id6)
   
 });

 app.get('/product/nike/femenino/corrida/6', function(req, res) {
  res.json(id6)
   });
      
  
   


 app.get('/all-product/7', function(req, res) {
  res.json(id7)
   
 });
 app.get('/product/nike/masculino/casual/7', function(req, res) {
  res.json(id7)
   });
      




         
app.get('/all-product/8', function(req, res) {
  res.json(id8)
   });

   app.get('/product/nike/masculino/casual/8', function(req, res) {
    res.json(id8)
     });
        

     

 
  
 app.get('/all-product/9', function(req, res) {
  res.json(id9)
   
 });

 app.get('/product/nike/masculino/casual/9', function(req, res) {
  res.json(id9)
   });
      

             
 app.get('/all-product/10', function(req, res) {
   res.json(id10)
    
  });
  app.get('/product/nike/masculino/basquete/10', function(req, res) {
    res.json(id10)
     });
        
      
 
  app.get('/all-product/11', function(req, res) {
   res.json(id11)
    
  });
  app.get('/product/nike/masculino/basquete/11', function(req, res) {
    res.json(id11)
     });
        
      
      
  app.get('/all-product/12', function(req, res) {
   res.json(id12)
    
  });
  app.get('/product/nike/masculino/basquete/12', function(req, res) {
    res.json(id12)
     });
        
      
  app.get('/all-product/13', function(req, res) {
   res.json(id13)
    
  });

  app.get('/product/nike/masculino/treino/13', function(req, res) {
    res.json(id13)
     });
        
      
  app.get('/all-product/14', function(req, res) {
   res.json(id14)
    
  });
  app.get('/product/nike/masculino/treino/14', function(req, res) {
    res.json(id14)
     });
       
// tenis puma casual

          
app.get('/all-product/15', function(req, res) {
  res.json(id15)
   });
   app.get('/product/puma/masculino/casual/15', function(req, res) {
    res.json(id15)
     });
       
  
 app.get('/all-product/16', function(req, res) {
  res.json(id16)
   
 });
 app.get('/product/puma/masculino/casual/16', function(req, res) {
  res.json(id16)
   });
     
             
 app.get('/all-product/17', function(req, res) {
   res.json(id17)
    
  });
  app.get('/product/puma/masculino/casual/17', function(req, res) {
    res.json(id17)
     });
            
 




// tenis puma basquete

  app.get('/all-product/18', function(req, res) {
   res.json(id18)
    
  });

  app.get('/product/puma/masculino/basquete/18', function(req, res) {
    res.json(id18)
     });
       
     

      
  app.get('/all-product/19', function(req, res) {
   res.json(id19)
    
  });
  app.get('/product/puma/masculino/basquete/19', function(req, res) {
    res.json(id19)
     });
         


      
  app.get('/all-product/20', function(req, res) {
   res.json(id20)
    
  });
  app.get('/product/puma/masculino/basquete/20', function(req, res) {
    res.json(id20)
     });
         

 // tenis puma femenino casual    


  app.get('/all-product/21', function(req, res) {
   res.json(id21)
    
  });

  app.get('/product/puma/femenino/casual/21', function(req, res) {
    res.json(id21)
     });
         


          
app.get('/all-product/22', function(req, res) {
  res.json(id22)
   });
   app.get('/product/puma/femenino/casual/22', function(req, res) {
    res.json(id22)
     });
         


  
 app.get('/all-product/23', function(req, res) {
  res.json(id23)
   
 });

 app.get('/product/puma/femenino/casual/23', function(req, res) {
  res.json(id23)
   });
       


             
 app.get('/all-product/24', function(req, res) {
   res.json(id24)
    
  });
  app.get('/product/puma/femenino/corrida/24', function(req, res) {
    res.json(id24)
     });
   
     
 
  app.get('/all-product/25', function(req, res) {
   res.json(id25)
    
  });
  app.get('/product/puma/femenino/corrida/25', function(req, res) {
    res.json(id25)
     });
      
 
      
  app.get('/all-product/26', function(req, res) {
   res.json(id26)
    
  });
  app.get('/product/puma/femenino/corrida/26', function(req, res) {
    res.json(id26)
     });
      





      // tenis adidas masculino casual   
      
  app.get('/all-product/27', function(req, res) {
   res.json(id27)
    
  });

  app.get('/product/adidas/masculino/casual/27', function(req, res) {
    res.json(id27)
     });
      

      
  app.get('/all-product/28', function(req, res) {
   res.json(id28)
    
  });

  app.get('/product/adidas/masculino/casual/28', function(req, res) {
    res.json(id28)
     });
      




          
app.get('/all-product/29', function(req, res) {
  res.json(id29)
   });
   app.get('/product/adidas/masculino/casual/29', function(req, res) {
    res.json(id29)
     });
      
 // tenis adidas masculino basquete   
  
 app.get('/all-product/30', function(req, res) {
  res.json(id30)
   
 });
 app.get('/product/adidas/masculino/basquete/30', function(req, res) {
  res.json(id30)
   });
        
   

 app.get('/all-product/31', function(req, res) {
   res.json(id31)
    
  });    

  app.get('/product/adidas/masculino/basquete/31', function(req, res) {
    res.json(id31)
     });
        
     


 
  app.get('/all-product/32', function(req, res) {
   res.json(id32)
    
  });
  app.get('/product/adidas/masculino/basquete/32', function(req, res) {
    res.json(id32)
     });



     
 // tenis adidas femenino casual
 
 
  
     
      
  app.get('/all-product/33', function(req, res) {
   res.json(id33)
    
  });

  app.get('/product/adidas/femenino/casual/33', function(req, res) {
    res.json(id33)
     });
        
     



  app.get('/all-product/34', function(req, res) {
   res.json(id34)
    
  });
  app.get('/product/adidas/femenino/casual/34', function(req, res) {
    res.json(id34)
     });
        




      
  app.get('/all-product/35', function(req, res) {
   res.json(id35)
    
  });
  app.get('/product/adidas/femenino/casual/35', function(req, res) {
    res.json(id35)
     });
        


 // tenis adidas femenino corrida



  app.get('/all-product/36', function(req, res) {
    res.json(id36)
     
   });
   app.get('/product/adidas/femenino/corrida/36', function(req, res) {
    res.json(id36)
     });
        


       
   app.get('/all-product/37', function(req, res) {
    res.json(id37)
     
   });
   app.get('/product/adidas/femenino/corrida/37', function(req, res) {
    res.json(id37)
     });
        


       
   app.get('/all-product/38', function(req, res) {
    res.json(id38)
     
   });
   app.get('/product/adidas/femenino/corrida/38', function(req, res) {
    res.json(id38)
     });
        
 
 















     
app.listen(port,()=>{
  console.log(`api rodando nao porta ${port}`)
})


