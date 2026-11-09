//Components
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";
//Data
import productData from '@/src/data/productData.json';

export default function Home() {
  return (
    <div className="bg-[#f9fafc] flex flex-col flex-1 items-center justify-center text-[#777]">
      <HeaderComponent />
      <MainComponent 
        productData={productData}
      />
    </div>
  );
}
