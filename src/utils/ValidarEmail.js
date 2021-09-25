export function validateEmail(email) {
    console.log(email)
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //esto se llama una expresion regular; introduce el emial y compara cosa por cosa
      return re.test(email);// el test retorna un valor boolean
    }