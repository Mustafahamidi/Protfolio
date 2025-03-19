import recipe from './assets/1.jpg';
import todo from './assets/todo.jpg';
import bank from './assets/bank.jpg';
import ecommerce from './assets/rc.jpg';


export const projects = [
   
    
    {
      id: 1,
      img: ecommerce, 
      alt:"E-ecommerce website img",
      name: "E-commerce Website",
      link: 'https://ecommerce-app-lemon-iota.vercel.app/',
      description:
        "An E-commerce Website is an online platform that allows users to browse and purchase products, manage shopping carts, make secure payments, track orders, and offers features for sellers to manage inventory, process transactions, and track customer activities.",
    },
    {
        id: 2,
        img: todo,
        alt:"Todo app img",
        name: "Todo List App",
        description: "Sample react todo app",
        link: 'https://todo-react-simple.vercel.app/'
        
        
    }, {
        id: 3,
        img: recipe, 
        alt: "Recipe App img",
        name: "Recipe Finder App",
        description:"A Recipe Finder website allows users to search for recipes, view detailed instructions, and watch cooking videos. Users can enter ingredients or recipe names to find matching results and see full recipe information with an embedded video for easy reference.",
        link:"https://recipe-finder-henna-psi.vercel.app/"

    },
    {
        id: 4,
        img: bank, 
        alt:"Banking System img",
        name: "Banking System",
        description:"",
    }
    
   
  ];
  