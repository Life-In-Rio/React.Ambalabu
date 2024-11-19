import { rackets } from "./data";

export default function Panggil() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {rackets.map((racket) => (
                <div 
                    key={racket.id} 
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                    <img 
                        src={racket.image} 
                        alt={racket.title} 
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800">{racket.title}</h2>
                        <p className="text-gray-600 font-medium mt-2">${racket.price}</p>
                        <p className="text-gray-700 mt-2">{racket.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
