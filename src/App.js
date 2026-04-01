import { useEffect, useMemo, useState } from "react";

const packs = [
  {
    id: "country-jeb-pack",
    name: "Country Jeb Pack",
    price: "$12.99",
    image: "https://i.imgur.com/oofl0Vn.png",
    description: "USA BABY OIL AND HOTDOGS BABY",
    details: "https://www.youtube.com/watch?v=pTObSdocpxE",
    cards: [
      {
        name: "Cowboy Hat Jeb",
        image: "https://i.imgur.com/CF5Qy91.png",
        description: "I GAVE YOU ALL I HAD, I DID. 3 ATK/ 3 HP",
      },
      {
        name: "Trucker Jeb",
        image: "https://i.imgur.com/LwaC6ra.png",
        description:
          "Trucker Jeb loves a lot lizard. Brings one card back from the playing field to your hand.",
      },
      {
        name: "BBQ Jeb",
        image: "https://i.imgur.com/MZuKdkq.png",
        description:
          "Use 1 BBQ item every 2 turns: Hotdog +2 HP, Burger +2 ATK, Chicken -1 cooldown.  ",
      },
      {
        name: "American Flag Jeb",
        image: "https://i.imgur.com/wTbNmRp.png",
        description:
          "buffs the cards adjacent to him by 5 with is patriotism. 0 ATK/ 2 HP",
      },
      {
        name: "Military Jeb",
        image: "https://i.imgur.com/8tPmjEc.png",
        description: "He's seen things man. 4 ATK/ 3 HP ",
      },
    ],
  },
  {
    id: "job-jeb-pack",
    name: "Job Jeb Pack",
    price: "$14.99",
    image: "https://i.imgur.com/YhpvCr1.png",
    description:
      "Whats better then one Jeb in the office, a lot of Jebs in the office",
    details: "GET BACK TO WORK OR YOUR FIRED.",
    cards: [
      {
        name: "Interview Jeb",
        image: "https://i.imgur.com/hT7jDrI.png",
        description:
          "Interview Jeb will look at one of your cards for one turn then on the next turn buff his attack by 2. 0 ATK/ 3 HP ",
      },
      {
        name: "HR Jeb",
        image: "https://i.imgur.com/CD4WHkr.png",
        description:
          "HR fires a chosen card. It gets 3 turns of severance: +4 ATK and +3 HP. After 3 turns, it is removed from the field. 1 ATK/ 2 HP",
      },
      {
        name: "PTO Jeb",
        image: "https://i.imgur.com/eaPzqn3.png",
        description:
          "He's gone fishing, if the opponents card health is less then PTO Jebs attack he will use his fishing rod next turn to steal that card and make it yours. 2 ATK/ 2 HP",
      },
      {
        name: "Lunch Break Jeb",
        image: "https://i.imgur.com/UTm8CbH.png",
        description: "Heal yourself or another card for 3 HP. 2 ATK/ 3 HP",
      },
      {
        name: "CEO Jeb",
        image: "https://i.imgur.com/vusiTVF.png",
        description:
          "Throws money at any problem(he literally thorws money at you). 5 ATK/ 1 HP",
      },
    ],
  },
  {
    id: "magic-jeb-pack",
    name: "Magic Jeb Pack",
    price: "$19.99",
    image: "https://i.imgur.com/m5Ggfbe.png",
    description:
      "Wizard hats, glowing cards, and suspiciously enchanted vibes.",
    details: "Them wizard Jeb are up to no good with there tricks and spells",
    cards: [
      {
        name: "Wizard Jeb",
        image: "https://i.imgur.com/xYPeB8J.png",
        description: "Wizard Jeb shoots fire balls. 4 ATK/ 2 HP",
      },
      {
        name: "Sick Wizard Jeb",
        image: "https://i.imgur.com/rsBQLOI.png",
        description:
          "Unlike Wizard Jeb, Sick Wizard Jeb cant shoot fire ball because he sneezes a lot weakness for 2 turns and poison for 1 turn. 2 ATK/ 1 HP, weakness makes cards half of what they were ",
      },
      {
        name: "Crystal Jeb",
        image: "https://i.imgur.com/q8IsHUW.png",
        description:
          "Crystal Jeb Jumps in front of attacks, takes all damage, then shatters—causing bleed for 2 turns.  2 ATK/ 1 HP ",
      },
      {
        name: "Cloak Jeb",
        image: "https://i.imgur.com/doi6n7v.png",
        description:
          "Cloaked for 2 turns (can attack, can’t be attacked). Attacks while cloaked stack on the target but deal no damage until 2 turns after reveal. If killed, no damage is taken. 3×2 ATK / 3 HP ",
      },
      {
        name: "Boss Jeb",
        image: "https://i.imgur.com/KSfF1dN.png",
        description: "https://youtu.be/FKwVFWwA_x8?t=49. 1 ATK/1 HP",
      },
    ],
  },
  {
    id: "beach-jeb-pack",
    name: "Beach Jeb Pack",
    price: "$16.99",
    image: "https://i.imgur.com/rusLJpH.png",
    description: "Jeb beach pack bring the sun and the fun back into playing",
    details: "Jeb beach pack bring the sun and the fun back into playing",
    cards: [
      {
        name: "Sunglasses Jeb",
        image: "https://i.imgur.com/Dst7SEo.png",
        description:
          "Sunglasses Jeb takes no damage first hit but loses the sunglasses after. 3 ATK/ 1 HP",
      },
      {
        name: "Surfboard Jeb",
        image: "https://i.imgur.com/HRiGfA1.png",
        description:
          "surfboard Jeb makes enemy card wet leaving them weak for 1 turn. 1ATK/ 1 HP weakness makes cards half of what they were",
      },
      {
        name: "Sandcastle Jeb",
        image: "https://i.imgur.com/5xhbGId.png",
        description:
          "Sandcastle Jeb builds one sandcastle around 1 card that does 3 defense per turn. 0 ATK/ 3 HP ",
      },
      {
        name: "Volleyball Jeb",
        image: "https://i.imgur.com/GMRY9Sa.png",
        description: "Volleyball Jeb does a double hit your head. ATK/ 2 HP",
      },
      {
        name: "Sunset Jeb",
        image: "https://i.imgur.com/wTMX9av.png",
        description:
          "The man that never sleeps Sunset Jeb has a big attack but vary weak. 7 ATK/ 1HP",
      },
    ],
  },
];

