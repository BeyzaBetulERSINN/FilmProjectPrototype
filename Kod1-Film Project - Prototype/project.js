const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1]; //ikinci card-body'i aldı
const clear = document.getElementById("clear-films");



// UI Objesini Başlatma
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){//DOMContentLoaded-- sayfa yüklendiğinde eventimiz
        let films = storage.getFilmsFromStorage(); //storage.js'den bütün filmler geliyor
        ui.loadAllFilms(films); //

    });

    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}


function addFilm(e){
    const title = titleElement.value; //title değerini alma
    const director = directorElement.value;// director değerini alma
    const url = urlElement.value; // url değerini alma

    if (title === "" || director === "" || url === ""){//Girilen değerlerden herhangi biri boşsa
        // Hata 
        ui.displayMessages("Tüm alanları doldurun...","danger");

    }
    else {
        // Yeni Film Oluşturuken
        const newFilm = new Film(title,director,url); //film.js deki constructor daki gibi oluşturuyorum.

        ui.addFilmToUI(newFilm); // Arayüze film ekleme(addFilmToUI() fonksiyonu sayesindeuı.js'de)
        storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme
        //ui.displayMessages("message",type);
        ui.displayMessages("Film başarıyla eklendi...","success");


    }


    ui.clearInputs(titleElement,urlElement,directorElement);//Film eklenince inputların içeriği silinsin diye

    e.preventDefault(); //Bu formun submit edilmesini önlemek için 
}

function deleteFilm(e){

    /* <tr>
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


    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target); //Arayüzden kaldırma
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//Local Storageden kladırma
         //e.target=a
         //e.target'ın parentElement = td
         //td nin previousElementSibling i bir üsteki td (director)
         // td nin previousElementSibling i bir üsteki td (title)
         // Filmin başlığını almış oldu.
        ui.displayMessages("Silme işlemi başarılı...","success");

    }

}
function clearAllFilms(){

    if (confirm("Emin misiniz ?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }
   

}