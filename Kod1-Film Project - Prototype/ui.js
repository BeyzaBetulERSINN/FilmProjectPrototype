//Projemizin moduler bir hale gelmesi için ui işlemlerinin hepsini ui.js de yapacağız.

//uı constructor
function UI(){ //Uı isimli obje oluşturacağız
 //prototype ile fonksiyonları ekleyeceğiz
}
UI.prototype.addFilmToUI = function(newFilm){
   /*
    <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>// url
    <td></td> //title
    <td></td> //director
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->*/

  const filmList = document.getElementById("films");//tbody(yukarıdaki yapıyı yapıyoruz)
  //Arayüze storageden alıp ekliyoruz.

  filmList.innerHTML += `
  
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
  `;


}
UI.prototype.clearInputs = function(element1,element2,element3){//Filmi ekledikten sonra inputların içeriği silinsin diye
    element1.value = "";
    element2.value = "";
    element3.value = "";

}
UI.prototype.displayMessages = function(message,type){

    /*
    //mesaj için bu yapıyı oluşturmam  gerekiyor
    <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
    </div>

    */
    //const cardBody = document.querySelectorAll(".card-body")[0];
    const cardBody = document.querySelector(".card-body");
    // Alert divini oluşturma

    const div = document.createElement("div"); //div elementi oluşturma


    div.className = `alert alert-${type}`; //class="alert alert-primary"
    div.textContent = message;

    cardBody.appendChild(div);//cardBody'ye yeni bir çocuk olarak bu dive eklememiz gerekiyor


    setTimeout(function(){
        div.remove();

    },1000);//1000 milisaniye yani 1 saniye



}
UI.prototype.loadAllFilms = function(films){//Film listemize ekliyoruz.
/*
 <tr>
                                                 <td><img src="" class="img-fluid img-thumbnail"></td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                            </tr> -->
                                            <!-- <tr>
                                                <td><img src="" class="img-fluid img-thumbnail"></td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                            </tr> -->
*/

    
    const filmList = document.getElementById("films"); //tbody 

    films.forEach(function(film){//Buradki arrey içinde gezinmem gerekiyor. Yani tbody içinde.
        filmList.innerHTML += `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
    });

}
UI.prototype.deleteFilmFromUI = function(element) {

    element.parentElement.parentElement.remove();// a elementinin parent'ı td 
                                                 // td elementinin parent'ı tr  
}
UI.prototype.clearAllFilmsFromUI = function(){

    const filmList = document.getElementById("films");

    // filmList.innerHTML = "";

    while(filmList.firstElementChild !== null) { // Child Olduğu Sürece
        filmList.firstElementChild.remove();
    }
}