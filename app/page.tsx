import FoodDeliveryApp from "./food-delivery-app";

type PageProps = {
  searchParams: Promise<{
    screen?: string;
    category?: string;
    product?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <FoodDeliveryApp
      initialStarted={params.screen === "home" || Boolean(params.product)}
      initialCategory={params.category}
      initialProductId={params.product}
    />
  );
}
