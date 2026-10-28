import productDataJson from "@/src/data/productData.json";

type ProductData = typeof productDataJson;

interface MainComponentProps {
    productData: ProductData ;
}

export default function MainComponent({ productData }: MainComponentProps) {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between">
            <div className="max-w-[120rem] grid grid-cols-2">
                <div>

                </div>
                <div className="flex flex-col">
                    <h1>{productData[0].name}</h1>
                </div>
            </div>
        </main>
    );
}