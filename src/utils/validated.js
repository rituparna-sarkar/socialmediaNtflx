export const CheckValidData=(email,password,name)=>{
  
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isEmailValid){
        return 'Email Id is not valid'
    }
    if(!isPassValid){
        return "Password is not valid"
    }
    if(name && !isName){
        return'Name is not valid'
    }
    return null;
}