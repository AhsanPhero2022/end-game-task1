import Another from "./Another";
import CollageCampus from "./CollageCampus";
import Researched from "./Researched";
import SportsGround from "./SportsGround";

function Home() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCklk8A3XnrmmAfTE40NrrkQtK7TW4GFU6WcaoZ655JtAiS9-kiBRzMrZ0d2Jf7164c4s&usqp=CAU";

  return (
   <>
    <div className="flex justify-center gap-6 my-12">
     <div>
     <h2 className="text-3xl font-bold text-center py-12 ">
        Threre is the best college in Dhaka Bangladesh
      </h2>
      <p className="">In this college have 500 plus students and they are the very talented in Bangladesh, if you want then you can enroll the college</p> <br/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat quaerat perferendis saepe eos. Fugit mollitia laborum vitae et amet ex eos neque nostrum deleniti ab sapiente accusantium, nisi deserunt tenetur voluptate eum aut rem ea vel libero? Dolorum animi, inventore ex perferendis magnam possimus pariatur atque repudiandae. Alias, sunt.</p>
     </div>
    
        <img
        className="w-[500px] h-[500px] rounded"
        src={imageUrl} alt="" />
      
    </div>
    <CollageCampus></CollageCampus>
    <SportsGround></SportsGround>
    <Another></Another>
    <Researched></Researched>
   </>
  );
}

export default Home;
