const { useRouter } = require("next/router");
import Link from "next/link";
import styles from "../../styles/pagesCss/product-category/ProductCategory.module.css";

const SlugProductCategory = () => {
  const router = useRouter();
  console.log(router.query.slug);

  const ProductCategoryImage = () => {
    return (


      <div className={styles.image}>
        <Link href="/product/sa"><img
          src="https://footballmonk.in/wp-content/uploads/2023/01/Argentina-World-Champions-Graphic-Hoodie-Black.jpg"
          alt="ProductImage"
        />
        </Link>
        <p className={`px-3 ${styles.productDetail}`}>Argentina worldcup hoodie</p>
        <div className={styles.price}>
          <p className={styles.fakePrice}>₹1299</p>
          <p className={styles.realPrice}>₹999</p>
        </div>
        <div className={styles.sale}>
            <p>SALE</p>
        </div>
      </div>

    );
  };

  return (
    <div className={styles.productCategory}>
      <div className={styles.mainImage}>
        <img
          src="https://footballmonk.in/wp-content/uploads/2019/06/Graphic-tee-banner-category.jpg"
          alt="mainImage"
        />
      </div>

      <div className={styles.scrollListCategory}>
        <ul className={styles.scrollList}>
          <li>
            <div className={styles.scrollListItem}>
              <p>All Jerseys</p>
            </div>
          </li>
          <li>
            <div className={styles.scrollListItem}>
              <p>Graphic Trees</p>
            </div>
          </li>
          <li>
            <div className={styles.scrollListItem}>
              <p>Season 22/23</p>
            </div>
          </li>
          <li>
            <div className={styles.scrollListItem}>
              <p>Tank Tops</p>
            </div>
          </li>
          <li>
            <div className={styles.scrollListItem}>
              <p>Customized Jersey</p>
            </div>
          </li>
          <li>
            <div className={styles.scrollListItem}>
              <p>National Kits</p>
            </div>
          </li>
          <li>
            <div className={styles.scrollListItem}>
              <p>Season 21/22</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.productDisplay}>
        <div className={styles.left}>
          <ul className={styles.listAccountPage}>
            <h1>Categories</h1>

            <li>BUY @ ₹699</li>
            <li>CLUB TANK TOPS</li>
            <li>CUSTOMIZED JERSEYS</li>
            <li>FOOTBALL JERSEY</li>
            <li>GRAPHIC TSHIRTS</li>
            <li>HUMAN RACE</li>
            <li>INTERNATIONAL JERSEYS</li>
            <li>MESSI & RONALDO</li>
            <li>PHONE CASE COVER</li>
            <li>PLAYER VERSION</li>
            <li>SEASON 20/21</li>
            <li>SEASON 21/22</li>
            <li>SEASON 22/23</li>
          </ul>
        </div>
        <div className={styles.right}>
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
          <ProductCategoryImage />
        </div>
      </div>
    </div>
  );
};

export default SlugProductCategory;
