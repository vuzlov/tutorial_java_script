  let name= prompt('what is your name?').trim();
  let FirstLetter= name[0].toUpperCase();
  let slise= name.slice(1, name.length) ;
  let fullname=`${FirstLetter}${slise}`;
//  document.write('Full name:'+' ',name )
  let surname= prompt('what is your surname?').trim();
  let email= prompt('what is your email?').trim();
  console.log('<ul>
					<li>'Full name:'+' ', fullname +' ', surname</li>
					<li>'email:'email</li>
					<li></li> </ul>');