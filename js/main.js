
    const $seleccionArchivos = document.querySelector("#imagen");
    const $imagenPrevisualizacion = document.querySelector("#previewImage");

    $seleccionArchivos.addEventListener("change", () => {

        const archivos = $seleccionArchivos.files;

        if (!archivos || !archivos.length) {
            $imagenPrevisualizacion.src = "";
            return;
        }

        const primerArchivo = archivos[0];
        const objectURL = URL.createObjectURL(primerArchivo);
        $imagenPrevisualizacion.src = objectURL;
    });


    $(document).ready(function(){
        $("#Añadir").click(function()
        {
            $("#myModal").modal('hide');
            // Div contenedo principal
            var divPrincipalRecetas = document.createElement("div");
            divPrincipalRecetas.className = "receta row";

            //Div contenedor de receta sin imagen
            var divIngredientes= document.createElement("div");
            divIngredientes.className ="col-12 col-lg-4";

            //elementos que van dentro del div contenedor de receta sin imagen
            var h4Titulo = document.createElement("h4");
            var h5Ingredientes = document.createElement("h5");
            var listaIngredientes = document.createElement("p")

            //insetamos el contenido a cada elemento
            h4Titulo.innerText = document.getElementById("titulo").value;
            h5Ingredientes.innerText = "Ingredientes:";
            listaIngredientes.innerText=document.getElementById("ingredientes").value;

            //Insertamos los elementos dentro del div contenedor
            divIngredientes.appendChild(h4Titulo);
            divIngredientes.appendChild(h5Ingredientes);
            divIngredientes.appendChild(listaIngredientes);
            //Contenedor de Imagen
            var imgContenedor = document.createElement("div")
            imgContenedor.className = "contenedor-img col-12 col-lg-8";

            //Elemento Imagen
            var imgRecetas = document.createElement("img");
            imgRecetas.className = "img-receta";
            imgRecetas.getAttribute("alt", "Responsive images");
            imgRecetas.setAttribute("src", $imagenPrevisualizacion.src);
            //insetamos el elemento imagen en el contenedor
            imgContenedor.appendChild(imgRecetas);

            //Creamos contenedor de Procedimiento
            var divProcedimiento = document.createElement("div");
            divProcedimiento.className = "conteiner-fluid procedimiento";
            //Elementos del contenedor Procedimientos
            var h5Procedimieto = document.createElement("h5");
            h5Procedimieto.innerText = "Pasos a seguir";
            var ProcedimientoReceta = document.createElement("p");
            ProcedimientoReceta.innerText = document.getElementById("procedimiento").value;
            //Insertamos Los elementos del contenedor dentro
            divProcedimiento.appendChild(h5Procedimieto);
            divProcedimiento.appendChild(ProcedimientoReceta);

            //insertamos todo en el div principal
            divPrincipalRecetas.appendChild(divIngredientes);
            divPrincipalRecetas.appendChild(imgContenedor);
            divPrincipalRecetas.appendChild(divProcedimiento);

            limpiar()
            var prueba1 = document.getElementById("ContenedorRecetas");
            prueba1.appendChild(divPrincipalRecetas)

        });
    });

    function limpiar()
    {
        var formElements = document.getElementsByClassName("form-control");
        for (let index = 0; index < formElements.length; index++) {
            formElements[index].value = "";
        }
        $imagenPrevisualizacion.src = "";
    }
