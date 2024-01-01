export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white">
            <img src="/pizza.png" alt="pizza" />
            <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">loremReprehenderit fugiat mollit aute cupidatat officia duis ad ad amet. </p>
            <button className="bg-primary mt-3 text-white rounded-full px-8 py-2">
                Add to cart $1200
            </button>
        </div>
    );
}