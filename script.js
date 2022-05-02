var textoModificado = [];
        function encriptar(){

            const validar = document.getElementById("texto");
            var texto;
            
            
            if(validando(validar)==true){
                texto = document.getElementById("texto").value;
                for(var i=0; i<texto.length; i++){

                    textoModificado.push(texto[i]);

                    if(texto[i] == "a"){
                        agregar(textoModificado,"i");
                        
                    }

                    if(texto[i] == "e"){
                        agregar(textoModificado,"nter");
                        
                    }

                    if(texto[i] == "i"){
                        agregar(textoModificado,"mes");
                        
                    }

                    if(texto[i] == "o"){
                        agregar(textoModificado,"ber");
                        
                    }

                    if(texto[i] == "u"){
                        agregar(textoModificado,"fat");
                        
                    }
                }
            }    
            contanar();
            textoModificado = [];
        }
        
        function agregar(cadenaTexto,codigo){
            
            for(var i=0; i<codigo.length; i++){
                cadenaTexto.push(codigo[i]);
            }
        }

        function desencriptar(){
            const validar = document.getElementById("texto");
            var texto;
            
            
            if(validando(validar)==true){
                texto = document.getElementById("texto").value;
                var i=0;
                while(i<texto.length){

                    textoModificado.push(texto[i]);

                    if(texto[i] == "a"){
                        if(quitar(texto,i,"i") == 1){
                            i = i+1;
                        }
                    }

                    if(texto[i] == "e"){
                        if(quitar(texto,i,"nter") == 4){
                            i = i+4;
                        }
                        
                    }

                    if(texto[i] == "i"){
                        if(quitar(texto,i,"mes") == 3){
                            i = i+3;
                        }
                        
                    }

                    if(texto[i] == "o"){
                        if(quitar(texto,i,"ber") == 3){
                            i = i+3;
                        }
                        
                    }

                    if(texto[i] == "u"){
                        if(quitar(texto,i,"fat") == 3){
                            i = i+3;
                        }
                    }

                    i++
                }
            }


            
            
            contanar();
            textoModificado = [];
        }

        function quitar(textoOriginal,indice,codigo){
            var i=0;
            var contador = 0;
            while( i < codigo.length){
                if(textoOriginal[indice + 1]==codigo[i]){
                    contador=contador+1;
                }
                indice++;
                i++;
            }

            return contador;
        }

        const medium = matchMedia('(max-width: 849px)');
        const cambiarAlto = mql =>{
            if(mql.matches == true){
                document.getElementById('sinMensaje').style= 'height: 236px;';
            }else{
                document.getElementById('sinMensaje').style= 'height: 570px;';
            }      
        }


        function contanar(){
            var cadena;
            
            cadena=textoModificado[0];
            for(var j=1; j < textoModificado.length;j++){
                    cadena = cadena + textoModificado[j];
            }
            if(cadena == undefined){
                document.getElementById('imagen').style.visibility = "visible";
                document.getElementById('alerta').style.visibility = "visible";
                document.getElementById('textoM').style= 'display:none';
                document.getElementById('copiar').style= 'display:none';
                
            }else{
                document.getElementById('imagen').style.visibility = "hidden";
                document.getElementById('alerta').style.visibility = "hidden";

                document.getElementById('textoM').value = cadena;
                document.getElementById('textoM').style= 'display:block';
                document.getElementById('copiar').style= 'display:block';

                medium.addListener(cambiarAlto);
                cambiarAlto(medium);
            }
            
           
           
            
            
        }
        
        function copiarTexto() {

            const contenido = document.getElementById('textoM');

            contenido.select();
            document.execCommand('copy');

        }
        
        function validando(val){
            let textoValidado=false;
            let isValid = false;
            val.willValidate = false;

            const pattern = new RegExp('[A-Záéíóú]', 'g');
     
            if(!val.value) {
                isValid = false;
                document.getElementById('imagen').style.visibility = "visible";
                document.getElementById('textoM').style= 'display:none';
                document.getElementById('copiar').style= 'display:none';
                document.getElementById('alerta').style.visibility = "visible";
                document.getElementById('menj').style= 'display:none';
                document.getElementById('icono').style= 'display:none';
            } else {
                if(!pattern.test(val.value)){ 
                        document.getElementById('menj').style= 'display:none';
                        textoValidado = true;
                    } else {
                        
                        isValid = true;
                        document.getElementById('menj').style= 'display:block';
                        document.getElementById('icono').style= 'display:block';
                        document.getElementById('textoM').style= 'display:none';
                        document.getElementById('copiar').style= 'display:none';
                        document.getElementById('imagen').style.visibility = "visible";
                        document.getElementById('alerta').style.visibility = "visible";
                    }
            }
            return textoValidado;
        }