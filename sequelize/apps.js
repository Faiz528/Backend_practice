const sequelize= require('./database.js')

sequelize.sync().then(result=>{
    console.log(result)
}).catch(err=>{
     console.log(err)
});