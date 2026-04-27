"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  id: string;
  category: "Biryani" | "Pizza" | "Burger" | "Sandwhich";
  cardName: string;
  detailTitle: string;
  image: string;
  rating: string;
  reviews: string;
  price: string;
  calories: string;
  diameter: string;
  distance: string;
  delivery: string;
  defaultQty: number;
  activeSize: "Small" | "Medium" | "Large";
  description: string;
  detailImageClass: string;
};

const categories = [
  { name: "Biryani", icon: "/food-assets/biryani-hyderabadi.png" },
  { name: "Pizza", icon: "/food-assets/pizza-onion.png" },
  { name: "Burger", icon: "/food-assets/burger-veg.png" },
  { name: "Sandwhich", icon: "/food-assets/sandwich-veg.png" },
] as const;

const products: Product[] = [
  {
    id: "hyderabadi-biryani",
    category: "Biryani",
    cardName: "Hyderabadi Biryani",
    detailTitle: "Biriyani Bliss",
    image: "/food-assets/biryani-hyderabadi.png",
    rating: "4.8",
    reviews: "1050",
    price: "$ 7.50",
    calories: "450 Cal",
    diameter: "15.05 Cm",
    distance: "2.5 km",
    delivery: "20 min delivery",
    defaultQty: 1,
    activeSize: "Small",
    description:
      "Hyderabadi biryani is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender meat, and fragrant basmati rice. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-62px] top-[118px] h-[285px] w-[285px]",
  },
  {
    id: "bombay-biryani",
    category: "Biryani",
    cardName: "Bombay Biryan",
    detailTitle: "Biriyani Bliss",
    image: "/food-assets/biryani-bombay.png",
    rating: "4.5",
    reviews: "1320",
    price: "$ 8.50",
    calories: "380 Cal",
    diameter: "15.05 Cm",
    distance: "3.5 km",
    delivery: "25 min delivery",
    defaultQty: 2,
    activeSize: "Medium",
    description:
      "Bombay biryani is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,mater and fragrant basmati rice. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-76px] top-[122px] h-[260px] w-[270px]",
  },
  {
    id: "onion-capsicum-pizza",
    category: "Pizza",
    cardName: "onion capsicum pizza",
    detailTitle: "Pizza Bliss",
    image: "/food-assets/pizza-onion.png",
    rating: "4.9",
    reviews: "1550",
    price: "$ 10.50",
    calories: "480 Cal",
    diameter: "18.05 Cm",
    distance: "2.5 km",
    delivery: "20 min delivery",
    defaultQty: 1,
    activeSize: "Large",
    description:
      "Onion capsicum pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender onion and capsicum and fragrant pizza base. originating from the vibrant city of the Hyderabad in India, this is iconic dish",
    detailImageClass: "right-[-84px] top-[125px] h-[292px] w-[292px]",
  },
  {
    id: "panner-pizza",
    category: "Pizza",
    cardName: "Panner pizza",
    detailTitle: "Pizza Bliss",
    image: "/food-assets/pizza-paneer.png",
    rating: "4.2",
    reviews: "1130",
    price: "$ 9.50",
    calories: "460 Cal",
    diameter: "12.05 Cm",
    distance: "3.5 km",
    delivery: "25 min delivery",
    defaultQty: 1,
    activeSize: "Small",
    description:
      "Panner and mater pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,mater and fragrant pizza base. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-70px] top-[126px] h-[278px] w-[278px]",
  },
  {
    id: "veg-burger",
    category: "Burger",
    cardName: "Veg Burger",
    detailTitle: "Burger Bliss",
    image: "/food-assets/burger-veg.png",
    rating: "4.2",
    reviews: "1130",
    price: "$ 12.50",
    calories: "560 Cal",
    diameter: "6.05 Cm",
    distance: "2.5 km",
    delivery: "20 min delivery",
    defaultQty: 1,
    activeSize: "Medium",
    description:
      "Veg burger is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender aalu tiki and tamato,other and fragrant burger base. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-100px] top-[152px] h-[232px] w-[300px]",
  },
  {
    id: "paneer-burger",
    category: "Burger",
    cardName: "Paneer Burger",
    detailTitle: "Burger Bliss",
    image: "/food-assets/burger-paneer.png",
    rating: "4.6",
    reviews: "1230",
    price: "$ 8.50",
    calories: "460 Cal",
    diameter: "4.00 Cm",
    distance: "3.5 km",
    delivery: "25 min delivery",
    defaultQty: 1,
    activeSize: "Medium",
    description:
      "Panner burger is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,aalu tiki and tomato,other and fragrant burger base. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-74px] top-[168px] h-[210px] w-[270px]",
  },
  {
    id: "veg-sandwhich",
    category: "Sandwhich",
    cardName: "Veg Sandwhic",
    detailTitle: "Sandwhic Bliss",
    image: "/food-assets/sandwich-veg.png",
    rating: "4.6",
    reviews: "1230",
    price: "$ 7.50",
    calories: "460 Cal",
    diameter: "4.00 Cm",
    distance: "2.5 km",
    delivery: "20 min delivery",
    defaultQty: 1,
    activeSize: "Medium",
    description:
      "Veg sandwhic is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,aalu and tomato,other and fragrant burger base. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-36px] top-[140px] h-[300px] w-[255px] rounded-full",
  },
  {
    id: "potato-sandwhich",
    category: "Sandwhich",
    cardName: "Potato Sandwh",
    detailTitle: "Sandwhic Bliss",
    image: "/food-assets/sandwich-potato.png",
    rating: "4.6",
    reviews: "1343",
    price: "$ 6.50",
    calories: "460 Cal",
    diameter: "4.00 Cm",
    distance: "3.5 km",
    delivery: "25 min delivery",
    defaultQty: 1,
    activeSize: "Medium",
    description:
      "Potato sandwhic is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,aalu and tomato,other and fragrant burger base. originating from the vibrant city of the Hyderabad in india, this is iconic dish",
    detailImageClass: "right-[-38px] top-[142px] h-[292px] w-[240px] rounded-[58px]",
  },
];

