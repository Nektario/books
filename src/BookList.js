import React from 'react'
import Book from './Book'

function BookList(props) {
    return (
        <>
            {books.map(book => 
                <Book book={book}></Book>
            )}
        </>
    )
}

const books = [
{
    "kind": "books#volume",
    "id": "Vk-oDAAAQBAJ",
    "etag": "TVqCZKlbl80",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/Vk-oDAAAQBAJ",
    "volumeInfo": {
     "title": "Kings of the Wyld",
     "authors": [
      "Nicholas Eames"
     ],
     "publisher": "Orbit",
     "publishedDate": "2017-02-21",
     "description": "WINNER OF THE REDDT/FANTASY AWARD FOR BEST DEBUT FANTASY NOVEL. SHORTLISTED FOR THE DAVID GEMMELL MORNINGSTAR AWARD. A retired group of legendary warriors must get the band back together for one last seemingly impossible mission in this rousing debut epic fantasy. Glory never gets old. Clay Cooper and his band were once the best of the best, the most feared and renowned crew of mercenaries this side of the Heartwyld. Their glory days long past, the mercs have grown apart and grown old, fat, drunk, or a combination of the three. Then an ex-bandmate turns up at Clay's door with a plea for help--the kind of mission that only the very brave or the very stupid would sign up for. It's time to get the band back together.",
     "industryIdentifiers": [
      {
       "type": "ISBN_13",
       "identifier": "9780316362467"
      },
      {
       "type": "ISBN_10",
       "identifier": "0316362468"
      }
     ],
     "readingModes": {
      "text": true,
      "image": false
     },
     "pageCount": 544,
     "printType": "BOOK",
     "categories": [
      "Fiction"
     ],
     "averageRating": 4.5,
     "ratingsCount": 12,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": true,
     "contentVersion": "1.5.6.0.preview.2",
     "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
     },
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=Vk-oDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=Vk-oDAAAQBAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.com/books?id=Vk-oDAAAQBAJ&printsec=frontcover&dq=kings+of+the+wyld&hl=&cd=1&source=gbs_api",
     "infoLink": "https://play.google.com/store/books/details?id=Vk-oDAAAQBAJ&source=gbs_api",
     "canonicalVolumeLink": "https://market.android.com/details?id=book-Vk-oDAAAQBAJ"
    },
    "saleInfo": {
     "country": "US",
     "saleability": "FOR_SALE",
     "isEbook": true,
     "listPrice": {
      "amount": 7.99,
      "currencyCode": "USD"
     },
     "retailPrice": {
      "amount": 7.99,
      "currencyCode": "USD"
     },
     "buyLink": "https://play.google.com/store/books/details?id=Vk-oDAAAQBAJ&rdid=book-Vk-oDAAAQBAJ&rdot=1&source=gbs_api",
     "offers": [
      {
       "finskyOfferType": 1,
       "listPrice": {
        "amountInMicros": 7990000.0,
        "currencyCode": "USD"
       },
       "retailPrice": {
        "amountInMicros": 7990000.0,
        "currencyCode": "USD"
       },
       "giftable": true
      }
     ]
    },
    "accessInfo": {
     "country": "US",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": true,
      "acsTokenLink": "http://books.google.com/books/download/Kings_of_the_Wyld-sample-epub.acsm?id=Vk-oDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=Vk-oDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "It&#39;s time to get the band back together. WINNER OF THE DAVID GEMMELL MORNINGSTAR AWARD FOR BEST FANTASY DEBUT.WINNER OF THE REDDIT/FANTASY AWARD FOR BEST DEBUT FANTASY NOVEL. For more from Nicholas Eames, check out: Bloody Rose"
    }
   }]
export default BookList