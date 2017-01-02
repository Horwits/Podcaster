export class Podcast {
    public title: string;
    public author: string;

    public feed: string;

    public genres: string[];

    public image: string;
    
    constructor(title, author, image) {
        this.title = title;
        this.author = author;
        this.image = image;
    }

    /* public wrapperType: string;
     public kind: string;
     public collectionId: number;
     public trackId: number;
     public artistName: string;
     public collectionName: string;
     public trackName: string;
     public collectionCensoredName: string;
     public trackCensoredName: string;
     public collectionViewUrl: string;
     public feedUrl: string;
     public trackViewUrl: string;
     public artworkUrl30: string;
     public artworkUrl60: string;
     public artworkUrl100: string;
     public collectionPrice: string;
     public trackPrice: number;
     public trackRentalPrice: number;
     public collectionHdPrice: number;
     public trackHdPrice: number;
     public trackHdRentalPrice: number;
     public releaseDate: Date;
     public collectionExplicitness: string;
     public trackExplicitness: string;
     public trackCount: number;
     public country: string;
     public currency: string;
     public primaryGenreName: string;
     public contentAdvisoryRating: string;
     public artworkUrl600: string;
     public genreIds: string[];
     public genres: string[];*/
}
