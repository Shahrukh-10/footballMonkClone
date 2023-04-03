import { useRouter } from "next/router";
import styles from "../../styles/pagesCss/product/Slug.module.css";
import { BsSearch } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaPinterestSquare,
  FaRedditSquare,
  FaBus,
  FaPercent,
  FaCreditCard,
  FaRecycle,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const SlugProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  console.log(router.query.slug);
  const [openChart, setOpenChart] = useState(false);
  const [size, setSize] = useState()
  const [openImage, setOpenImage] = useState(false);
  const [descreption, setDescreptionOpen] = useState(true);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className={styles.product}>
      <div className={styles.productPage}>
        <div className={styles.headingSmall}>
          <h1>Argentina World Champions Graphic Hoodie</h1>
        </div>
        <div
          className={openImage ? styles.imageOpen : styles.productImage}
          onClick={() => setOpenImage(!openImage)}
        >
          <img
            src="https://footballmonk.in/wp-content/uploads/2023/01/Argentina-World-Champions-Graphic-Hoodie-Black.jpg"
            alt="ProductImage"
          />
          <div className={openImage ? styles.block : styles.searchBlock}>
            <BsSearch color="black" size={20} />
          </div>
          <div
            className={openImage ? styles.cross : styles.block}
            onClick={() => setOpenImage(false)}
          >
            <RxCross2 size={50} color="white" />
          </div>
        </div>
        <div className={styles.productDescreption}>
          <div className={styles.heading}>
            <h1>Argentina World Champions Graphic Hoodie</h1>
          </div>
          <div className={styles.paragraphDescreption}>
            <p>Buy Argentina World Champions Graphic Hoodies Online in India</p>
          </div>
          <div className={styles.socials}>
            <ul className={styles.socialIconList}>
              <li>
                <FaFacebookSquare color="blue" size={30} />
              </li>
              <li>
                <FaPinterestSquare color="red" size={30} />
              </li>
              <li>
                <FaTwitterSquare color="blue" size={30} />
              </li>
              <li>
                <FaWhatsappSquare color="green" size={30} />
              </li>
              <li>
                <FaRedditSquare color="orange" size={30} />
              </li>
            </ul>
          </div>
          <div className={styles.price}>
            <div className={styles.fakePrice}>₹1299</div>
            <div className={styles.orignalPrice}>₹999</div>
          </div>
          <div className={styles.siteDeliveryDescreption}>
            <p>
              Customized Jerseys will take 4-5 Business days to dispatch. Plain
              jerseys will be dispatched with 2-3 days.
            </p>
          </div>
          <div className={styles.freeShipping}>
            <p>Free Shipping for paid orders. COD Fees ₹70.</p>
          </div>
          <div className={styles.materialDescreption}>
            <h1>MATERIAL</h1>
            <p>
              100% Super Combed Cotton, 320 GSM, Bio Washed, Pre Shrunk, Double
              Stitched, Regular fit, Derby Rib at Hip & Wrist
            </p>
            <div className={styles.materialBlock}>
              <p className={styles.materialBlockPara}>
                All Graphic Tees will be shipped within 2-3 Business days. Once
                it is dispatched, the tracking update will be shared via SMS and
                Email
              </p>
              <div className={styles.deliveryDetails}>
                <p>Estimated delivery on 16 - 17 March, 2023</p>
              </div>
            </div>
          </div>
          <div className={styles.size}>
            <h1>Size : </h1>
            <div className={styles.sizeBlock}>
              <div className={`${styles.blocks} ${size==="S" && styles.active}`} onClick={()=>setSize("S")}>S</div>
              <div className={`${styles.blocks} ${size==="M" && styles.active}`} onClick={()=>setSize("M")}>M</div>
              <div className={`${styles.blocks} ${size==="L" && styles.active}`} onClick={()=>setSize("L")}>L</div>
              <div className={`${styles.blocks} ${size==="XL" && styles.active}`} onClick={()=>setSize("XL")}>XL</div>
            </div>
          </div>
          <div className={styles.quantity}>
            <div className={styles.quantityBlock}>
              <div className={styles.blockDecrease} onClick={()=>decrementQuantity()}>-</div>
              <div className={styles.blockQuantity}>{quantity}</div>
              <div className={styles.blockIncrease} onClick={()=>incrementQuantity()}>+</div>
            </div>
            <div className={styles.addToCart}>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className={styles.deliveryFeatures}>
            <div className={styles.dFeatureBlock}>
              <div className={styles.icon}>
                <FaBus color="white" size={30} />
              </div>
              <p>Free Delivery</p>
            </div>
            <div className={styles.dFeatureBlock}>
              <div className={styles.icon}>
                <FaPercent color="white" size={30} />
              </div>
              <p>100% Best Quality</p>
            </div>
            <div className={styles.dFeatureBlock}>
              <div className={styles.icon}>
                <FaCreditCard color="white" size={30} />
              </div>
              <p>Secured Payments</p>
            </div>
            <div className={styles.dFeatureBlock}>
              <div className={styles.icon}>
                <FaRecycle color="white" size={30} />
              </div>
              <p>Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sizeSection}>
        <div
          className={styles.descreption}
          onClick={() => {
            setDescreptionOpen(true);
          }}
        >
          <HiMenu className="mr-2" size={25} color="black" />
          <p>DESCRIPTION</p>
        </div>
        <div
          className={styles.reviews}
          onClick={() => setDescreptionOpen(false)}
        >
          <AiOutlineStar className="mr-2" size={25} color="black" />
          <p>REVIEW</p>
        </div>
      </div>
      <div className={descreption ? styles.sizeDisplay : styles.block}>
        <p>Buy [Premium Quality] Liverpool Home Kit 2022-23 Online in India</p>
        <div className={openChart ? styles.sizeChartOpen : styles.sizeChart}>
          <div className={openChart ? styles.cross : styles.block}>
            <RxCross2
              size={50}
              color="white"
              onClick={() => {
                setOpenChart(!openChart);
              }}
            />
          </div>
          <img
            onClick={() => {
              setOpenChart(true);
            }}
            src="https://footballmonk.in/wp-content/uploads/2023/G-tee/Graphic-Tee-size-chart.jpg"
            alt="sizeChart"
          />
        </div>
      </div>
      <div className={descreption ? styles.block : styles.reviewDisplay}>
        <div className={styles.review}>
          <p>No reviews posted for this product .</p>
        </div>
      </div>
    </div>
  );
};

export default SlugProduct;
