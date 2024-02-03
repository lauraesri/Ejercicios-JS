/*Pinta en la consola una frase por cada usuario 
que es premium y después crea un array con los usuarios que no son premium.*/
const users = [
    { username: 'ppc90', age: 30, premium: false },
    { username: 'lu65', age: 24, premium: true },
    { username: 'maria3', age: 36, premium: false },
    { username: 'abc123', age: 30, premium: false },
    { username: 'sergio58', age: 30, premium: true },
  ];
  
  // Imprimir frases por cada usuario premium
  for (const user of users) {
    if (user.premium) {
      console.log(`${user.username} es usuario premium.`);
    }
  }
  
  // Array con usuarios que no son premium
  const usuariosNoPremium = users.filter(user => !user.premium);
  
  console.log("Array de usuarios que no son premium: ", usuariosNoPremium);
  