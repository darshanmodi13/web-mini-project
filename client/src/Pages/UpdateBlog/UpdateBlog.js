import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from "../../components/Navbar/Navbar";
import NewBlog from "../../components/NewBlog/NewBlog";
import Footer from "../../components/Footer/Footer";

export const UpdateBlog = () => {
  const { authState } = useGlobalContext();
  console.log(authState);
  return (
    <div className="container">
      <div style={{ position: "relative" }}>
        <Navbar />
        <div style={{ marginTop: "2%" }}>
          <NewBlog
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            content={`orem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta est id nisl pharetra cursus. Sed convallis mauris vulputate lectus vestibulum pretium. Donec porttitor est vel orci condimentum commodo. Vestibulum non nunc porta, tempus libero at, feugiat nunc. Proin faucibus, tellus eget sodales posuere, lacus nibh dapibus nulla, facilisis tempus lorem felis ac elit. Praesent efficitur consequat placerat. Etiam ultrices arcu non tellus gravida tincidunt.

Etiam sed ipsum ac arcu eleifend facilisis. Sed eu aliquam odio, in tristique elit. Fusce id massa leo. Quisque eu pretium massa. Pellentesque condimentum risus ac turpis commodo, vitae interdum urna lobortis. Curabitur at sollicitudin urna. Mauris auctor ut mi id porta. Duis bibendum, velit sollicitudin maximus vulputate, dolor ante pretium nulla, ac tempus orci diam maximus tortor. Nunc elit leo, dignissim eget metus vel, pharetra congue elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi blandit nisi vel tortor lacinia, ut cursus elit ullamcorper. Mauris dapibus posuere hendrerit. Proin ut laoreet nibh. Morbi consectetur, tortor eget consequat blandit, dolor velit iaculis sem, at interdum libero purus nec tortor. Sed ultrices semper odio, eu elementum est congue vel.

Donec ac ex aliquam, efficitur augue vitae, congue erat. Praesent non arcu dolor. Integer eleifend orci sit amet tempus iaculis. Quisque eleifend erat leo, sit amet egestas nunc efficitur eget. Etiam non suscipit lorem. Sed posuere lorem id faucibus pellentesque. Sed pellentesque faucibus nunc blandit rhoncus.

Phasellus scelerisque est eget odio porttitor, a sagittis augue semper. Suspendisse sed vehicula dolor. Fusce molestie, ipsum eget lacinia varius, dolor ante pretium nulla, ac consectetur nulla arcu quis magna. Mauris gravida felis diam, ut elementum purus semper eu. Proin volutpat arcu tellus, non faucibus nisi pharetra sagittis. Donec et sodales nunc, a vulputate augue. Quisque non tempus dolor. Mauris tempus mollis faucibus. Etiam tempor neque quis lacus pretium accumsan. Morbi suscipit, ex et viverra gravida, tellus est molestie nisi, eget mollis sapien est ut est.

Integer vel urna sed arcu congue venenatis. Aliquam massa ligula, malesuada quis commodo vel, dignissim nec urna. Suspendisse potenti. Donec aliquam condimentum vehicula. Fusce dui felis, imperdiet laoreet lacus vel, ultricies pretium elit. Nam nibh felis, lacinia sed rhoncus convallis, sollicitudin sed sapien. Suspendisse ornare vehicula libero eu iaculis. Sed maximus mauris sit amet auctor luctus.`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
