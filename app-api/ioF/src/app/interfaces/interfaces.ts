export interface RespuestaNoticias {
    status: string;
    totalResults: number;
    articles: Article[];
   }
   
   export interface Article {
    source: Source;
   }
   
   export interface Source {
    id?: string;
    name: string;
    
   }