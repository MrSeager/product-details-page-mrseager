//Components
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";
import productData from '@/src/data/productData.json';

type ProductData = typeof productData;

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-[#777]">
      <HeaderComponent />
      <MainComponent 
        productData={productData}
      />
    </div>
  );
}
