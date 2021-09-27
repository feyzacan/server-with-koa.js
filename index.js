
const Koa = require('koa');
const app = new Koa();

// response


app.use(ctx => {

if (ctx.path == '/'){
  return ctx.body = '<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>';}

else if (ctx.path == '/hakkimda'){
  return ctx.body = '<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h1>';}

else if (ctx.path == '/iletisim'){
  return ctx.body = '<h1>ILETISIM SAYFASINA HOŞGELDİNİZ</h1>';}
  
});

app.listen(3000);