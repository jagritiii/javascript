
// Number enum -----------

enum Media {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): Media {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return Media.Magazine;
    }
    return Media.Newspaper
 }

let mediaType: Media = getMedia('Forbes'); 
console.log(mediaType);


// string enum--------------

enum Media2 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
 
Media2.Newspaper; 
Media2['Magazine']



// interfaces-------------------

interface Person {
    name: string;
    gender?: string; //optional
}

interface Employee extends Person {
    empCode: number;
    readonly empType :9;
}

let empObj:Employee = {
    empType:9,
    empCode:1,
    name:"Bill",
    gender:"Male"
}