type FoodDeliveryAppProps = {
  initialStarted?: boolean;
  initialCategory?: string;
  initialProductId?: string;
};

export default function FoodDeliveryApp({
  initialStarted = false,
  initialCategory,
  initialProductId,
}: FoodDeliveryAppProps) {
  const initialProduct = products.find(
    (product) => product.id === initialProductId,
  );
  const safeInitialCategory = categories.some(
    (category) => category.name === initialCategory,
  )
    ? (initialCategory as (typeof categories)[number]["name"])
    : initialProduct?.category ?? "Biryani";

  const [started, setStarted] = useState(initialStarted);
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]["name"]>(safeInitialCategory);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    initialProduct ?? null,
  );

  const visibleProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="min-h-screen bg-white font-sans text-[#111]">
      <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
        {!started ? (
          <OnboardingScreen
            onStart={() => {
              setStarted(true);
              window.history.pushState({}, "", "/?screen=home");
            }}
          />
        ) : selectedProduct ? (
          <DetailScreen
            product={selectedProduct}
            onBack={() => {
              setSelectedProduct(null);
              window.history.pushState(
                {},
                "",
                `/?screen=home&category=${encodeURIComponent(activeCategory)}`,
              );
            }}
          />
        ) : (
          <HomeScreen
            activeCategory={activeCategory}
            products={visibleProducts}
            onCategoryChange={(category) => {
              setActiveCategory(category);
              window.history.pushState(
                {},
                "",
                `/?screen=home&category=${encodeURIComponent(category)}`,
              );
            }}
            onProductSelect={(product) => {
              setSelectedProduct(product);
              window.history.pushState({}, "", `/?product=${product.id}`);
            }}
          />
        )}
      </div>
    </main>
  );
}

function OnboardingScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e6c3c4] via-[#f1dddd] to-white px-6 py-8 md:flex md:items-center md:justify-center md:px-10">
      <div className="relative mx-auto min-h-[690px] w-full max-w-[390px] md:grid md:min-h-[620px] md:max-w-6xl md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-12">
        <div className="relative h-[510px] md:h-[620px]">
          <FoodBubble
            src="/food-assets/onboarding-dumplings.png"
            className="left-[-38px] top-[48px] h-[118px] w-[118px] md:left-[12%] md:top-[30px] md:h-[150px] md:w-[150px]"
            imageClass="h-[100px] w-[100px] md:h-[126px] md:w-[126px]"
          />
          <FoodBubble
            src="/food-assets/onboarding-biryani.png"
            className="right-[-36px] top-[70px] h-[132px] w-[132px] md:right-[8%] md:top-[80px] md:h-[164px] md:w-[164px]"
            imageClass="h-[92px] w-[92px] md:h-[120px] md:w-[120px]"
          />
          <FoodBubble
            src="/food-assets/onboarding-pizza.png"
            className="left-[84px] top-[112px] h-[180px] w-[180px] md:left-[34%] md:top-[120px] md:h-[230px] md:w-[230px]"
            imageClass="h-[132px] w-[132px] md:h-[170px] md:w-[170px]"
          />
          <FoodBubble
            src="/food-assets/onboarding-burger.png"
            className="left-[-34px] top-[266px] h-[180px] w-[180px] md:left-[4%] md:top-[310px] md:h-[230px] md:w-[230px]"
            imageClass="h-[132px] w-[132px] md:h-[170px] md:w-[170px]"
          />
          <FoodBubble
            src="/food-assets/onboarding-snack.png"
            className="left-[134px] top-[370px] h-[104px] w-[104px] md:left-[38%] md:top-[430px] md:h-[132px] md:w-[132px]"
            imageClass="h-[104px] w-[104px] md:h-[132px] md:w-[132px]"
            plain
          />
          <FoodBubble
            src="/food-assets/biryani-bombay.png"
            className="right-[-40px] top-[285px] h-[140px] w-[140px] md:right-[2%] md:top-[315px] md:h-[190px] md:w-[190px]"
            imageClass="h-[108px] w-[108px] md:h-[150px] md:w-[150px]"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-white/55 via-white to-white md:hidden" />
        <div className="relative z-20 text-center md:text-left">
        <h1 className="mb-3 text-[29px] font-black leading-[1.12] tracking-[-0.7px] [text-shadow:0_3px_2px_rgba(0,0,0,0.26)] md:text-[56px] md:leading-[1.02]">
          Test the Joy of
          <br />
          Delivery
        </h1>
        <p className="mx-auto mb-8 max-w-[265px] text-[15px] leading-[1.12] text-[#6d6d6d] md:mx-0 md:mb-10 md:max-w-[460px] md:text-[21px] md:leading-[1.35]">
          Unlock a world of culinary delights,
          <br />
          right at your fingertips
        </p>
        <Link
          href="/?screen=home"
          onClick={(event) => {
            event.preventDefault();
            onStart();
          }}
          className="relative z-30 mx-auto flex h-[47px] w-full max-w-[340px] items-center justify-center rounded-[21px] bg-[#ed554f] text-[20px] font-extrabold text-white shadow-[0_4px_3px_rgba(0,0,0,0.28)] md:mx-0 md:h-[58px] md:max-w-[320px] md:rounded-[24px] md:text-[22px]"
        >
          Get Started
        </Link>
        </div>
      </div>
      <HomeIndicator />
    </section>
  );
}

