/*
 * GIVEN these definitions:
 */
interface Document {
  id: string;
  name: string;
}

type getDocuments = () => Promise<Document[]>;

interface DocumentContent {
  description: string,
  rating: number,
}

type getContentOf = (document: Document) => Promise<DocumentContent>;

/*
 * EXERCISE 1:
 * Implement the "enrichDocuments" function. It returns all documents with its content.
 */

interface RichDocument extends Document{
  content: DocumentContent;
}

type enrichDocuments = () => Promise<RichDocument[]>;

function enrichDocumen ()



/*
 * EXERCISE 2:
 * Refactor the function you created in exercise 2 to match the new signature.
 */
interface RichContent extends DocumentContent {
  // true if rating > 3
  hasGoodRating: boolean;
}

interface RichDocument extends Document {
  content: RichContent
}

type getRichDocuments = () => Promise<RichDocument[]>

/*
 * EXERCISE 3:
 * How would you change the getDocuments definition to support a filter by: country, type, size?
 */

/*
 * EXERCISE 4:
 * Implement a Helper which applies always the same filters
 */

/**
 * EXERCISE 5: 
 * How would you test your getRichDocuments function given that you dont
 * have access to the implementetion of the given functions.
 */
