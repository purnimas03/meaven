'use client';
import DishDetail from "../../components/dishcontent/dish-innercontent";
import IngredientsSection from "../../components/dishcontent/IngredientsSection";
import RelatedDishes from "../../components/dishcontent/RelatedDishes";
import { useParams } from 'next/navigation';


export default function Singledish() {
  const { slug } = useParams();

  return (
    <div>
      <DishDetail slug={slug} />
      <IngredientsSection slug={slug} />
      <RelatedDishes slug={slug} />
    </div>
  );
}
