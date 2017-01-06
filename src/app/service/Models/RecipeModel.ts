export class RecipeModel{

    
    public Id:String;
    public Title: String;
    public ImageUrl: String;
    public TypeRecipe :String;    
    public Difficulty :String;
    public Magazine : String;
    public Time :String;
    public ShortDescription : String;
    public Process : Array<Object>;
    public Ingredients : Array<Object>;
    
    constructor(){}
    
}