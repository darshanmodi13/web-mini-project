import React, { useEffect } from "react";
import styles from "./FullBlogPage.module.css";
import photo from "../../assets/photo.jpeg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import blogApi from "../../api/blog.api";
import { useSearchParams } from "react-router-dom";

export default function FullBlogPage() {
  const { params } = useSearchParams();
  console.log(params);
  useEffect(() => {}, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.FullBlogPage}>
        <div className={styles.Imgcontainer}>
          <img src={photo} alt="" className={styles.FullPage} />
        </div>
        <div className={styles.blogcontainer}>
          <div className={styles.category_container}>
            <div className={styles.category}>Blog</div>
            <div className={styles.date}>March 24,2022</div>
          </div>
          <h1 className={styles.details}>
            Turning away from the ledge he started slowly down the mountain
            Turning away from the ledge he started slowly down the mountain
          </h1>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
            urna vel tortor tincidunt blandit. Phasellus nec augue eget risus
            elementum ornare. Sed commodo blandit purus, quis scelerisque neque
            ullamcorper sed. Integer vulputate posuere tempus. Vivamus tincidunt
            aliquet orci a blandit. Pellentesque laoreet suscipit diam eu
            maximus. Donec scelerisque orci ut turpis vestibulum, sit amet
            dignissim purus mollis. Nulla tincidunt pretium vehicula. Quisque
            sed lacus eu velit volutpat viverra. In purus risus, placerat a
            luctus id, facilisis eget eros. Sed ornare massa posuere nibh
            aliquam auctor. Suspendisse et accumsan dui. Etiam rutrum tristique
            suscipit. Sed nec consectetur tortor. Phasellus ut condimentum
            lectus. Sed consequat dolor eros, nec sagittis arcu ultricies sit
            amet. Nullam vitae lobortis orci. Cras non nibh eu eros viverra
            dictum at at justo. Phasellus eu massa et ipsum elementum mollis.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed dictum felis ligula, convallis fermentum
            ligula iaculis ut. Vivamus convallis mollis elementum. Sed ut quam
            eget ligula cursus vehicula. Aenean vestibulum elit vel fermentum
            vehicula. Duis mi arcu, semper ut enim id, consequat sollicitudin
            nibh. Curabitur at libero massa. Ut id sagittis erat. Vivamus
            pellentesque, lacus ut tincidunt auctor, mi massa maximus leo, ac
            egestas dolor neque vitae orci. Sed pulvinar diam diam, quis
            efficitur nulla hendrerit in. Nunc elementum molestie consectetur.
            In condimentum nisi sem. Sed sed aliquet tellus. In sodales suscipit
            tincidunt. Praesent semper scelerisque urna, pellentesque dictum
            massa aliquam nec. Duis porta elit et semper dictum. Sed eu
            malesuada sapien. Ut sed laoreet purus. Integer condimentum
            ultricies lorem ac luctus. Quisque laoreet ut est non suscipit.
            Aliquam pellentesque nisi sit amet urna dignissim facilisis non id
            justo. Donec sed lorem diam. Ut accumsan eu erat vitae porttitor.
            Fusce laoreet libero sem, eget ornare tortor faucibus et. Maecenas
            id iaculis urna, a consectetur ipsum. Donec hendrerit, augue et
            euismod interdum, ligula eros aliquet risus, in cursus est mauris
            sit amet purus. Suspendisse cursus aliquam bibendum. Proin
            vestibulum suscipit sem a ultrices. Nulla massa magna, pretium sit
            amet blandit eu, aliquet at purus. Vestibulum fringilla, arcu nec
            mollis eleifend, felis dui consectetur sapien, at dapibus lacus
            neque eu massa. Donec sed lacus tortor. Quisque in leo semper,
            cursus turpis ac, maximus sem. Integer tristique, erat vitae aliquam
            sagittis, augue turpis molestie nulla, quis porttitor turpis enim
            quis magna. Vivamus vitae diam dictum, tincidunt sapien quis,
            pretium erat. Vestibulum aliquam accumsan viverra. Proin egestas sed
            lorem in convallis. Aenean eget porttitor ipsum. Ut eleifend enim
            urna, in sodales nisi placerat sit amet
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
