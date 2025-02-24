import { Button } from "@/components/ui";
import { Categories, Title, TopBar } from "@/components/shared";
import { Container } from "@/components/shared"; 
import { Filters } from "@/components/shared/filters";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-black" />
        <Categories />
      </Container>

      <TopBar />


      <Container className="pb-14">
        <div className="flex gap-[60px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
