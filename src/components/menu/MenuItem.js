export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/75">
            <div className="text-center">
                <img src="/pizza.png" className="max-h-28 block mx-auto" alt="pizza" />
            </div>
            <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">loremReprehenderit fugiat mollit aute cupidatat officia duis ad ad amet. </p>
            <button className="bg-primary mt-3 text-white rounded-full px-8 py-2">
                Add to cart $1200
            </button>
        </div>
    );
}