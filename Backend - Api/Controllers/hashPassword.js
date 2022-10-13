const bcrypt = require('bcrypt');

async function hashPassword(password){
   try{  
    let salt = '$2b$10$LdfmnX4Z2UMrs.Me8bPHuO'
    let hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword;
  }
  catch(e){
    return e;
  } 
}

module.exports = {
    hashPassword
}
