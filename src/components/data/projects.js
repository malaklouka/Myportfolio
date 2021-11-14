import todo from "../../img/todo.png";
import shop from "../../img/shopcart.png";
import pokemon from "../../img/pokemon.png";
import doc from "../../img/doc.png";
import tunifid from "../../img/tunifid.png";
import web from "../../img/web.png";
import xml from "../../img/xml.png";
import iot from "../../img/iot.png";
import movie from "../../img/movie.png";
import listtodo from "../../img/listtodo.jfif";
import portfolio from "../../img/portfolio.png";










export const ProjectData = [
  {
    id:1,
    title:"MyPortfolio",
    about:"Using FrontEnd tools, this website , totally responsive, is my personnal Portfolio where you can find my last projects, my experience, and my skills in web developpement. It also give you the ability to contact me. ",
    tags:["HTML","CSS","JavaScript","ReactJS"],
    github:"https://github.com/elbehimohammeddev/MyPortfolio",
    image:portfolio
    
    
},

{
    id:1,
    title:"MovieApp",
    about:"A front-end website interface for movies, where the user can search for movies, filter by rating and names and can add a movie to the list.",
    tags:["HTML","CSS","JavaScript","ReactJS","ReactRedux","Bootstap","DOM"],
    github:"https://github.com/malaklouka/hooks",
    image:movie
},
{
    id:1,
    title:"To-Do List",
    about:"A front-end website interface that allows you to create, read, update and delete (CRUD) your to-dos.",
    tags:["HTML","CSS","JavaScript","ReactJS","ReactRedux","Bootstap","DOM"],
    github:"https://github.com/malaklouka/todolist_redux",
    image:listtodo
},
{
  id:1,
  title:"Simple To-Do List",
  about:"A front-end website interface that allows you to create, read, update and delete (CRUD) your to-dos.",
  tags:["HTML","CSS","JavaScript","DOM"],
  github:"https://github.com/malaklouka/simple_todolist",
  image:todo
},
    {
      id: 1,
      title: "Tunifid: web and mobile application for managing loyalty cards",
      about:
        "The functionalities developed in this application are mainly: card management loyalty and offers by the brand that offers them to customers, also the customer manages his cards (adding, suppressure,..). And consultation of cards and offers by the administrator (the administrator consults the cards and offers offered by the brand).",
      tags: ["Angular", "Android", "PHP", "NoSQL"],
      image:tunifid,
    },
    {
      id: 2,
      title: "web and mobile application CoVa",
      about:
        "web and mobile co-valuation application aiming to connect travelers with empty space in their luggage with parcel shippers looking for cheap transport..",
      tags: ["Angular", "Ionic", "Cordova","TypeScript", "NoSQL", "PHP"],
      github: "mobile: https://github.com/malaklouka/appionic, web:https://github.com/malaklouka/appweb_covalisage",
      image: web,
    },
    {
        id: 3,
        title: "",
        about:
          "web application enables each of us to take action against food waste in order to give every food produced an opportunity to reach its destiny: to be eaten.",
        tags: ["ReactJS", "Redux", "JavaScript", "MongoDB", "NodeJs", "Express"],
        github: "https://github.com/malaklouka/FinalProject",
      },
      {
        id: 3,
        title: "Pokemon",
        about:
          "A front-end website interface that allows you to create list of pokemons, search pokemon by name, get the max of pokemons, and compare two type of pokemons.",
        tags: ["ReactJS", "Redux", "JavaScript", "API"],
        github: "https://github.com/malaklouka/pokemon_challenge",
        image: pokemon
      },
      {
        id:1,
        title:"Docplanner",
        tags:["HTML","CSS","JavaScript","DOM"],
        github:"https://github.com/malaklouka/docplanner",
        image:doc
      },
      {
        id:1,
        title:"tache software xml",
        about:"a tache where we present how deep learning helps to treat diseases",
        tags:["xml","xsl","dtd","CSS"],
        github:"https://github.com/malaklouka/tache_software_xml",
        image:xml
      },
      {
        id:1,
        title:"Shopping cart challenge",
        about:"A front-end website interface that allows you to buy product, add product to cart, calculate total price ",
        tags:["HTML","JavaScript","DOM","CSS"],
        github:"https://github.com/malaklouka/shopping_cart_challenge",
        image:shop
      },
      {
        id:1,
        title:"Deeplearning in medical",
        about:"a tache where we propose a breast cancer detecter using IOT ",
        tags:["Xml","Xsl","dtd","Azure","CSS"],
        demo:"https://docs.google.com/presentation/d/1Hy1V6HeJupjUk6kXuzZtZJZbuVJHODYl/edit?usp=sharing&ouid=107577507744048166005&rtpof=true&sd=true",
        github:"https://github.com/malaklouka/deeplearninginmedical",
        image:iot
      },
  ];