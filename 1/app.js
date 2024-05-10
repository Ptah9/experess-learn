// // подключение express
// const express = require("express");
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута "/"
// app.get("/", function(request, response){
     
//     // отправляем ответ
//     response.send("<h2>Привет Express!</h2>");
// });
// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000);





// const express = require("express");
 
// const app = express();
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function(request, response){
     
//     response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);


// use 

// app.use(function(_, _, next){
     
//     console.log("Middleware 1");
//     next();
// });
// app.use("/about", function(_, response){
     
//     console.log("About Middleware");
//     response.send("About Middleware");
// });
 
// app.get("/", function(_, response){
//     console.log("Route /");
//     response.send("Hello");
// });
// app.listen(3000);








// комбинирование sent status и send

// const express = require("express");
// const app = express();
 
// app.use("/home/foo/bar",function (request, response) {
//   response.status(404).send(`Ресурс не найден`);
// });
 
// app.listen(3000);



// send files

// app.use(function (_, response) {
//     response.sendFile(__dirname + "/index.html");
//   });







//   спец символы

// К примеру, символ ? указывает, что предыдущий символ может встречаться 1 раз или отсутствовать. И мы можем определить следующую функцию:
	
// app.get("/bo?k", function (request, response) {
//     response.send(request.url)
// });

// Такой маршрут будет соответствовать строке запроса "/bk" или "/bok".


// Символ + указывает, что предыдущий символ может встречаться 1 и более раз:

// app.get("/bo+k", function (request, response) {
//     response.send(request.url)
// });

// Такой маршрут будет соответствовать запросам "/bok", "/book", "/boook" и так далее.



// Символ звездочка * указывает, что на месте данного символа может находиться любое количество символов:
	
// app.get("/bo*k", function (request, response) {
//     response.send(request.url)
// });

// Такой маршрут будет соответствовать запросам "/bork", "/bonk", "/bor.dak", "/bor/ok" и так далее.




// Скобки () позволяют оформить группу символов, которые могут встречаться в запросе:
	
// app.get("/book(.html)?", function (request, response) {
//     response.send(request.url)
// });

// Выражение (.html)? указывает, что подстрока ".html" может встречаться или отсутствовать в строке запроса. И такой маршрут будет соответствовать запросам "/book" и "/book.html".







// переадресация

// app.use("/index",function (_, response) {
//     response.redirect("https://metanit.com")
//   });


// app.use("/home/bar",function (_, response) {
//     response.redirect("about")
//   });
// app.use("/home/about", function (_, response) {
//     response.send("<h1>About</h1>");
//   });



  // параметры в запросе  
  // http://localhost:3000/about?id=3&name=anton

// const express = require("express");
  
// const app = express();

// app.get("/", function(_, response){
      
//     response.send("<h1>Главная страница</h1>");
// });
// app.use("/about", function(request, response){
      
//     const id = request.query.id;
//     const userName = request.query.name;
//     response.send(`<h1>Информация</h1><p>id: ${id}</p><p>name: ${userName}</p>`);
// });
 
// app.listen(3000);





// передача массивов      
// http://localhost:3000/about?name=3&name=anton&name=lol


// const express = require("express");
  
// const app = express();
// app.get("/", function(_, response){
      
//     response.send("<h1>Главная страница</h1>");
// });
// app.use("/about", function(request, response){
      
//     const usernames = request.query.name;
//     let responseText = "<ul>";
//     for(username of usernames){
//         responseText += `<li>${username}</li>`;
//     }
//     responseText += "</ul>";
//     response.send(responseText);
// });
 
// app.listen(3000);



// Передача сложных объектов
// localhost:3000/about?user[id]=7&user[name]=anton



const express = require("express");
  
const app = express();
 
app.use("/about", function(request, response){
      
    console.log(request.query);
    const id = request.query.user.id;
    const name = request.query.user.name;
     
    response.send(`<h3>id: ${id}<br>name: ${name}</h3>`);
});
 
app.listen(3000);