function getRoute() {
  return window.location.hash.replace("#", "") || "/";
}

function goTo(route) {
  window.location.hash = route;
}

function ProductImage({ src, alt, className, label }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`${className} image-fallback`}>
        <div className="image-fallback-badge">JEB PACK</div>
        <div className="image-fallback-title">{label || alt}</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function NavLink({ to, children, currentRoute }) {
  const active = currentRoute === to;
  return (
    <button
      className={active ? "nav-link active" : "nav-link"}
      onClick={() => goTo(to)}
    >
      {children}
    </button>
  );
}

function Header({ currentRoute }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div>
          <div className="eyebrow">LIMITED TIME DROP</div>
          <h1 className="site-title">Jeb Bush Playing Cards</h1>
        </div>
        <nav className="nav">
          <NavLink to="/" currentRoute={currentRoute}>
            Home
          </NavLink>
          <NavLink to="/shop" currentRoute={currentRoute}>
            Shop
          </NavLink>
          <NavLink to="/about" currentRoute={currentRoute}>
            About
          </NavLink>
          <NavLink to="/checkout" currentRoute={currentRoute}>
            Checkout
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function HomePage({ onSecretClick }) {
  return (
    <main>
      <section className="hero container">
        <div className="hero-eyebrow">THE INTERNET’S MOST NECESSARY DECK</div>
        <h2 className="hero-title" onClick={onSecretClick}>
          Please Clap.
        </h2>
        <p className="hero-text">
          Welcome to the official home of premium Jeb Bush card packs.
        </p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={() => goTo("/shop")}>
            Shop Now
          </button>
          <button
            className="button button-light"
            onClick={() => goTo("/about")}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="container feature-grid">
        <div className="feature-card">
          <h3>100% collectible</h3>
          <p>Made for serious collectors and people who enjoy Jeb. websites.</p>
        </div>
        <div className="feature-card">
          <h3>5 stars everytime</h3>
          <p>Wheels "I love theses cards i'm gonna by way more."</p>
        </div>
        <div className="feature-card">
          <h3>no money back guaranteed</h3>
          <p>It would cost me way to much to take them back.</p>
        </div>
      </section>
    </main>
  );
}

function SecretPage() {
  return (
    <main className="container page-spacing narrow center">
      <div className="info-box">
        <div className="eyebrow small-red">SECRET PAGE</div>
        <h2>You found it.</h2>
        <p>Did you hear? HunterxHunter getting another season!</p>
        <p>GOT HIM!</p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={() => goTo("/")}>
            Go Home
          </button>
        </div>
      </div>
    </main>
  );
}

function ShopPage() {
  return (
    <main className="container page-spacing">
      <div className="page-head center">
        <h2>Shop the Collection</h2>
        <p>Choose your favorite Jeb Bush card pack.</p>
      </div>

      <section className="card-grid">
        {packs.map((pack) => (
          <div className="product-card" key={pack.id}>
            <ProductImage
              src={pack.image}
              alt={pack.name}
              className="product-image"
              label={pack.name}
            />
            <div className="product-body">
              <div className="product-top-row">
                <h3>{pack.name}</h3>
                <span className="price-pill">{pack.price}</span>
              </div>
              <p className="muted">{pack.description}</p>
              <button
                className="button button-outline full-width"
                onClick={() => goTo(`/product/${pack.id}`)}
              >
                View Pack
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function ProductPage({ productId, addToCart }) {
  const pack = useMemo(
    () => packs.find((item) => item.id === productId),
    [productId]
  );

  if (!pack) {
    return (
      <main className="container page-spacing center">
        <h2>Pack not found</h2>
        <p className="muted">This Jeb pack has vanished into history.</p>
        <button className="button button-dark" onClick={() => goTo("/shop")}>
          Back to Shop
        </button>
      </main>
    );
  }

  return (
    <main className="container page-spacing product-layout">
      <div className="product-detail-image-wrap">
        <ProductImage
          src={pack.image}
          alt={pack.name}
          className="product-detail-image"
          label={pack.name}
        />
      </div>
      <div>
        <div className="eyebrow small-red">LIMITED EDITION PACK</div>
        <h2 className="product-title">{pack.name}</h2>
        <div className="product-price">{pack.price}</div>
        <p className="product-details">{pack.details}</p>

        <div className="availability-box">
          <strong>Availability</strong>
          <div className="sold-text">maybe</div>
        </div>

        <div className="included-cards-box">
          <h3>Cards Included in This Pack</h3>
          <div className="mini-card-grid">
            {pack.cards.map((card) => (
              <div className="mini-card" key={card.name}>
                <ProductImage
                  src={card.image}
                  alt={card.name}
                  className="mini-card-img"
                  label={card.name}
                />
                <div className="mini-card-name">{card.name}</div>
                <div className="mini-card-description">{card.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-actions left-align">
          <button
            className="button button-dark"
            onClick={() => addToCart(pack)}
          >
            Add to Cart
          </button>
          <button
            className="button button-light"
            onClick={() => goTo("/checkout")}
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="container page-spacing narrow">
      <h2>About the Packs</h2>
      <div className="info-box">
        <p>
          I hand made every pack, my hands hurt like really really really bad,
          the next packs will take we a long time to make becasue my hand hurt
          so much get them while you can.
        </p>
        <p>
          Every pack is designed to feel rare, important, and strangely real.
        </p>
        <p>Thank you for supporting.</p>
      </div>
    </main>
  );
}

function CheckoutPage({
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  submitCheckout,
  checkoutMessage,
}) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.priceNumber * item.quantity,
    0
  );

  return (
    <main className="container page-spacing narrow">
      <div className="checkout-box left-checkout">
        <div className="eyebrow small-red">CHECKOUT</div>
        <h2 className="checkout-title">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="checkout-text">
            Your cart is empty. Go grab some impossible-to-buy Jeb packs first.
          </p>
        ) : (
          <>
            <div className="checkout-list">
              {cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="checkout-item-img"
                    label={item.name}
                  />
                  <div className="checkout-item-main">
                    <div className="checkout-item-top">
                      <div>
                        <div className="checkout-item-name">{item.name}</div>
                        <div className="checkout-item-price">{item.price}</div>
                      </div>
                      <button
                        className="remove-link"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="qty-row">
                      <span>Qty</span>
                      <button
                        className="qty-button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button
                        className="qty-button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <strong>$4.99</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <strong>${(subtotal + 4.99).toFixed(2)}</strong>
              </div>
            </div>

            <div className="fake-form-grid">
              <input className="fake-input" placeholder="Name on card" />
              <input className="fake-input" placeholder="Card number" />
              <input className="fake-input" placeholder="Expiration date" />
              <input className="fake-input" placeholder="CVV" />
              <input
                className="fake-input full-span"
                placeholder="Shipping address"
              />
            </div>

            {checkoutMessage ? (
              <div className="checkout-prank-message">{checkoutMessage}</div>
            ) : null}

            <div className="hero-actions left-align">
              <button className="button button-dark" onClick={submitCheckout}>
                Place Order
              </button>
              <button className="button button-light" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute());
  const [cartItems, setCartItems] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [secretClicks, setSecretClicks] = useState(0);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) {
      window.location.hash = "/";
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const addToCart = (pack) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === pack.id);
      const priceNumber = Number(String(pack.price).replace(/[^0-9.]/g, ""));
      if (existing) {
        return current.map((item) =>
          item.id === pack.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...pack, priceNumber, quantity: 1 }];
    });
    goTo("/checkout");
  };

  const updateQuantity = (id, nextQty) => {
    if (nextQty <= 0) {
      setCartItems((current) => current.filter((item) => item.id !== id));
      return;
    }
    setCartItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: nextQty } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setCheckoutMessage("");
  };

  const submitCheckout = () => {
    setCheckoutMessage("Sorry, we're all out. Happy April Fools Day 😭");
  };

  const handleSecretClick = () => {
    setSecretClicks((current) => {
      const next = current + 1;
      if (next >= 10) {
        goTo("/secret");
        return 0;
      }
      return next;
    });
  };

  let page = <HomePage onSecretClick={handleSecretClick} />;

  if (route === "/shop") page = <ShopPage />;
  else if (route === "/about") page = <AboutPage />;
  else if (route === "/checkout")
    page = (
      <CheckoutPage
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        submitCheckout={submitCheckout}
        checkoutMessage={checkoutMessage}
      />
    );
  else if (route === "/secret") page = <SecretPage />;
  else if (route.startsWith("/product/"))
    page = (
      <ProductPage
        productId={route.split("/product/")[1]}
        addToCart={addToCart}
      />
    );

  return (
    <div className="app-shell">
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(to bottom, #fff7f7 0%, #ffffff 45%, #f4f8ff 100%);
          color: #0f1b3d;
        }
        button { font: inherit; cursor: pointer; }
        .app-shell { min-height: 100vh; }
        .container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
        .header {
          border-bottom: 1px solid #ececec;
          background: rgba(255,255,255,0.92);
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(8px);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
          flex-wrap: wrap;
        }
        .eyebrow {
          color: #ef4444;
          letter-spacing: 0.28em;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .small-red { color: #dc2626; }
        .site-title {
          margin: 0;
          font-size: 34px;
          line-height: 1;
          font-weight: 900;
        }
        .nav { display: flex; gap: 8px; flex-wrap: wrap; }
        .nav-link {
          border: none;
          background: transparent;
          padding: 12px 16px;
          border-radius: 999px;
          color: #0f1b3d;
        }
        .nav-link:hover, .nav-link.active { background: #f2f4f8; }
        .hero { text-align: center; padding: 72px 0 42px; }
        .hero-eyebrow {
          color: #1d4ed8;
          letter-spacing: 0.3em;
          font-size: 14px;
          font-weight: 800;
        }
        .hero-title {
          font-size: clamp(52px, 9vw, 82px);
          margin: 20px 0 10px;
          line-height: 0.95;
          font-weight: 900;
        }
        .hero-text {
          max-width: 760px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.8;
          color: #51627f;
        }
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .left-align { justify-content: flex-start; }
        .button {
          padding: 16px 26px;
          border-radius: 20px;
          font-weight: 800;
          font-size: 17px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button-dark {
          background: #0f1b3d;
          color: white;
          border: none;
          box-shadow: 0 8px 20px rgba(15, 27, 61, 0.18);
        }
        .button-light {
          background: white;
          color: #0f1b3d;
          border: 2px solid #0f1b3d;
        }
        .button-outline {
          background: white;
          color: #0f1b3d;
          border: 2px solid #0f1b3d;
          margin-top: 16px;
        }
        .full-width { width: 100%; }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-bottom: 80px;
        }
        .feature-card, .info-box, .checkout-box {
          background: white;
          border: 1px solid #e8ebf0;
          border-radius: 28px;
          box-shadow: 0 8px 18px rgba(15, 27, 61, 0.08);
        }
        .feature-card { padding: 26px; }
        .feature-card h3, .page-head h2, .product-top-row h3, .product-title, .checkout-title, h2 {
          margin-top: 0;
          color: #0f1b3d;
        }
        .feature-card p, .page-head p, .muted, .product-details, .checkout-text, .info-box p {
          color: #51627f;
          line-height: 1.7;
        }
        .page-spacing { padding: 60px 0 80px; }
        .page-head { margin-bottom: 32px; }
        .page-head h2, h2 {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 12px;
        }
        .center { text-align: center; }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .product-card {
          overflow: hidden;
          border-radius: 32px;
          background: white;
          border: 1px solid #e8ebf0;
          box-shadow: 0 10px 24px rgba(15, 27, 61, 0.08);
        }
        .product-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }
        .image-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          background: linear-gradient(135deg, #1d4ed8 0%, #0f1b3d 100%);
          color: white;
        }
        .image-fallback-badge {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.24em;
          opacity: 0.85;
          margin-bottom: 12px;
        }
        .image-fallback-title {
          font-size: 28px;
          line-height: 1.15;
          font-weight: 900;
          max-width: 220px;
        }
        .product-body { padding: 22px; }
        .product-top-row {
          display: flex;
          gap: 12px;
          justify-content: space-between;
          align-items: flex-start;
        }
        .price-pill {
          background: #eef4ff;
          color: #1d4ed8;
          font-size: 14px;
          font-weight: 700;
          border-radius: 999px;
          padding: 8px 12px;
          white-space: nowrap;
        }
        .product-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
          align-items: start;
        }
        .product-detail-image-wrap {
          overflow: hidden;
          border-radius: 32px;
          background: white;
          border: 1px solid #e8ebf0;
          box-shadow: 0 10px 24px rgba(15, 27, 61, 0.08);
        }
        .product-detail-image {
          width: 100%;
          display: block;
          height: 560px;
          object-fit: cover;
        }
        .product-title {
          font-size: 56px;
          margin-bottom: 12px;
        }
        .product-price {
          font-size: 28px;
          font-weight: 900;
          color: #1d4ed8;
          margin-bottom: 20px;
        }
        .availability-box, .included-cards-box {
          background: white;
          border: 1px solid #e8ebf0;
          border-radius: 24px;
          padding: 18px 20px;
          box-shadow: 0 4px 12px rgba(15, 27, 61, 0.05);
          margin-top: 24px;
        }
        .included-cards-box h3 { margin: 0 0 16px; font-size: 22px; }
        .sold-text { color: #dc2626; margin-top: 8px; font-weight: 700; }
        .mini-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .mini-card {
          border: 1px solid #e8ebf0;
          border-radius: 20px;
          padding: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
        }
        .mini-card-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 14px;
          margin-bottom: 10px;
          display: block;
        }
        .mini-card-name {
          font-weight: 700;
          color: #0f1b3d;
          line-height: 1.35;
        }
        .mini-card-description {
          margin-top: 6px;
          font-size: 14px;
          line-height: 1.5;
          color: #51627f;
        }
        .narrow { max-width: 820px; }
        .info-box, .checkout-box { padding: 34px; }
        .info-box p:not(:last-child) { margin-bottom: 18px; }
        .checkout-title { font-size: 64px; margin: 14px 0; }
        .left-checkout { text-align: left; }
        .checkout-list {
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }
        .checkout-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 16px;
          border: 1px solid #e8ebf0;
          border-radius: 20px;
          padding: 14px;
          background: #fff;
        }
        .checkout-item-img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 14px;
          display: block;
        }
        .checkout-item-main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }
        .checkout-item-top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: start;
        }
        .checkout-item-name {
          font-weight: 800;
          font-size: 20px;
          color: #0f1b3d;
        }
        .checkout-item-price {
          color: #51627f;
          margin-top: 4px;
        }
        .remove-link {
          border: none;
          background: transparent;
          color: #dc2626;
          font-weight: 700;
          padding: 0;
        }
        .qty-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #51627f;
        }
        .qty-button {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid #d7dce5;
          background: white;
        }
        .qty-number {
          min-width: 24px;
          text-align: center;
          font-weight: 700;
          color: #0f1b3d;
        }
        .checkout-summary {
          margin-top: 24px;
          border: 1px solid #e8ebf0;
          border-radius: 20px;
          padding: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 8px 0;
          color: #51627f;
        }
        .total-row {
          margin-top: 8px;
          padding-top: 14px;
          border-top: 1px solid #e8ebf0;
          color: #0f1b3d;
          font-size: 18px;
        }
        .fake-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 24px;
        }
        .fake-input {
          width: 100%;
          border: 1px solid #d7dce5;
          border-radius: 14px;
          padding: 14px 16px;
          font: inherit;
        }
        .full-span {
          grid-column: 1 / -1;
        }
        .checkout-prank-message {
          margin-top: 22px;
          border: 2px solid #fecaca;
          background: #fff1f2;
          color: #991b1b;
          border-radius: 18px;
          padding: 16px 18px;
          font-weight: 700;
          line-height: 1.5;
        }
        @media (max-width: 1000px) {
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .product-layout { grid-template-columns: 1fr; }
          .product-detail-image { height: 420px; }
          .feature-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .site-title { font-size: 28px; }
          .page-head h2, h2 { font-size: 36px; }
          .product-title { font-size: 42px; }
          .checkout-title { font-size: 48px; }
          .card-grid { grid-template-columns: 1fr; }
          .hero { padding-top: 48px; }
          .button { width: 100%; }
          .hero-actions { gap: 12px; }
          .container { width: min(1120px, calc(100% - 24px)); }
          .mini-card-grid { grid-template-columns: 1fr; }
          .checkout-item { grid-template-columns: 1fr; }
          .fake-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <Header currentRoute={route} />
      {page}
    </div>
  );
}
