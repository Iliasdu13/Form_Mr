       function check(){
             var nbr;
             nbr = Number(document.getElementById("age").value);
             if(nbr < 18)
             {
                alert("Vous ne pouvez pas accéder au site");
             }
             else
             {
                alert("Vous aller être rediriger vers le site");
             }
         }
