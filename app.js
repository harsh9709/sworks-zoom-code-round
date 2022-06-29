 /*  From Human Resource to Everyone 03:06 PM
Write a code which takes input of a paragraph. 
Write a logic which arranges the given words of paragraph into alphabetically sorted order.
 Your result should be stored into a database. 

 

For e.g., If input is "virat kohli is one of the best cricketer of india", 
Your output should be "best cricketer india is kohli of of one the virat" 

 

For simplicity, assume that the string would always be in lowercase only.
 */
const express =require('express')
const port = 3000;
 const app =express();
app.use(express.json())

  



app.get('/result',(req,res)=>{

    const  input ="hey there hello"
    const word =input.split(' ')
     const order= word.sort();
      res.send(order)


})



 app.listen(port,()=>{console.log(`server is listening in port ${port}`);})