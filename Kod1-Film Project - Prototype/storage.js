 //Projemizin modüler bir hal alması için storege işlemlerini burada yapıyoruz.
 
 //Eklediğimiz filmleri localStorageye ekleyeceğiz.
 //Storage constructor
function Storage(){//Storage isimle obje oluşturacağız
 //prototype ile fonksiyonları ekleyeceğiz

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films)); //Local Storageye atıyoruz (key'i films).




}
Storage.prototype.getFilmsFromStorage = function(){ //Local Storage 'den bütün filmleri alıyoruz.
    let films;
   //BU key var mı diye kontrol ediyoruz.
    if (localStorage.getItem("films") === null) { 
        films = []; //Boş bir array dönüyor.
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));//Local storage sadece string değerler kabul ediyordu.
        //Aldığımız string değerini burada parse etmemiz lazım (orjinal arrey haline getirmemiz gerekiyor).

    }

    return films;
}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    // splice
    films.forEach(function(film,index){
        if(film.title === filmTitle) {
            films.splice(index,1);
        }
    });//Local Storage'den filmleri silme

    localStorage.setItem("films",JSON.stringify(films));




}
Storage.prototype.clearAllFilmsFromStorage = function(){

    localStorage.removeItem("films");
    
}