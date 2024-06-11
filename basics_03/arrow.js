const user ={

    name: "Saujanya",
    course :"CSE",
  
    welcomemessage : function (){
      console.log(`${this.name} , welcome here`)
      console.log(this)
    }
  }

  // user.welcomemessage()
  // user.name = "sam"
  // user.welcomemessage()
  
  // console.log(this)
  
/*   function one() {
    let username = "saujanya"
    console.log(this.username);
  }
 one() */


/*  const one = function() {
  let username = "saujanya"
    console.log(this.username);

 }
   one() */



   //+++++++++++++++++++++ARROW FUNCTION ++++++++++++++++++++++++=


   const one = () => {
      let username = "saujanya"
      console.log(this);
   }

  //  one()





  /*  const sum = (n1 ,n2) => {
    return n1+n2
   }
 */

  //  const sum = (n1 ,n2) => n1+n2  IMPLICIT RETUNR TYPE OF WRITING ARROR FUNCTION
    //  const sum = (n1 ,n2) => (n1+n2)  WHEN USING THESE BRACKETS DONT USE RETURN KEYWORD


      const sum = (n1 ,n2) => ({username : "sam"})

   console.log(sum(3,5));