function FoodBubble({
  src,
  className,
  imageClass,
  plain,
}: {
  src: string;
  className: string;
  imageClass: string;
  plain?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute flex items-center justify-center rounded-full ${plain ? "" : "bg-white/72"} ${className}`}
    >
      <Image
        src={src}
        alt=""
        width={220}
        height={220}
        className={`object-contain mix-blend-multiply ${imageClass}`}
      />
    </div>
  );
}

function HomeScreen({
  activeCategory,
  products,
  onCategoryChange,
  onProductSelect,
}: {
  activeCategory: (typeof categories)[number]["name"];
  products: Product[];
  onCategoryChange: (category: (typeof categories)[number]["name"]) => void;
  onProductSelect: (product: Product) => void;
}) {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#e6b8bb] via-[#fff7f7] to-white pb-[96px] md:pb-[120px]">
      <div className="mx-auto max-w-6xl px-6 pt-[27px] md:px-10 md:pt-10">
        <header className="flex items-center justify-between">
          <Image
            src="/food-assets/avatar.png"
            alt="User"
            width={54}
            height={54}
            className="h-[54px] w-[54px] rounded-full object-cover"
            priority
          />
          <div className="flex items-center gap-2 pr-3 text-[19px] font-extrabold">
            <PinIcon />
            <span>Canada</span>
            <ChevronIcon />
          </div>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-white/78"
          >
            <MenuIcon />
          </button>
        </header>

        <h2 className="mt-[43px] text-[25px] font-black leading-[1.14] tracking-[-0.4px] [text-shadow:0_3px_2px_rgba(0,0,0,0.22)] md:mt-16 md:text-[46px] md:leading-[1.08]">
          Ready to order your
          <br />
          favourite food ?
        </h2>

        <div className="mt-6 flex h-[46px] max-w-[720px] items-center rounded-[18px] bg-white shadow-[0_3px_5px_rgba(0,0,0,0.25)] md:mt-8 md:h-[58px] md:rounded-[22px]">
          <SearchIcon />
          <span className="flex-1 text-[13px] text-[#aaa] md:text-[16px]">Search your food</span>
          <button
            type="button"
            aria-label="Filter"
            className="mr-1.5 flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#ef6b66] text-white md:h-[50px] md:w-[50px]"
          >
            <FilterIcon />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-[42px] flex max-w-6xl gap-[15px] overflow-x-auto px-[28px] [scrollbar-width:none] md:flex-wrap md:px-10 [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <Link
            href={`/?screen=home&category=${encodeURIComponent(category.name)}`}
            key={category.name}
            onClick={(event) => {
              event.preventDefault();
              onCategoryChange(category.name);
            }}
            className={`flex h-[38px] shrink-0 items-center gap-3 rounded-full pr-6 text-[17px] font-extrabold text-white ${
              activeCategory === category.name ? "bg-[#f39b99]" : "bg-[#bdb4b5]"
            }`}
          >
            <span className="ml-1 flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full bg-white ring-[3px] ring-white">
              <Image
                src={category.icon}
                alt=""
                width={44}
                height={44}
                className="h-[30px] w-[30px] object-cover mix-blend-multiply"
              />
            </span>
            {category.name}
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-[31px] flex max-w-6xl items-center justify-between px-[27px] md:px-10">
        <h3 className="text-[21px] font-extrabold md:text-[30px]">Popular Food</h3>
        <button type="button" className="text-[10px] font-semibold md:text-sm">
          See all
        </button>
      </div>

      <div className="mx-auto mt-[29px] flex max-w-6xl gap-2.5 overflow-x-auto overflow-y-hidden pl-[27px] pr-5 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-10 lg:grid-cols-3 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductSelect(product)}
          />
        ))}
      </div>

      <BottomNav />
    </section>
  );
}

function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <Link
      href={`/?product=${product.id}`}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      className="h-[234px] w-[178px] shrink-0 overflow-hidden rounded-[14px] bg-[#fff0f0] px-[10px] pb-3 text-left md:h-[300px] md:w-full md:px-5 md:pb-5"
    >
      <div className="flex h-[135px] items-end justify-center md:h-[185px]">
        <Image
          src={product.image}
          alt={product.cardName}
          width={170}
          height={140}
          className="max-h-[132px] w-auto object-contain mix-blend-multiply md:max-h-[178px]"
        />
      </div>
      <h4 className="mt-2 truncate text-[18px] font-extrabold md:text-[22px]">
        {product.cardName}
      </h4>
      <Stars className="mt-2" />
      <p className="mt-1.5 whitespace-nowrap text-[12px] font-extrabold md:text-[14px]">
        {product.distance}
        <span className="mx-2 text-[#ed554f]">•</span>
        {product.delivery}
      </p>
    </Link>
  );
}

function DetailScreen({
  product,
  onBack,
}: {
  product: Product;
  onBack: () => void;
}) {
  const [quantity, setQuantity] = useState(product.defaultQty);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#e6b8bb] via-[#fff8f8] to-white px-[26px] pb-8 pt-[28px] md:px-10 md:pb-14 md:pt-10">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between">
        <RoundButton
          ariaLabel="Back"
          href={`/?screen=home&category=${encodeURIComponent(product.category)}`}
          onClick={onBack}
        >
          <BackIcon />
        </RoundButton>
        <h2 className="text-[21px] font-extrabold">Details</h2>
        <RoundButton ariaLabel="Favorite">
          <HeartIcon filled />
        </RoundButton>
      </header>

      <Image
        src={product.image}
        alt={product.cardName}
        width={320}
        height={320}
        priority
        className={`pointer-events-none absolute z-0 object-contain mix-blend-multiply md:hidden ${product.detailImageClass}`}
      />

      <div className="relative z-10 mx-auto mt-[18px] max-w-6xl md:grid md:grid-cols-[0.88fr_1.12fr] md:items-center md:gap-10">
        <div className="md:pb-8">
        <h1 className="text-[27px] font-black tracking-[-0.5px] [text-shadow:0_3px_2px_rgba(0,0,0,0.20)] md:text-[52px] md:leading-tight">
          {product.detailTitle}
        </h1>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[13px] text-[#ef5b56]">★</span>
          <span className="text-[13px] font-extrabold text-[#8d8d8d]">
            {product.rating} ({product.reviews} review)
          </span>
        </div>

        <Metric label="Price" value={product.price} className="mt-5" />
        <Metric label="Calories" value={product.calories} className="mt-7" />
        <Metric label="Diameter" value={product.diameter} className="mt-8" />

        <div className="mt-[27px] flex items-center gap-2">
          <QuantityButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </QuantityButton>
          <span className="w-8 text-center text-[15px] font-extrabold">
            {String(quantity).padStart(2, "0")}
          </span>
          <QuantityButton onClick={() => setQuantity(quantity + 1)}>
            +
          </QuantityButton>
        </div>

        <h3 className="mt-[23px] text-[17px] font-extrabold text-[#8f8f8f]">
          Size
        </h3>
        <div className="mt-[20px] flex gap-3">
          {(["Small", "Medium", "Large"] as const).map((size) => (
            <span
              key={size}
              className={`flex h-[30px] min-w-[84px] items-center justify-center rounded-full px-4 text-[16px] font-extrabold ${
                product.activeSize === size ? "bg-[#f77f7c]" : "bg-[#eee8e8]"
              }`}
            >
              {size}
            </span>
          ))}
        </div>

        <p className="mt-[22px] max-w-[296px] text-[15.5px] font-medium leading-[1.09] tracking-[-0.1px] md:max-w-[560px] md:text-[18px] md:leading-[1.35]">
          {product.description}......<strong>more_</strong>
        </p>
        </div>
        <div className="hidden justify-end md:flex">
          <Image
            src={product.image}
            alt={product.cardName}
            width={620}
            height={620}
            priority
            className="max-h-[560px] w-full max-w-[620px] object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <button
        type="button"
        className="sticky bottom-[30px] z-20 mx-auto mt-8 flex h-[48px] w-full max-w-[560px] items-center justify-center rounded-[19px] bg-[#ef554f] text-[20px] font-extrabold text-white shadow-[0_5px_4px_rgba(0,0,0,0.25)] md:h-[58px] md:rounded-[24px]"
      >
        Add to Cart
      </button>
      <HomeIndicator />
    </section>
  );
}

function Metric({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[17px] font-extrabold text-[#8f8f8f]">{label}</p>
      <p className="mt-0.5 text-[19px] font-black">{value}</p>
    </div>
  );
}

function RoundButton({
  children,
  ariaLabel,
  onClick,
  href,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  href?: string;
}) {
  const className =
    "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/78 text-[#2c2c2c]";

  if (href) {
    return (
      <Link
        aria-label={ariaLabel}
        href={href}
        onClick={(event) => {
          event.preventDefault();
          onClick?.();
        }}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

function QuantityButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#ef5b56] text-[23px] font-black leading-none text-white"
    >
      {children}
    </button>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-[2px] text-[16px] leading-none text-[#ef5b56] ${className}`}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 flex h-[72px] items-center justify-around bg-[#fff6f6] px-6">
      <button
        type="button"
        aria-label="Home"
        className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#ef554f] text-white"
      >
        <HomeIcon />
      </button>
      <button type="button" aria-label="Favorites" className="text-[#252525]">
        <HeartIcon />
      </button>
      <button type="button" aria-label="Orders" className="text-[#252525]">
        <TrashIcon />
      </button>
      <button type="button" aria-label="Notifications" className="text-[#252525]">
        <BellIcon />
      </button>
    </nav>
  );
}

function HomeIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-[8px] left-1/2 h-[4px] w-[122px] -translate-x-1/2 rounded-full bg-[#2d2d2d]/65 shadow-[0_-1px_2px_rgba(0,0,0,0.25)] md:hidden" />
  );
}

function PinIcon() {
  return (
    <svg width="17" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5A7.2 7.2 0 0 0 4.8 9.7c0 5.35 7.2 11.8 7.2 11.8s7.2-6.45 7.2-11.8A7.2 7.2 0 0 0 12 2.5Zm0 9.8a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 18 12" fill="none">
      <path
        d="M2 2.2 9 9l7-6.8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="30" height="26" viewBox="0 0 32 28" fill="none">
      <path d="M4 6h24M4 14h24M4 22h24" stroke="#111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="mx-3 text-[#9f9f9f]" width="29" height="29" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="14" r="8.5" stroke="currentColor" strokeWidth="4" />
      <path d="m21 21 7 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 30 30" fill="none">
      <path d="M5 9h20M5 15h20M5 21h20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19" cy="9" r="2.2" fill="#ef6b66" stroke="white" strokeWidth="1.4" />
      <circle cx="11" cy="15" r="2.2" fill="#ef6b66" stroke="white" strokeWidth="1.4" />
      <circle cx="21" cy="21" r="2.2" fill="#ef6b66" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="31" height="28" viewBox="0 0 32 28" fill="none">
      <path d="M18 6 10 14l8 8M11 14h15" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}>
      <path
        d="M12 20.4S4.8 16 3.2 10.8C2 6.8 4.4 3.8 7.8 3.8c1.9 0 3.2 1 4.2 2.4 1-1.4 2.3-2.4 4.2-2.4 3.4 0 5.8 3 4.6 7C19.2 16 12 20.4 12 20.4Z"
        stroke="currentColor"
        strokeWidth={filled ? "0" : "2"}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3.2 11.4 12 4l8.8 7.4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.2 10.5v8h4.2v-4.6h3.2v4.6h4.2v-8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M8 8v11h8V8M6 8h12M10 8V5h4v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path d="M6.5 17h11l-1.2-1.8V11a4.3 4.3 0 0 0-8.6 0v4.2L6.5 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19.2c.4.7 1.1 1 2 1s1.6-.3 2-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
