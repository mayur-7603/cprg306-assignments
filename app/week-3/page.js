
import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center pt-10">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Shopping List
        </h1>

        <GroceryItemList />
      </div>
    </main>
  );
}
